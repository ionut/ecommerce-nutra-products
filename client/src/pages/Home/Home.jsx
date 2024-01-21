import React from 'react'
import { Slider } from '../../components/Slider/Slider'
import { HomeGroupOne } from '../../components/Sections/HomeGroupOne'
import { MostPopularProducts } from '../../components/Sections/MostPopularProducts'
export const Home = () => {

    return (
        <main>
            <Slider />
            <HomeGroupOne />
            <MostPopularProducts />
        </main>
    )
}
