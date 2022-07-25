import React, { useContext, useEffect } from 'react';
import Steps from '../../../components/common/Steps';
import { Box } from '@mui/material';
import { ThemeContext } from '../../../contexts/useThemeContext';
import SignUpContext from '../../../contexts/SignUpContext';
import { useRouter } from 'next/router';

export default function Step3() {
    const { theme } = useContext(ThemeContext);
    const router = useRouter();
    const { activeStep, setActiveStep } = useContext(SignUpContext);
    // useEffect(() => {
    //     setActiveStep(2)
    //     if(!sessionStorage.getItem("activeStep")){
    //         router.push('/signUp/step1');
    //     }
    // }, [])
    return (
        <div>
            <Steps/>
            <Box px={7} sx={{backgroundColor: theme.graylight1}}>
                dfvf
            </Box>
        </div>
    )
}
