import React, { useState } from 'react'
import { Button } from '../Button/Button'
import { Link } from 'react-router-dom';

export const Card = ({ id, title, image, price, salePrice, tag }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link to={`/product/${id}`}>
            <div className='relative flex flex-col justify-center items-center bg-white pb-5 cursor-pointer h-[410px]' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                {!isHovered && tag
                    ?
                    (<div className="relative bg-blue w-full text-darkBlue font-extrabold uppercase text-center py-1 before:content-whiteArrow before:absolute before:left-1 before:top-1/2 before:-translate-y-[45%] ">{tag}</div>)
                    :
                    <div className='h-[32px]'></div>
                }
                <img src={image} alt='Product' />
                {!isHovered
                    ?
                    (
                        <>
                            <h3 className='text-darkBlue text-xl font-medium text-center'>{title}</h3>
                            <p className="flex items-center gap-2">
                                <span className='text-[#7E7E7E] font-semibold text-lg relative line-through'>{salePrice && (salePrice.toFixed(2) + '€')}</span>
                                <span className='text-orange text-xl font-bold'>{price.toFixed(2)}€</span>
                            </p>
                        </>
                    )
                    :
                    <Button type={'button'} text={'ADD TO CART'} backgroundColor={'bg-orange'} hoverColor={'hover:text-darkBlue'} width={'w-2/3'} />
                }
            </div >
        </Link >
    )
}
