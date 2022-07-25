import React, { useContext, useState } from 'react';
import { Box, Grid, Typography, Card, CardContent, Divider, Button } from '@mui/material';
import CustomTextField from '../common/CustomTextField';
import CustomSelect from '../common/CustomSelect';
import AddIcon from '@mui/icons-material/Add';
import { ThemeContext } from '../../contexts/useThemeContext';
import DeleteIcon from '@mui/icons-material/Delete';
import CustomAutocomplete from '../common/CustomAutocomplete';

export default function Section1() {
    const { theme } = useContext(ThemeContext);
    const [errors, setErrors] = useState({});
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

    const working = [
        {
            id: 1,
            label: "Yes"
        },
        {
            id: 2,
            label: "No"
        }
    ]
    
    const onchangeLanguage = (index, event) => {
        const { name, value, id } = event.target;
        let text = /^[A-Za-z]+$/;
        let numeric = /^[0-9\b]+$/;
        console.log(name)
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

    const validateFieldsLanguage = (id) => {
        let errors = {};
        let data = dataLanguage.map((type) => {
            if (type.id === id){
                if(type.language === ""){
                    errors.language = "Requerido";
                }
                if(type.level === ""){
                    errors.level = "Requerido";
                } 
                type.errors = errors;
            }  
            return type;
        });
        setDataLanguage(data)
        setErrors(errors);
        return errors;
    }

    
    const addLanguage = (index) => { 
        let boolvalidate = validateFieldsLanguage(index);
        if ( Object.keys(boolvalidate).length === 0 ){
            const updatedList = dataLanguage.map((type) => {
                return (
                    type.id === index ? 
                    ({ ...type, changebutton: !type.changebutton, disabled: true }) 
                    : 
                    ({ ...type, changebutton: type.changebutton, disabled: type.disabled})
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
                }]);
            console.log("updatedList", updatedList)
        }
    }

    const deleteLanguage = (id) => {
        let nuevoArray = dataLanguage.filter((e, i) => {
            return i !== id;
        });
        setDataLanguage(nuevoArray);
    }
    return (
        <Grid container pt={6} spacing={2}>
            <Grid item xs={12} md={5}>
                <Box px={{xs: 2, md:0}}>
                    <Typography variant='h6' fontWeight={700}>Professional Info</Typography>
                </Box>
                <Box mt={2} pl={{xs: 2, md:0}}>
                    <Typography>
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
                                    // id="linkedin"
                                    // value={formik.values.linkedin}
                                    // onChange={formik.handleChange}
                                    // onBlur={formik.handleBlur}
                                    // error={formik.touched.linkedin && Boolean(formik.errors.linkedin)}
                                    // helperText={formik.errors.linkedin}
                                    // options={opciones}                            
                                />                   
                            </Grid> 
                            <Grid item xs={12} md={12} mt={1}>
                                <CustomSelect 
                                    label="I am."                                 
                                />                   
                            </Grid> 
                            <Grid item xs={12} md={6} mt={1}>
                                <CustomSelect 
                                    label="How many years of experience do you have?"                                 
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
                                                    <AddIcon fontSize="small" sx={{marginRight: 1,color: theme.colorBlue}}/>
                                                    :
                                                    <DeleteIcon fontSize="small" sx={{marginRight: 1,color: theme.colorError}}/>
                                                    }
                                                </Box>                                                
                                                <Typography sx={{color: data.changebutton ? theme.colorError : theme.colorBlue}}>{!data.changebutton ? "Add one more language" : "Delete language"}</Typography>
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
                                />                
                            </Grid>    
                        </Grid> 
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12} mt={2}>
                                <CustomAutocomplete/>              
                            </Grid>    
                        </Grid> 
                        <Grid container spacing={2} mt={1}>
                            <Grid item xs={12} md={6}>
                                <CustomSelect
                                    label="Type of job"
                                />                
                            </Grid>    
                            <Grid item xs={12} md={6} >
                                <CustomTextField
                                    label="hasrate"
                                    placeholder="$0"
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
                                                color: "gray",
                                                border: `1px solid ${theme.grayInput}`
                                            }}
                                            fullWidth
                                        >
                                            {work.label}
                                        </Button>       
                                    </Grid>    
                                )
                            })}          
                        </Grid> 
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
