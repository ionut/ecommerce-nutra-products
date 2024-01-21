import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import LoadingImage from '../../assets/images/loadingImage.png';

export const Loading = () => {
    return (
        <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            display: 'block',
            maxWidth: '360px',
            width: '100%',

            transform: 'translate(-50%, -50%)'
        }}>
            <img src={LoadingImage} alt="" className='mb-10' loading=" lazy" />
            <LinearProgress sx={{ backgroundColor: '#fff', }} />
        </Box >
    );
}
