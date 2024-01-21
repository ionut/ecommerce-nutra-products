import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
    {
        value: 20,
        label: '20€',
    }
];

export default function InputSlider({ sliderInput, onHandleSlider }) {
    return (
        <>
            <h3 className='text-darkBlue font-semibold text-lg'>Price</h3>
            <p className='text-darkBlue font-medium text-lg'><span>{marks[0].label} </span>- <span>{sliderInput}€</span></p>
            <Box>
                <Slider
                    aria-label="Price"
                    defaultValue={100}
                    valueLabelDisplay="auto"
                    step={20}
                    min={20}
                    max={100}
                    onChange={onHandleSlider}
                />
            </Box>
        </>
    );
}
