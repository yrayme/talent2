import React, { useContext, useState } from 'react';
import { Box, Grid, Typography, Card, CardContent, Divider, } from '@mui/material';
import CustomTextField from '../../common/CustomTextField';
import AddIcon from '@mui/icons-material/Add';
import { ThemeContext } from '../../../contexts/useThemeContext';
import DeleteIcon from '@mui/icons-material/Delete';
import CustomDate from '../../common/CustomDate';

export default function Section2({
    dataWork,
    setdataWork,
    validateFieldsWork
}) {
    const { theme } = useContext(ThemeContext);
    const onChangeWork = (index, event, date) => {
        const name = "";
        const value = "";
        if ( date ) {
            name = date;
            value = event;
        }else{
            value = event.target.value;
            name = event.target.name;
            let text = /^[A-Za-z]+$/;
            let numeric = /^[0-9\b]+$/;
        }
        const updatedList = dataWork.map((data) => {
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
        setdataWork(updatedList);
        validateFieldsWork(index);
    }
    
    const addWork = (index) => { 
        let boolvalidate = validateFieldsWork(index);
        if ( Object.keys(boolvalidate).length === 0 ){
            const updatedList = dataWork.map((type) => {
                return (
                    type.id === index ? 
                    ({ ...type, changebutton: !type.changebutton }) 
                    : 
                    ({ ...type, changebutton: type.changebutton})
                );
            });
            setdataWork([...updatedList, 
                {
                    id: index + 1,
                    startDate: new Date(),
                    endDate: new Date(),
                    title: "",
                    company: "",
                    description: "",
                    changebutton: false,
                    errors: boolvalidate,
                    disabled: false,
                }]);
        }
    }

    const deleteWork = (id) => {
        let nuevoArray = dataWork.filter((e, i) => {
            return e.id !== id;
        });
        setdataWork(nuevoArray);
    }
    return (
        <Grid container pt={6} spacing={2}>
            <Grid item xs={12} md={5}>
                <Box px={{xs: 2, md:0}}>
                    <Typography fontWeight={600} sx={{fontSize: "20px"}}>Work experience</Typography>
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
                        {dataWork && dataWork.map((data, index) => {
                            return (
                                <Grid container spacing={2} key={index}>
                                    <Grid item xs={12} md={12} mt={1}>
                                        <CustomTextField 
                                            label="Title"      
                                            placeholder="Ex: UI/UX designer" 
                                            id="title"
                                            name="title"
                                            onChange={(event) => onChangeWork(data.id, event)} 
                                            value={data.title}                      
                                            error={data.errors && Boolean(data.errors.title)}   
                                            helperText={data.errors.title}
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
                                        <CustomTextField 
                                            label="Company name"      
                                            placeholder="Ex: Microsoft" 
                                            id="company"
                                            name="company"
                                            onChange={(event) => onChangeWork(data.id, event)} 
                                            value={data.company}                      
                                            error={data.errors && Boolean(data.errors.company)}   
                                            helperText={data.errors.company}                           
                                        />                   
                                    </Grid>
                                    <Grid item xs={12} md={6} mt={1}>
                                        <CustomDate
                                            label="Start date"
                                            id="startDate"
                                            name="startDate"
                                            onChange={(event) => onChangeWork(data.id, event, "startDate")} 
                                            value={data.startDate}                      
                                            error={data.errors && Boolean(data.errors.startDate)}   
                                            helperText={data.errors.startDate}   
                                            // value={date}
                                            // onChange={handleDate}
                                            // onBlur={formik.handleBlur}
                                        >
                                            {data.startDate === null &&
                                                <Typography
                                                    color="error"
                                                    mb={2}
                                                    ml={0}
                                                    variant="caption"
                                                    sx={{ display: 'flex', justifyContent: 'flex-start' }}
                                                >
                                                    Required
                                                </Typography>
                                            }
                                        </CustomDate>
                                    </Grid> 
                                    <Grid item xs={12} md={6} mt={1}>
                                        <CustomDate
                                            label="End date"
                                            id="endDate"
                                            name="endDate"
                                            onChange={(event) => onChangeWork(data.id, event, "endDate")} 
                                            value={data.endDate}                      
                                            error={data.errors && Boolean(data.errors.endDate)}   
                                            helperText={data.errors.endDate} 
                                        >
                                            {data.endDate === null &&
                                                <Typography
                                                    color="error"
                                                    mb={2}
                                                    ml={0}
                                                    variant="caption"
                                                    sx={{ display: 'flex', justifyContent: 'flex-start' }}
                                                >
                                                    Required
                                                </Typography>
                                            }
                                        </CustomDate>              
                                    </Grid>    
                                    <Grid item xs={12} md={12} mt={1}>
                                        <CustomTextField
                                            label="Description"
                                            placeholder="Type something here.."
                                            multiline={true}
                                            rows={2} 
                                            id="description"
                                            name="description"
                                            onChange={(event) => onChangeWork(data.id, event)} 
                                            value={data.description}                      
                                            error={data.errors && Boolean(data.errors.description)}   
                                            helperText={data.errors.description} 
                                        />                    
                                    </Grid>  
                                    <Grid item xs={12} md={12} mt={1}>
                                        <Divider sx={{color: theme.grayInput}}/>                   
                                    </Grid>       
                                    <Grid item xs={12} md={6} mb={{xs:2, md:0}} >
                                        <Box 
                                            sx={{display: "flex", cursor: "pointer"}} 
                                            onClick={() => {data.changebutton ? deleteWork(data.id) : addWork(data.id)}}
                                        >
                                            <Box sx={{display: "flex"}}>
                                                <Box mt={0}>       
                                                    {!data.changebutton ?                                              
                                                    <AddIcon fontSize="small" sx={{marginRight: 1,color: theme.colorBlueAdd}}/>
                                                    :
                                                    <DeleteIcon fontSize="small" sx={{marginRight: 1,color: theme.colorError}}/>
                                                    }
                                                </Box>                                                
                                                <Typography sx={{color: data.changebutton ? theme.colorError : theme.colorBlueAdd, fontSize: "16px"}}>{!data.changebutton ? "Add one more work experience" : "Delete work experience"}</Typography>
                                            </Box>
                                        </Box>             
                                    </Grid> 
                                </Grid> 
                            )
                        })}
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
