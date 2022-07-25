import React, { createContext, useState } from 'react';

const SignUpContext = createContext();

const SignUpProvider = ({children}) => {
    const [formConsultor, setformConsultor] = useState({ page: 1, "work experience":{0:{}}, "education":{0:{}} });
    const [worksId, setWorksId] = useState(0);
    const [educationId, setEducationId] = useState(0);
    const [works, setWorks] = useState({0:{}});
    const [education, setEducation] = useState({0:{}});
    const [activeStep, setActiveStep] = useState(0);

    const handleChange = (e) => {
    setformConsultor({ ...formConsultor, [e.target.id]: e.target.value });
    };

    const handleChecked = (e) => {
    setformConsultor({ ...formConsultor, [e.target.id]: e.target.checked });
    };
    const data = {formConsultor, setformConsultor, handleChange, handleChecked,
                worksId, setWorksId, educationId, setEducationId, works, setWorks,
                education, setEducation, activeStep, setActiveStep};
    return <SignUpContext.Provider value={data}>{children}</SignUpContext.Provider>
}

export {SignUpProvider};

export default SignUpContext;