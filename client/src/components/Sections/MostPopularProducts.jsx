import React from 'react'
import Arrow from '../../assets/images/arrow.svg'
import { Button } from '../Button/Button'
import { Card } from '../Card/Card'
import { useFetch } from '../../hooks/useFetch'
import { ProductsLoader } from '../Utilities/ProductsLoader'

export const MostPopularProducts = () => {

    const { products, loading, error, baseUrl } = useFetch("products?populate=*")

    return (
        <section className='bg-colorBg'>
            <div className='container mx-auto py-28'>
                <div className="flex flex-col justify-center items-center gap-6">
                    <img src={Arrow} alt='Arrow' className='w-6 h-6' loading=" lazy" />
                    <h2 className='text-darkBlue text-3xl font-extrabold text-center'>Most Popular products • Longterm Growth & Immediate Effect</h2>
                    <p className='text-darkBlue text-xl font-medium text-center'>Our best selling products are formulated to use daily, for immediate effect and logterm progressive performance.</p>
                    <div className="grid gap-10 md:grid-cols-3">
                        {loading ? <ProductsLoader /> : products?.map((product) => {
                            const { title, imgmain, price, tag, salePrice } = product?.attributes;
                            const { id } = product
                            return <Card key={product.id} id={id} title={title} image={baseUrl + imgmain?.data[0].attributes.url} price={price} tag={tag} salePrice={salePrice} />
                        })}
                        <Button type={'button'} text={'* See Our Bundle Deal *'} backgroundColor={'bg-orange'} hoverColor={'hover:text-darkBlue'} extraStyle={'col-start-2 '} />
                    </div>

                </div>
            </div>
        </section>
    )
}
