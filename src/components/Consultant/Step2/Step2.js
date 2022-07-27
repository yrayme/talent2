import React,{ useEffect, useContext, useState } from 'react';
import SignUpContext from '../../../contexts/SignUpContext';
import { useRouter } from 'next/router';
import Section1 from './Section1';
import { Box, Button } from '@mui/material';
import { ThemeContext } from '../../../contexts/useThemeContext';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import WithAuth from '../../hoc/WithAuth';
import Section2 from './Section2';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Step2() {
    const { theme } = useContext(ThemeContext);
    const router = useRouter();
    const { setActiveStep, activeStep } = useContext(SignUpContext);
    
    const [dataLanguage, setDataLanguage] = useState([
        {
            id: 0,
            language: "",
            level: "",
            changebutton: false,
            errors: {},
            disabled: false,
        }
    ]);
    
    const [dataWork, setdataWork] = useState([
        {
            id: 0,
            title: "",
            startDate: new Date(),
            endDate: new Date(),
            company: "",
            description: "",
            changebutton: false,
            errors: {},
        }
    ]);
    
    const [dataEducation, setDataEducation] = useState([
        {
            id: 0,
            school: "",
            startDate: new Date(),
            endDate: new Date(),
            degree: "",
            changebutton: false,
            errors: {},
        }
    ]);
    
    const [skills, setSkills] = useState([]);
    const [errorSkills, setErrorSkills] = useState(false);
    const [remoteId, setRemoteId] = useState({
        error: false,
        value: ""
    });

    const [description, setdescription] = useState("")
    const [errorLanguage, setErrorLanguage] = useState({});
    const [errorWork, setErrorWork] = useState({});
    const [errorEducation, setErrorEducation] = useState({});
    const [initialValues, setInitialValues] = useState({
        industry: "", 
        role: "",
        years: "",
        description: "", 
        typeOfJob: "",
        rate: "",
        reference1: {
            fullName: "",
            email: "",
            company: "",
            phone: "",
        },
        reference2: {
            fullName: "",
            email: "",
            company: "",
            phone: "",
        },
        reference3: {
            fullName: "",
            email: "",
            company: "",
            phone: "",
        }})

    const [data, setData] = useState(null);
        let prueba = {};
    useEffect(() => {
        if(localStorage.getItem('consultant-step2') && !data){
            setData(JSON.parse(localStorage.getItem('consultant-step2')));
            prueba = JSON.parse(localStorage.getItem('consultant-step2'));
            console.log("prueba", data)
            setRemoteId({
                error: false,
                value: prueba.remoteId
            })
            // setSkills(prueba.skills);
            // setDataLanguage(prueba.language);
        }
    }, [])

    const formik = useFormik({
        initialValues,
        validationSchema: Yup.object({
            // industry: Yup.string().required('Required'),
            // role: Yup.string().required('Required'),
            // years: Yup.string().required('Required'),
            // description: Yup.string().required('Required'),
            // typeOfJob: Yup.string().required('Required'),
            // rate: Yup.string().required('Required')
            // .matches(/[0-9.]/, "Este campo es tipo númerico"),
            // reference1:  Yup.object().shape({
            //     fullName: Yup.string().required("Required"),
            //     email: Yup.string().required("Required").email(),
            //     company: Yup.string().required("Required"),
            //     phone: Yup.string().required("Required").matches(/[0-9]/, "Este campo es tipo númerico"),
            // }),
            // reference2:  Yup.object().shape({
            //     fullName: Yup.string().required("Required"),
            //     email: Yup.string().required("Required").email(),
            //     company: Yup.string().required("Required"),
            //     phone: Yup.string().required("Required").matches(/[0-9]/, "Este campo es tipo númerico"),
            // }),
            // reference3:  Yup.object().shape({
            //     fullName: Yup.string().required("Required"),
            //     email: Yup.string().required("Required").email(),
            //     company: Yup.string().required("Required"),
            //     phone: Yup.string().required("Required").matches(/[0-9]/, "Este campo es tipo númerico"),
            // }),
        }),
        validate: (values) => {
            const errors = {}
            // validateFieldsLanguage(dataLanguage.length - 1 );
            // validateFieldsWork(dataWork.length - 1 );
            // validateFieldsEducation(dataEducation.length - 1 );
            // setErrorSkills(skills.length > 0 ? false : true);
            // setRemoteId({...remoteId, error: remoteId.value === "" ? true : false});
            return errors
        },
        onSubmit: async (values) => {
            values.language = dataLanguage;
            values.skills = skills;
            values.remoteId = remoteId.value
            // setErrorSkills(skills.length > 0 ? false : true);
            // let boolvalidateLanguage = validateFieldsLanguage(dataLanguage.length - 1 );
            // let boolvalidateWork = validateFieldsWork(dataWork.length - 1 );
            // let boolvalidateEducation = validateFieldsEducation(dataEducation.length - 1 );
            // setRemoteId({...remoteId, error: remoteId.value === "" ? true : false});
            // console.log(boolvalidateEducation)
            // if ( Object.keys(boolvalidateEducation).length === 0 
            //     && Object.keys(boolvalidateWork).length === 0 
            //     && Object.keys(boolvalidateLanguage).length === 0
            //     && !errorSkills && remoteId.value !== ""){
            //         localStorage.setItem('consultant-step2', JSON.stringify(values));
                    // handleNext();
            // }

            
            localStorage.setItem('consultant-step2', JSON.stringify(values));
            sessionStorage.setItem("activeStep", 1);
        },
    });
    useEffect(() => {        
        formik.setValues({...initialValues, ...data});
        setRemoteId({
            error: false,
            value: data?.remoteId
        })
        setDataLanguage(data?.language);
        // setDefaultSkills(data.skills);
    }, [data])
    
    
    const handleBack = () => {
        setActiveStep(0);
    }

    const handleNext = () => {
        setActiveStep(2);
    }
    
    const validateFieldsLanguage = (id) => {
        let errors = {};
        let data = dataLanguage.map((type) => {
            if (type.id === id){
                if(type.language === "") errors.language = "Required";
                if(type.level === "") errors.level = "Required"; 
                type.errors = errors;
            }  
            return type
        });
        setDataLanguage(data);
        setErrorLanguage(errors);
        return errors;
    }

    const validateFieldsWork = (id) => {
        let errors = {};
        let data = dataWork.map((type) => {
            if (type.id === id){
                if(type.title === "") errors.title = "Required";
                if(type.startDate === "") errors.startDate = "Required"; 
                if(type.endDate === "")errors.endDate = "Required";
                if(type.company === "") errors.company = "Required";
                if(type.description === "") errors.description = "Required";
                type.errors = errors;
            }  
            return type;
        });
        setdataWork(data);
        setErrorWork(errors);
        return errors;
    }

    
    const validateFieldsEducation = (id) => {
        let errors = {};
        let data = dataEducation.map((type) => {
            if (type.id === id){
                if(type.school === "") errors.school = "Required";
                if(type.startDate === "") errors.startDate = "Required"; 
                if(type.endDate === "")errors.endDate = "Required";
                if(type.degree === "") errors.degree = "Required";
                type.errors = errors;
            }  
            return type;
        });
        setDataEducation(data);
        setErrorEducation(errors);
        return errors;
    }

    // console.log(remoteId)
    return (
        <WithAuth safe={false}>
            <Box sx={{backgroundColor: theme.colorGrayFondo}}>
                <Section1 
                    formik={formik} 
                    dataLanguage={dataLanguage}
                    setDataLanguage={setDataLanguage}
                    validateFieldsLanguage={validateFieldsLanguage}
                    defaultSkills={data?.skills || []}
                    onChangeSkills={setSkills}
                    errorSkills={errorSkills}
                    setErrorSkills={setErrorSkills}
                    setRemoteId={setRemoteId}
                    remoteId={remoteId}
                /> 
                {/* <Section2
                    dataWork={dataWork}
                    setdataWork={setdataWork}
                    validateFieldsWork={validateFieldsWork}
                />         */}
                {/* <Section3
                    dataEducation={dataEducation}
                    setDataEducation={setDataEducation}
                    validateFieldsEducation={validateFieldsEducation}
                /> 
                <Section4
                    formik={formik} 
                />
                <Section5/> */}
                <React.Fragment>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 3, pb:4 }}>
                        <Button
                            color="inherit"
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button 
                            onClick={formik.handleSubmit}
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
