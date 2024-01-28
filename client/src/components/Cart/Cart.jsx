import React from 'react'
import { Button } from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../../redux/cartReducer';
import { NavLink } from 'react-router-dom';

export const Cart = ({ openCart, baseUrl }) => {
    const products = useSelector(state => state.cart.products)
    const dispatch = useDispatch()

    const subTotal = () => {
        let total = 0;
        products.forEach(product => total += product.quantity * product.price)
        return total.toFixed(2);
    }

    return (
        <>
            {openCart && <div className='absolute top-28 right-0 rounded-[20px] bg-white w-[480px] py-6 px-10 z-50'>
                <div className="flex flex-col gap-5">
                    <h4>Cart</h4>
                    <hr className='text-gray h-1' />
                    {products?.map(product => (
                        <div key={product.id} className="grid grid-cols-12 items-center">
                            <img src={baseUrl + product.image} alt="image" className='w-24 col-span-2' />
                            <div className='flex flex-col col-span-9'>
                                <p>{product.title}</p>
                                <p>{product.quantity} x {product.price.toFixed(2)}</p>
                            </div>
                            <span className='cursor-pointer' onClick={() => dispatch(removeProduct(product.id))}>X</span>
                        </div>))}

                    <h4>Subtotal: {subTotal()}</h4>
                    <Button extraStyle={'bg-pumpkinOrange hover:text-darkBlue w-1/2'}>
                        <NavLink to="/cart">View cart</NavLink></Button>
                    <Button extraStyle={'bg-dark hover:text-darkBlue w-1/2'}>Checkout</Button>
                </div>
            </div>}
        </>
    )
}
