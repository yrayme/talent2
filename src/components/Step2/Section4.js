import React, { useContext, useState } from 'react';
import { Box, Grid, Typography, Card, CardContent, Divider } from '@mui/material';
import CustomTextField from '../common/CustomTextField';
import { ThemeContext } from '../../contexts/useThemeContext';

export default function Section4() {
    const { theme } = useContext(ThemeContext);
    
    return (
        <Grid container pt={6} spacing={2}>
            <Grid item xs={12} md={5}>
                <Box px={{xs: 2, md:0}}>
                    <Typography variant='h6' fontWeight={700}>References</Typography>
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
                                <Typography variant='h6' sx={{fontWeight: 600}}>Reference 1</Typography>
                            </Grid>
                            <Grid item xs={12} md={6} mt={1}>
                                <CustomTextField 
                                    label="Full name"     
                                    placeholder="Ex: James Jameson"  
                                    // id="linkedin"
                                    // value={formik.values.linkedin}
                                    // onChange={formik.handleChange}
                                    // onBlur={formik.handleBlur}
                                    // error={formik.touched.linkedin && Boolean(formik.errors.linkedin)}
                                    // helperText={formik.errors.linkedin}
                                    // options={opciones}                            
                                />                   
                            </Grid> 
                            <Grid item xs={12} md={6} mt={1}>
                                <CustomTextField 
                                    label="Email"     
                                    placeholder="Enter email"  
                                    // id="linkedin"
                                    // value={formik.values.linkedin}
                                    // onChange={formik.handleChange}
                                    // onBlur={formik.handleBlur}
                                    // error={formik.touched.linkedin && Boolean(formik.errors.linkedin)}
                                    // helperText={formik.errors.linkedin}
                                    // options={opciones}                            
                                />                   
                            </Grid> 
                            <Grid item xs={12} md={6} mt={1}>
                                <CustomTextField 
                                    label="Company name"     
                                    placeholder="Ex: Microsoft"  
                                    // id="linkedin"
                                    // value={formik.values.linkedin}
                                    // onChange={formik.handleChange}
                                    // onBlur={formik.handleBlur}
                                    // error={formik.touched.linkedin && Boolean(formik.errors.linkedin)}
                                    // helperText={formik.errors.linkedin}
                                    // options={opciones}                            
                                />                   
                            </Grid> 
                            <Grid item xs={12} md={6} mt={1}>
                                <CustomTextField 
                                    label="Phone number"     
                                    placeholder="+1 (305)"  
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
                                <Divider/>              
                            </Grid>    
                            <Grid item xs={12} md={12} mt={0}>
                                <Typography variant='h6' sx={{fontWeight: 600}}>Reference 2</Typography>
                            </Grid>  
                            <Grid item xs={12} md={6} mt={1}>
                                <CustomTextField 
                                    label="Full name"     
                                    placeholder="Ex: James Jameson"  
                                    // id="linkedin"
                                    // value={formik.values.linkedin}
                                    // onChange={formik.handleChange}
                                    // onBlur={formik.handleBlur}
                                    // error={formik.touched.linkedin && Boolean(formik.errors.linkedin)}
                                    // helperText={formik.errors.linkedin}
                                    // options={opciones}                            
                                />                   
                            </Grid> 
                            <Grid item xs={12} md={6} mt={1}>
                                <CustomTextField 
                                    label="Email"     
                                    placeholder="Enter email"  
                                    // id="linkedin"
                                    // value={formik.values.linkedin}
                                    // onChange={formik.handleChange}
                                    // onBlur={formik.handleBlur}
                                    // error={formik.touched.linkedin && Boolean(formik.errors.linkedin)}
                                    // helperText={formik.errors.linkedin}
                                    // options={opciones}                            
                                />                   
                            </Grid> 
                            <Grid item xs={12} md={6} mt={1}>
                                <CustomTextField 
                                    label="Company name"     
                                    placeholder="Ex: Microsoft"  
                                    // id="linkedin"
                                    // value={formik.values.linkedin}
                                    // onChange={formik.handleChange}
                                    // onBlur={formik.handleBlur}
                                    // error={formik.touched.linkedin && Boolean(formik.errors.linkedin)}
                                    // helperText={formik.errors.linkedin}
                                    // options={opciones}                            
                                />                   
                            </Grid> 
                            <Grid item xs={12} md={6} mt={1}>
                                <CustomTextField 
                                    label="Phone number"     
                                    placeholder="+1 (305)"  
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
                                <Divider/>              
                            </Grid>    
                            <Grid item xs={12} md={12} mt={0}>
                                <Typography variant='h6' sx={{fontWeight: 600}}>Reference 3</Typography>
                            </Grid> 
                            <Grid item xs={12} md={6} mt={1}>
                                <CustomTextField 
                                    label="Full name"     
                                    placeholder="Ex: James Jameson"  
                                    // id="linkedin"
                                    // value={formik.values.linkedin}
                                    // onChange={formik.handleChange}
                                    // onBlur={formik.handleBlur}
                                    // error={formik.touched.linkedin && Boolean(formik.errors.linkedin)}
                                    // helperText={formik.errors.linkedin}
                                    // options={opciones}                            
                                />                   
                            </Grid> 
                            <Grid item xs={12} md={6} mt={1}>
                                <CustomTextField 
                                    label="Email"     
                                    placeholder="Enter email"  
                                    // id="linkedin"
                                    // value={formik.values.linkedin}
                                    // onChange={formik.handleChange}
                                    // onBlur={formik.handleBlur}
                                    // error={formik.touched.linkedin && Boolean(formik.errors.linkedin)}
                                    // helperText={formik.errors.linkedin}
                                    // options={opciones}                            
                                />                   
                            </Grid> 
                            <Grid item xs={12} md={6} mt={1}>
                                <CustomTextField 
                                    label="Company name"     
                                    placeholder="Ex: Microsoft"  
                                    // id="linkedin"
                                    // value={formik.values.linkedin}
                                    // onChange={formik.handleChange}
                                    // onBlur={formik.handleBlur}
                                    // error={formik.touched.linkedin && Boolean(formik.errors.linkedin)}
                                    // helperText={formik.errors.linkedin}
                                    // options={opciones}                            
                                />                   
                            </Grid> 
                            <Grid item xs={12} md={6} mt={1}>
                                <CustomTextField 
                                    label="Phone number"     
                                    placeholder="+1 (305)"  
                                    // id="linkedin"
                                    // value={formik.values.linkedin}
                                    // onChange={formik.handleChange}
                                    // onBlur={formik.handleBlur}
                                    // error={formik.touched.linkedin && Boolean(formik.errors.linkedin)}
                                    // helperText={formik.errors.linkedin}
                                    // options={opciones}                            
                                />                   
                            </Grid>    
                        </Grid> 
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
