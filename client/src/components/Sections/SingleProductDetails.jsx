import React from 'react'
import { Button } from '../Button/Button'
import { addToCart } from '../../redux/cartReducer'
import { useDispatch } from 'react-redux'

export const SingleProductDetails = ({ product }) => {
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addToCart({
            id: product.id,
            image: product.attributes.imgmain.data[0].attributes.url,
            title: product.attributes.title,
            price: product.attributes.price,
            quantity: 1
        }))
    }

    return (
        <>
            <div className="flex flex-col p-[20px]">
                <p className='mt-[10px]'>Reviews</p>
                <hr className='text-gray my-[10px]' />
                <h2 className='text-darkBlue text-3xl font-extrabold'>
                    {product?.attributes.title}
                </h2>
                <hr className='text-gray my-[10px]' />
                <div>
                    <h5 className='text-dark text-lg font-medium italic'>“I got ToZ because a friend recommended it, I was skepticle but since trying it my confidence has grown and i’ve now ordered a yearly subscription”.</h5>
                    <h4 className='text-steel text-lg font-medium my-[10px]'>Pete S. (49) Stoke On Trent • UK</h4>
                    <p>Stars</p>
                </div>
                <hr className='text-gray my-[10px]' />
                <h2 className='text-pumpkinOrange text-3xl font-extrabold mb-[10px]'>{product?.attributes.price.toFixed(2)}€ / per container</h2>
                <p className='text-darkBlue text-lg font-normal'>{product?.attributes?.smallDescription}</p>
                <hr className='text-gray mt-[10px] mb-5' />
                <Button type={'button'} extraStyle={'bg-pumpkinOrange hover:text-darkBlue w-full'} addToCart={handleAddToCart}>One Time Purchase To Cart </Button>
                <p className='text-darkBlue text-lg font-normal my-[10px]'>Category: {product?.attributes?.category}</p>
            </div>
        </>
    )
}
