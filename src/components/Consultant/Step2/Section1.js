import React, { useContext, useState, useEffect } from 'react';
import { Box, Grid, Typography, Card, CardContent, Divider, Button } from '@mui/material';
import CustomTextField from '../../common/CustomTextField';
import CustomSelect from '../../common/CustomSelect';
import AddIcon from '@mui/icons-material/Add';
import { ThemeContext } from '../../../contexts/useThemeContext';
import DeleteIcon from '@mui/icons-material/Delete';
import CustomAutocomplete from '../../common/CustomAutocomplete';

export default function Section1({
    formik,
    dataLanguage,
    setDataLanguage,
    validateFieldsLanguage,
    defaultSkills,
    onChangeSkills,
    errorSkills,
    setErrorSkills,
    setRemoteId,
    remoteId,
}) {
    // console.log("skills", skills)
    const { theme } = useContext(ThemeContext);
    const [working, setWorking] = useState([
        {
            id: 1,
            label: "Yes", 
            active: false
        },
        {
            id: 2,
            label: "No",
            active: false
        }
    ])
    
    useEffect(() => {
        console.log(remoteId)
        handleRemote(remoteId.value)
    }, [])
    
    const onchangeLanguage = (index, event) => {
        const { name, value, id } = event.target;
        let text = /^[A-Za-z]+$/;
        let numeric = /^[0-9\b]+$/;
        const updatedList = dataLanguage.map((data) => {
            if (data.id === index){
                Object.keys(data).map(map => {
                    if (map === name) {
                        data[name] = value;
                    }
                })
                return data;
            } else {
                return data;
            }       
        });
        setDataLanguage(updatedList);
        validateFieldsLanguage(index);
    }

    const addLanguage = (index) => { 
        let boolvalidate = validateFieldsLanguage(index);
        if ( Object.keys(boolvalidate).length === 0 ){
            const updatedList = dataLanguage.map((type) => {
                return (
                    type.id === index ? 
                    ({ ...type, changebutton: !type.changebutton}) 
                    : 
                    ({ ...type, changebutton: type.changebutton})
                );
            });
            setDataLanguage([...updatedList, 
                {
                    id: index + 1,
                    language: "", 
                    level: "",
                    changebutton: false,
                    errors: boolvalidate,
                    disabled: false,
                }
            ]);
        }
    }

    const deleteLanguage = (id) => {
        let nuevoArray = dataLanguage.filter((e, i) => {
            return e.id !== id;
        });
        setDataLanguage(nuevoArray);
    }

    const handleRemote = (id) => {
        const updatedWork = working.map((type) => {
            return (
                type.id === id ? 
                ({ ...type, active: true}) 
                : 
                ({ ...type, active: false})
            );
        });
        setWorking(updatedWork);
        setRemoteId({error: false, value: id})

    }
    return (
        <Grid container pt={6} spacing={2}>
            <Grid item xs={12} md={5}>
                <Box px={{xs: 2, md:0}}>
                    <Typography fontWeight={600} sx={{fontSize: "20px"}}>Professional Info</Typography>
                </Box>
                <Box mt={2} pl={{xs: 2, md:0}}>
                    <Typography sx={{fontSize: "16px"}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quibusdam facere blanditiis doloremque harum nam ea laborum nobis placeat nulla vel odio, quasi asperiores atque saepe earum quae deserunt deleniti.
                    </Typography>
                </Box>    
            </Grid>
            <Grid item xs={12} md={7} p={{xs:2, md:0}}>
                <Card sx={{padding:1}}>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12} mt={1}>
                                <CustomSelect 
                                    label="Industry"       
                                    id="industry"
                                    value={formik.values.industry}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.industry && Boolean(formik.errors.industry)}
                                    helperText={formik.errors.industry}
                                    // options={opciones}                            
                                />                   
                            </Grid> 
                            <Grid item xs={12} md={12} mt={1}>
                                <CustomSelect 
                                    label="Role"      
                                    id="role"
                                    value={formik.values.role}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.role && Boolean(formik.errors.role)}
                                    helperText={formik.errors.role}                           
                                />                   
                            </Grid> 
                            <Grid item xs={12} md={12} mt={1}>
                                <CustomSelect 
                                    label="How many years of experience do you have?" 
                                    id="years"
                                    value={formik.values.years}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.years && Boolean(formik.errors.years)}
                                    helperText={formik.errors.years}                                 
                                />                   
                            </Grid>
                            <Grid item xs={12} md={6} mt={1}>                
                            </Grid>      
                        </Grid> 
                        {dataLanguage && dataLanguage.map((data, index) => {
                            return (
                                <Grid container spacing={{xs:2, md: 2}} key={index} mt={{xs:-3, md:0}}>
                                    <Grid item xs={12} md={6} mt={1}>
                                        <CustomSelect 
                                            label="Language"   
                                            id="language"
                                            name="language"
                                            onChange={(event) => onchangeLanguage(data.id, event)} 
                                            value={data.language}    
                                            options={[1,2,3]}      
                                            error={data.errors && Boolean(data.errors.language)} 
                                            helperText={data.errors.language}                        
                                        />                   
                                    </Grid>
                                    <Grid item xs={12} md={6} mt={1}>
                                        <CustomSelect 
                                            label="Language level"         
                                            id="level"
                                            name="level"
                                            onChange={(event) => onchangeLanguage(data.id, event)} 
                                            value={data.level}     
                                            options={[1,2,3]}                   
                                            error={data.errors && Boolean(data.errors.level)}   
                                            helperText={data.errors.level}      
                                        />                   
                                    </Grid>                  
                                    <Grid item xs={12} md={6} mb={{xs:2, md:0}} >
                                        <Box 
                                            sx={{display: "flex", cursor: "pointer"}} 
                                            onClick={() => {data.changebutton ? deleteLanguage(data.id) : addLanguage(data.id)}}
                                        >
                                            
                                            <Box sx={{display: "flex"}}>
                                                <Box mt={0}>       
                                                    {!data.changebutton ?                                              
                                                    <AddIcon fontSize="small" sx={{marginRight: 1,color: theme.colorBlueAdd}}/>
                                                    :
                                                    <DeleteIcon fontSize="small" sx={{marginRight: 1,color: theme.colorError}}/>
                                                    }
                                                </Box>                                                
                                                <Typography sx={{color: data.changebutton ? theme.colorError : theme.colorBlueAdd, fontSize: "16px"}}>{!data.changebutton ? "Add one more language" : "Delete language"}</Typography>
                                            </Box>
                                        </Box>             
                                    </Grid>                            
                                </Grid>
                            )
                        })}
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12} mt={2}>
                                <CustomTextField
                                    label="Description"
                                    placeholder="Type something here.."
                                    multiline={true}
                                    rows={2} 
                                    id="description"
                                    value={formik.values.description}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.description && Boolean(formik.errors.description)}
                                    helperText={formik.errors.description}
                                />                
                            </Grid>    
                        </Grid> 
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12} mt={2}>
                                <CustomAutocomplete
                                    defaultSkills={defaultSkills}
                                    onChangeSkills={onChangeSkills}   
                                    error={errorSkills}  
                                    setErrorSkills={setErrorSkills}                           
                                />              
                            </Grid>    
                        </Grid> 
                        <Grid container spacing={2} mt={1}>
                            <Grid item xs={12} md={6}>
                                <CustomSelect
                                    label="Type of job"
                                    id="typeOfJob"
                                    value={formik.values.typeOfJob}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.typeOfJob && Boolean(formik.errors.typeOfJob)}
                                    helperText={formik.errors.typeOfJob}
                                />                
                            </Grid>    
                            <Grid item xs={12} md={6} >
                                <CustomTextField
                                    label="Hourly rate"
                                    placeholder="$0"
                                    id="rate"
                                    value={formik.values.rate}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.rate && Boolean(formik.errors.rate)}
                                    helperText={formik.errors.rate}
                                />                
                            </Grid>    
                        </Grid>  
                        <Grid container spacing={2} mt={1}>
                            <Grid item xs={12} md={12}>
                                <Typography sx={{fontWeight: 600}}>Do you have experience working remotely?</Typography>
                            </Grid>
                            {working.map((work, index) => {
                                return (
                                    <Grid item xs={3} md={2}  key={index}>
                                        <Button                                            
                                            variant="outlined"
                                            sx={{
                                                textTransform: "none",
                                                color: work.active ? theme.colorPrimary : remoteId.error ? theme.colorError : "gray",
                                                border: work.active ? `1px solid ${theme.colorPrimary}` : remoteId.error ? `1px solid ${theme.colorError}` : `1px solid ${theme.grayInput}`,
                                                borderRadius: "8px"
                                            }}
                                            fullWidth
                                            onClick={() => handleRemote(work.id)}
                                        >
                                            {work.label}
                                        </Button>       
                                    </Grid>    
                                )
                            })}  
                            <Grid item xs={12} md={12} mt={-1}>
                                {remoteId.error ? (
                                    <Typography
                                    color="error"
                                    mb={0}
                                    ml={0}
                                    variant="caption"
                                    sx={{ display: 'flex', justifyContent: 'flex-start' }}
                                    >
                                    Required
                                    </Typography>
                                ) : null}  
                            </Grid>      
                        </Grid> 
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
