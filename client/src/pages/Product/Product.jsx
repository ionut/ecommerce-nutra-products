import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { ProductsLoader } from '../../components/Utilities/ProductsLoader'
import TabsAccordion from '../../components/Tabs/TabsAccordion'

export const Product = () => {
    const id = useParams().id
    const { products, loading, error, baseUrl } = useFetch(`products/${id}?populate=*`)
    const [imgIndex, setImgIndex] = useState(0)

    return (
        <>
            <main className='bg-colorBg py-40'>
                <section className='container mx-auto mb-20'>
                    <div className="grid grid-cols-12 gap-4">
                        <div className='col-span-4'>
                            <div className='bg-white cursor-pointer mb-4'>
                                {<img src={baseUrl + products?.attributes?.imgmain?.data[imgIndex].attributes?.url} />}
                            </div>
                            <div className='flex w-14 h-14 gap-4'>
                                {products?.attributes?.imgmain?.data?.map((product, index) => (<img key={product?.id} src={baseUrl + product?.attributes?.url} onClick={() => setImgIndex(index)} />))}
                            </div>
                        </div>
                        <div className="bg-white col-span-5">b</div>
                        <div className='bg-white col-span-3'>a</div>
                    </div>


                    {/* {loading ? <ProductsLoader /> : <div>{error ? error : `${products?.attributes?.title}`}</div>} */}
                </section>

                <section className='bg-white container mx-auto py-10 px-20'>
                    <TabsAccordion products={products} />
                </section>
            </main >




        </>
    )
}
