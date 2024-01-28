import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { Card } from '../Card/Card'
import { ProductsLoader } from '../Utilities/ProductsLoader'

export const RecentProducts = ({ selectedProducts, sorted, text, sliderInput }) => {
    const { products, loading, error, baseUrl } = useFetch(`products?populate=*&${selectedProducts.map(item => `filters[category]=${item}`)}&filters[title][$contains]=${text}&sort=price:${sorted}&filters[price][$lte]=${sliderInput}`)

    return (
        <>
            {(products?.length == 0) ? 'No product found, check again later' : products?.map((product) => {
                const { title, imgmain, price, salePrice } = product?.attributes;
                const { id } = product;
                return (<Card key={id} id={id} title={title} image={baseUrl + imgmain?.data[0].attributes?.url} price={price} salePrice={salePrice} />)

            })}
        </>
    )
}
