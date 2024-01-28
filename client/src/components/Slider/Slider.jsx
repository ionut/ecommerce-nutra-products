import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import { Button } from '../Button/Button';
import imageFirstSlider from '../../assets/images/bg-01-slide@3x-scaled.webp'
import imageSecondSlider from '../../assets/images/bg-02-slide-1.webp'
import imageThirdSlider from '../../assets/images/bg-03-slide@2x-1-scaled.webp'

export const Slider = () => {
    var items = [
        {
            header: "Improve Your Sexual Health Today!",
            paragraph: "A Medical Strength Male Enhancement formulated to restore your sexual youth, performance & intense experience.",
            image: `${imageFirstSlider}`,
        },
        {
            header: "Real men, real results",
            paragraph: "“Its great to know that my favorite male enhancement supplement is now available in the market without a prescription! I have been using THUNDER OF ZEUS for a few months now and the results have been truly “huge”“",
            image: `${imageSecondSlider}`,
        },
        {
            header: "Order Your Thunder Of Zeus Today!",
            paragraph: "Medical strength enhancement for maximum benefits.",
            image: `${imageThirdSlider}`,
        },

    ]



    return (
        <Carousel navButtonsAlwaysInvisible={true} indicatorIconButtonProps={{
            style: {
                padding: 'p-3',
            }
        }}
            activeIndicatorIconButtonProps={{
                style: {
                    backgroundColor: '#fff' // 2
                }
            }}
            indicatorContainerProps={{
                style: { // 5
                    textAlign: 'center',
                    position: 'absolute',
                    bottom: 40,
                    left: 0,
                    zIndex: 1 // 4
                }

            }} >
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item({ item }) {
    const styles = {
        paperContainer: {
            backgroundImage: `url(${item.image})`,
            position: 'relative',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            height: '80vh'
        }
    };
    return (
        <Paper style={styles.paperContainer}>
            <section className='container mx-auto h-full'>
                <div className="grid h-full md:grid-cols-2">
                    <div className="flex flex-col justify-center gap-10">
                        <h2 className='text-white text-6xl font-extrabold'>{item.header}</h2>
                        <p className='text-white text-xl'>{item.paragraph}</p>
                        <Button type={'button'} extraStyle={'bg-pumpkinOrange hover:text-darkBlue w-1/2'} >Shop now</Button>
                        <p className='text-brightSkyBlue text-lg font-semibold'>FREE DELIVERY OVER 50€</p>
                    </div>
                </div>
            </section>
        </Paper>
    )
}
