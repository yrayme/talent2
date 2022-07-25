import React, { useState, useEffect, useContext } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SignUpContext from '../../../contexts/SignUpContext';
import Steps from '../../../components/common/Steps';
import { ThemeContext } from '../../../contexts/useThemeContext';
import { useRouter } from 'next/router';
import WithAuth from '../../../components/hoc/WithAuth';
import Section1 from '../../../components/Step1/Section1';
import Section2 from '../../../components/Step1/Section2';
import Section3 from '../../../components/Step1/Section3';

export default function Step1() {
    const { theme } = useContext(ThemeContext);
    const router = useRouter();
    const { activeStep, setActiveStep } = useContext(SignUpContext);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setActiveStep(0);
        sessionStorage.setItem("activeStep", 0);
    }, [])
    
    
    const formik = useFormik({
        initialValues: {
            linkedin: "", 
            // date: new Date(),
        },
        validationSchema: Yup.object({
            linkedin: Yup.string().required('Requerido'),
            // date: Yup.string().required('Requerido'),
        }),
        validate: (values) => {
            const errors = {}
            return errors
        },
        onSubmit: async (valores) => {
            const { user, password } = valores
            console.log("valores", valores)
            if (date !== ""){
                handleNext();
            }
        },
    });

    const handleDate = (value) => {
        console.log("entre", value)
        const numeric = /^[0-9/\b]+$/;
        if (value === null){
            setDate("");
        }else{
            setDate(value);
        }
        if (value === '' || numeric.test(value)) {
            console.log("entreef", value)
        }

    }
    const handleNext = () => {
        setActiveStep(1);
        router.push('/signUp/step2');
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
        <WithAuth safe={false}>
            <Steps/>
            <Box px={6} sx={{backgroundColor: theme.graylight1}}>
                <Section1 formik={formik} handleDate={handleDate} date={date}/>
                <Section2 formik={formik} handleDate={handleDate} date={date}/>
                <Section3 formik={formik}/>            
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
                            onClick={formik.handleSubmit}
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
        </WithAuth>
    )
}
