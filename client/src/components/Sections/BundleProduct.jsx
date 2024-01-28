import React from 'react'
import { ProductsLoader } from '../Utilities/ProductsLoader'
import { Card } from '../Card/Card'
import { useFetch } from '../../hooks/useFetch'

export const BundleProduct = () => {
    const { products, loading, baseUrl } = useFetch(`products?populate=*`)

    return (
        <>
            {loading
                ?
                <ProductsLoader />
                :
                (products?.filter(product => product?.attributes?.category === "Bundle").map(product => { return (<Card key={product.id} id={product.id} title={product?.attributes?.title} image={baseUrl + product?.attributes?.imgmain?.data[0].attributes?.url} price={product?.attributes?.price} salePrice={product?.attributes?.salePrice} salePriceTag={product?.attributes?.salePrice} />) }))}
        </>
    )
}
