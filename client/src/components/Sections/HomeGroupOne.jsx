import React from 'react'
import Assurance from '../../assets/images/assurance-icon-01.svg'
import Arrow from '../../assets/images/arrow.svg'
import { Button } from '../Button/Button'

export const HomeGroupOne = () => {
    const items = [{
        id: 0,
        image: `${Assurance}`,
        paragraph: "100% Natural Product"
    }, {
        id: 1,
        image: `${Assurance}`,
        paragraph: "All Vegan Product"
    }, {
        id: 2,
        image: `${Assurance}`,
        paragraph: "Delivery Discretion"
    }, {
        id: 3,
        image: `${Assurance}`,
        paragraph: "GMO & Additive Free"
    }]

    return (
        <>
            <section className=' bg-blueGradient'>
                <div className='container mx-auto py-28'>
                    <h2 className='text-white text-4xl font-bold text-center mb-10'>Now Available Without A Prescription</h2>
                    <div className="grid justify-center items-center md:grid-cols-4">
                        {items.map((item) => {
                            const { id, image, paragraph } = item;

                            return (
                                <div key={id} className='flex flex-col justify-center items-center md:gap-4'>
                                    <img src={image} alt="" />
                                    <p className='text-white text-xl text-center font-semibold'>{paragraph}</p>
                                </div>)
                        })}

                    </div>
                </div>
            </section>
            <section className='bg-oldCouple bg-no-repeat bg-center bg-cover h-full py-28'>
                <div className='container mx-auto h-full'>
                    <div className="grid h-full md:grid-cols-2">
                        <div className="flex flex-col justify-center gap-6"><img src={Arrow} alt='Arrow' className='w-6 h-6' />
                            <h2 className='text-darkBlue text-4xl font-extrabold'>Say goodbye to erectile dysfunction & performance anxiety.</h2>
                            <p className='text-darkBlue text-xl font-medium'>Our effective treatments are helping 1000s of men just like you.</p>
                            <Button type={'button'} text={'Shop now'} backgroundColor={'bg-orange'} hoverColor={'hover:text-darkBlue'} width={'w-1/2'} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
