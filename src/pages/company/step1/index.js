import React, { useContext, useEffect } from 'react'
import Steps from '../../../components/common/Steps'
import WithAuth from '../../../components/hoc/WithAuth';
import { Box, Button } from '@mui/material';
import { ThemeContext } from '../../../contexts/useThemeContext';
import Section1 from '../../../components/Company/Step1';
import { useRouter } from 'next/router';
import SignUpContext from '../../../contexts/SignUpContext';
import Section3 from '../../../components/Consultant/Step1/Section3';

export default function Step1() {
    const { theme } = useContext(ThemeContext);
    const { activeStep, setActiveStep } = useContext(SignUpContext);
    const router = useRouter();

    useEffect(() => {
        setActiveStep(0);
    }, [])
    
    const handleNext = () => {
        setActiveStep(1);
        router.push('/company/step2');
        sessionStorage.setItem("activeStep", 0);
    };

    return (
        <WithAuth safe={false}>
            <Steps
                disabled={true}        
            />
            <Box px={6} sx={{backgroundColor: theme.colorGrayFondo}}>
                <Section1/>
                <Section3/>
                <React.Fragment>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 3, pb:4  }}>
                        {/* <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button> */}
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button 
                            onClick={handleNext}
                            variant="contained" 
                            sx={{
                                textTransform: "none",
                                color: theme.colorWhite,
                            }}
                        >
                            Next
                        </Button>
                    </Box>
                </React.Fragment>
            </Box>
        </WithAuth>
    )
}
