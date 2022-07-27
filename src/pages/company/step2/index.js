import React, { useContext, useEffect } from 'react';
import Steps from '../../../components/common/Steps';
import { Box } from '@mui/material';
import { ThemeContext } from '../../../contexts/useThemeContext';
import SignUpContext from '../../../contexts/SignUpContext';
import { useRouter } from 'next/router';
import Section1 from '../../../components/Consultant/Step3/Section1';
import { Button } from '@mui/material';
import WithAuth from '../../../components/hoc/WithAuth';

export default function Step3() {
    const { theme } = useContext(ThemeContext);
    const router = useRouter();
    const { setActiveStep } = useContext(SignUpContext);
    useEffect(() => {
        setActiveStep(1)
        // if(sessionStorage.getItem("activeStep") !== "0"){
        //     router.push('/company/step1');
        // }
    }, [])
    
    const handleBack = () => {
        setActiveStep(0);
        router.push('/company/step1');
    }

    const handleNext = () => {
        // setActiveStep(2);
        // router.push('/signUp/step3');
    }
    return (
        <WithAuth safe={false}>
            <Steps
                disabled={true}
            />
            <Box px={7} sx={{backgroundColor: theme.colorGrayFondo,}}>
                <Section1/>
                <React.Fragment>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: "38vh", pb:4, }}>
                        <Button
                            color="inherit"
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
                            Complete
                        </Button>
                    </Box>
                </React.Fragment>
            </Box>
        </WithAuth>
    )
}
