import React, { useEffect, useState } from "react";
import { makeRequest } from "../request";


export const useFetch = (url) => {
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const baseUrl = import.meta.env.VITE_BASE_URL;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                setError("")
                const res = await makeRequest.get(url);
                setProducts(res.data.data)

            } catch (error) {
                // Aborting a fetch throws an error
                // So we can't update state afterwards
                setError(error.message)
            }
            setLoading(false)
        }
        fetchProducts()
    }, [url])
    return { products, loading, error, baseUrl }
}
