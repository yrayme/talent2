import React,{ useEffect, useContext } from 'react';
import Steps from '../../../components/common/Steps';
import SignUpContext from '../../../contexts/SignUpContext';
import { useRouter } from 'next/router';
import Section1 from '../../../components/Step2/Section1';
import { Box, Button } from '@mui/material';
import { ThemeContext } from '../../../contexts/useThemeContext';
import Section3 from '../../../components/Step2/Section3';
import Section4 from '../../../components/Step2/Section4';
import Section5 from '../../../components/Step2/Section5';

export default function Step2() {
    const { theme } = useContext(ThemeContext);
    const router = useRouter();
    const { activeStep, setActiveStep } = useContext(SignUpContext);
    useEffect(() => {
        setActiveStep(1)
        if(!sessionStorage.getItem("activeStep")){
            router.push('/signUp/step1');
        }
    }, [])
    
    const handleBack = () => {
        setActiveStep(0)
        router.push('/signUp/step1');
    }

    const handleNext = () => {
        setActiveStep(2)
        router.push('/signUp/step3');
    }
    
    return (
        <div>
            <Steps/>
            <Box px={7} sx={{backgroundColor: theme.graylight1}}>
                <Section1/>         
                <Section3/> 
                <Section4/>
                <Section5/>
                <React.Fragment>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 3, pb:4 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button 
                            onClick={handleNext}
                            variant="contained" 
                            sx={{
                                textTransform: "none",
                                color: theme.colorWhite,
                            }}
                        >
                            {activeStep === 3 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            </Box>
        </div>
    )
}
