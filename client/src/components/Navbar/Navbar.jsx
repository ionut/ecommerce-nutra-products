import React, { useState } from 'react';
import logo from '../../assets/images/to-z-logo.svg';
import { NavLink } from 'react-router-dom';
import { Button } from '../Button/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useFetch } from '../../hooks/useFetch';

export const Navbar = () => {
    const { products, loading } = useFetch(`products?populate=*`)
    const [open, setOpen] = useState(false)
    const conditionalNavLink = ({ isActive, isPending }) =>
        isPending ? "text-darkBlue" : isActive ? "text-blue" : "hover:text-blue";

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <header>
            <nav className='container mx-auto py-5'>
                <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-row items-center md:gap-4 xl:gap-8'>
                        <img src={logo} alt='Thunder of zeus' loading=" lazy" />
                        <NavLink to="/" className={conditionalNavLink}><span className="text-xl font-medium">Home</span></NavLink>
                        <NavLink to="/products" className={conditionalNavLink}><span className="text-xl font-medium">Shop</span></NavLink>
                        <div onClick={handleClick} className="relative cursor-pointer z-20 text-xl font-medium">
                            <span>Products </span>
                            <KeyboardArrowDownIcon />
                            {open &&
                                <ul className='absolute top-20 left-0 bg-white rounded-[20px] p-8 min-w-96 '>
                                    {products.map((product) => (
                                        <li key={product.id} className="text-xl font-medium">
                                            <NavLink to={'product/' + product.id} className={conditionalNavLink} onClick={handleClick} >{product.attributes.title}</NavLink>
                                        </li>
                                    ))}
                                </ul>
                            }
                        </div>
                    </div>
                    <div className='flex flex-row items-center md:gap-4 xl:gap-8'>
                        <Button type={'button'} text={'Get 15% Discount'} backgroundColor={'bg-orange'} boxShadow={'shadow-buttonShadow'} hoverColor={'hover:text-darkBlue'} />
                        <SearchIcon fontSize="large" />
                        <NavLink to="/asda" className={conditionalNavLink}><span className="text-xl font-medium">My account</span></NavLink>
                        <a className='text-xl font-medium relative'>Cart: <ShoppingCartOutlinedIcon fontSize="large" /><span className="absolute -right-3 -top-3 bg-orange text-white w-6 h-6 rounded-[50%] flex justify-center items-center">0</span></a>
                    </div>
                </div>
            </nav>
        </header >
    )
}
