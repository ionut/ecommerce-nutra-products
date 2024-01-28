import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { ProductsLoader } from '../Utilities/ProductsLoader'
import { Card } from '../Card/Card'

export const Products = ({ products, loading, baseUrl }) => {

    return (
        <>
            {loading ? <ProductsLoader /> : products?.map((product) => {
                const { title, imgmain, price, tag, salePrice } = product?.attributes;
                const { id } = product
                return <Card key={product.id} id={id} title={title} image={baseUrl + imgmain?.data[0].attributes.url} price={price} tag={tag} salePrice={salePrice} />
            })
            }
        </>
    )
}
