import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { ProductsLoader } from '../../components/Utilities/ProductsLoader'

export const Product = () => {
    const id = useParams().id
    const { products, loading, error } = useFetch(`products/${id}?populate=*`)
    return (
        <>

            {loading ? <ProductsLoader /> : <div>{error ? error : `${products?.attributes?.title}`}</div>}


        </>
    )
}
