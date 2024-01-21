import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import Arrow from '../../assets/images/arrow.svg'
import { ProductsLoader } from '../../components/Utilities/ProductsLoader'
import { RecentProducts } from '../../components/Sections/RecentProducts'
import InputSlider from '../../components/Utilities/InputSlider'
import { Card } from '../../components/Card/Card'

export const Products = () => {
    const { products, loading, baseUrl } = useFetch("products?populate=*");
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [sorted, setSorted] = useState('asc');
    const [text, setText] = useState("");
    const [sliderInput, setSliderInput] = useState(100)

    const handleCheckbox = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        setSelectedProducts(isChecked ? [...selectedProducts, value] : selectedProducts.filter(product => product !== value))
    }

    const handleSlider = (e) => {
        const value = e.target.value;
        setSliderInput(value);
    }

    return (
        <>
            <main className='bg-colorBg'>
                <section className='container mx-auto'>
                    <div className="grid grid-cols-4 ">
                        <div className='flex flex-col gap-4 mr-10 py-40'>
                            <div className='bg-white px-2 py-4'>
                                <input type="text" className='bg-colorBg  placeholder:p-2' placeholder='Search Product' onChange={e => setText(e.target.value)} />
                            </div>
                            <div className='bg-white pl-2 py-4'>
                                <h3 className='text-darkBlue font-semibold text-lg'>Product Category</h3>

                                {products?.map((product) => (
                                    <div className='flex gap-2' key={product.id}>
                                        <input type="checkbox" value={product?.attributes?.category} onChange={handleCheckbox} /><label className='text-darkBlue font-medium text-lg'>{product?.attributes?.category}</label>
                                    </div>
                                ))}
                            </div>
                            <div className='bg-white px-2 py-4'>
                                <InputSlider sliderInput={sliderInput} onHandleSlider={handleSlider} />
                            </div>
                        </div>
                        <div className="col-span-3 self-start">
                            <div className='grid grid-cols-3 gap-x-6 py-8'>
                                <div className='col-span-3 mb-5'>
                                    <img src={Arrow} alt='Arrow' className='block mx-auto w-6 h-6 mb-3' loading=" lazy" />
                                    <h2 className='text-darkBlue text-3xl font-extrabold text-center'>Recent Products</h2>
                                    <p className='text-darkBlue text-xl font-medium text-center'>Premium Product Value</p>
                                </div>
                                <div className='col-span-3 py-2'>
                                    <div className="flex justify-between">
                                        <p>Showing all {selectedProducts != 0 ? selectedProducts.length : '3'} result</p>
                                        <div className='flex gap-2'>
                                            <label>Sort by price:</label>
                                            <select className='pl-4 bg-transparent' onChange={e => setSorted(e.target.value)}>
                                                <option default value="">Sort...</option>
                                                <option value="desc">High to low</option>
                                                <option value="asc">Low to high</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                {loading ? <ProductsLoader /> : <RecentProducts selectedProducts={selectedProducts} sorted={sorted} text={text} sliderInput={sliderInput} />}
                            </div >
                            <div className="col-span-3 self-start">
                                <div className='grid grid-cols-3 gap-x-6 py-8'>
                                    <div className='col-span-3 mb-10'>
                                        <img src={Arrow} alt='Arrow' className='block mx-auto w-6 h-6 mb-3' loading=" lazy" />
                                        <h2 className='text-darkBlue text-3xl font-extrabold text-center'>Or Get A Super Bundle Offer</h2>
                                        <p className='text-darkBlue text-xl font-medium text-center'>Offer valid only while stocks last!</p>
                                    </div>
                                    {loading
                                        ?
                                        <ProductsLoader />
                                        :
                                        (products?.filter(product => product?.attributes?.category === "Bundle").map(product => { return (<Card key={product.id} id={product.id} title={product?.attributes?.title} image={baseUrl + product?.attributes?.imgmain?.data[0].attributes?.url} price={product?.attributes?.price} salePrice={product?.attributes?.salePrice} salePriceTag={product?.attributes?.salePrice} />) }))}
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </>
    )
}
