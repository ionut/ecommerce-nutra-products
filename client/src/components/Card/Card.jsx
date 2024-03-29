import React, { useState } from 'react'
import { Button } from '../Button/Button'
import { Link } from 'react-router-dom';

export const Card = ({ id, title, image, price, salePrice, tag, salePriceTag }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link to={`/product/${id}`}>
            <div className='flex flex-col justify-center items-center bg-white pb-5 cursor-pointer relative' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                {salePriceTag && <span className='after:content-["15%"] after:absolute after:-top-[15px] after:-right-[15px] after:w-24 after:h-24 after:bg-pumpkinOrange after:rounded-full after:border-[4px] after:border-brightSkyBlue after:flex after:justify-center after:items-center text-4xl text-white font-bold' />}
                {!isHovered && tag
                    ?
                    (<div className="relative bg-brightSkyBlue w-full text-darkBlue font-extrabold uppercase text-center py-1 before:content-whiteArrow before:absolute before:left-1 before:top-1/2 before:-translate-y-[45%] ">{tag}</div>)
                    :
                    <div className='h-[32px]'></div>
                }
                <img src={image} alt='Product' loading=" lazy" />
                {!isHovered
                    ?
                    (
                        <>
                            <h3 className='text-darkBlue text-xl font-medium text-center'>{title}</h3>
                            <p className="flex items-center gap-2">
                                {salePrice && <span className='text-[#7E7E7E] font-semibold text-lg relative line-through '>{salePrice && (salePrice.toFixed(2) + '€')}</span>}
                                <span className='text-pumpkinOrange text-xl font-bold'>{price.toFixed(2)}€</span>
                            </p>
                        </>
                    )
                    :
                    <Button type={'button'} extraStyle={'bg-pumpkinOrange hover:text-darkBlue w-2/3'}>ADD TO CART</Button>
                }
            </div >
        </Link >
    )
}
