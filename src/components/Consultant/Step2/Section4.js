import React, { useContext, useState } from 'react';
import { Box, Grid, Typography, Card, CardContent, Divider } from '@mui/material';
import CustomTextField from '../../common/CustomTextField';
import { ThemeContext } from '../../../contexts/useThemeContext';

export default function Section4({ formik }) {
    const { theme } = useContext(ThemeContext);
    return (
        <Grid container pt={6} spacing={2}>
            <Grid item xs={12} md={5}>
                <Box px={{xs: 2, md:0}}>
                    <Typography fontWeight={600} sx={{fontSize: "20px"}}>References</Typography>
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
                                <Typography variant='h6' sx={{fontWeight: 600}}>Reference 1</Typography>
                            </Grid>
                            <Grid item xs={12} md={6} mt={1}>
                                <CustomTextField 
                                    label="Full name"     
                                    placeholder="Ex: James Jameson"  
                                    id="reference1.fullName"
                                    value={formik.values.reference1.fullName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.errors.reference1 && Boolean(formik.errors.reference1.fullName)}
                                    helperText={formik.errors.reference1 && formik.errors.reference1.fullName}                       
                                />                   
                            </Grid> 
                            <Grid item xs={12} md={6} mt={1}>
                                <CustomTextField 
                                    label="Email"     
                                    placeholder="Enter email"  
                                    id="reference1.email"
                                    value={formik.values.reference1.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.errors.reference1 && Boolean(formik.errors.reference1.email)}
                                    helperText={formik.errors.reference1 && formik.errors.reference1.email}                      
                                />                   
                            </Grid> 
                            <Grid item xs={12} md={6} mt={1}>
                                <CustomTextField 
                                    label="Company name"     
                                    placeholder="Ex: Microsoft"  
                                    id="reference1.company"
                                    value={formik.values.reference1.company}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.errors.reference1 && Boolean(formik.errors.reference1.company)}
                                    helperText={formik.errors.reference1 && formik.errors.reference1.company}                           
                                />                   
                            </Grid> 
                            <Grid item xs={12} md={6} mt={1}>
                                <CustomTextField 
                                    label="Phone number"     
                                    placeholder="+1 (305)"  
                                    id="reference1.phone"
                                    value={formik.values.reference1.phone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.errors.reference1 && Boolean(formik.errors.reference1.phone)}
                                    helperText={formik.errors.reference1 && formik.errors.reference1.phone}                       
                                />                   
                            </Grid>  
                            <Grid item xs={12} md={12} mt={1}>
                                <Divider sx={{color: theme.grayInput}}/>                   
                            </Grid>  
                            <Grid item xs={12} md={12} mt={0}>
                                <Typography variant='h6' sx={{fontWeight: 600}}>Reference 2</Typography>
                            </Grid>  
                            <Grid item xs={12} md={6} mt={1}>
                                <CustomTextField 
                                    label="Full name"     
                                    placeholder="Ex: James Jameson"  
                                    id="reference2.fullName"
                                    value={formik.values.reference2.fullName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.errors.reference2 && Boolean(formik.errors.reference2.fullName)}
                                    helperText={formik.errors.reference2 && formik.errors.reference2.fullName}                       
                                />                   
                            </Grid> 
                            <Grid item xs={12} md={6} mt={1}>
                                <CustomTextField 
                                    label="Email"     
                                    placeholder="Enter email"  
                                    id="reference2.email"
                                    value={formik.values.reference2.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.errors.reference2 && Boolean(formik.errors.reference2.email)}
                                    helperText={formik.errors.reference2 && formik.errors.reference2.email}                      
                                />                   
                            </Grid> 
                            <Grid item xs={12} md={6} mt={1}>
                                <CustomTextField 
                                    label="Company name"     
                                    placeholder="Ex: Microsoft"  
                                    id="reference2.company"
                                    value={formik.values.reference2.company}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.errors.reference2 && Boolean(formik.errors.reference2.company)}
                                    helperText={formik.errors.reference2 && formik.errors.reference2.company}                           
                                />                   
                            </Grid> 
                            <Grid item xs={12} md={6} mt={1}>
                                <CustomTextField 
                                    label="Phone number"     
                                    placeholder="+1 (305)"  
                                    id="reference2.phone"
                                    value={formik.values.reference2.phone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.errors.reference2 && Boolean(formik.errors.reference2.phone)}
                                    helperText={formik.errors.reference2 && formik.errors.reference2.phone}                       
                                />                   
                            </Grid>  
                            <Grid item xs={12} md={12} mt={1}>
                                <Divider sx={{color: theme.grayInput}}/>                   
                            </Grid>    
                            <Grid item xs={12} md={12} mt={0}>
                                <Typography variant='h6' sx={{fontWeight: 600}}>Reference 3</Typography>
                            </Grid> 
                            <Grid item xs={12} md={6} mt={1}>
                                <CustomTextField 
                                    label="Full name"     
                                    placeholder="Ex: James Jameson"  
                                    id="reference3.fullName"
                                    value={formik.values.reference3.fullName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.errors.reference3 && Boolean(formik.errors.reference3.fullName)}
                                    helperText={formik.errors.reference3 && formik.errors.reference3.fullName}                       
                                />                   
                            </Grid> 
                            <Grid item xs={12} md={6} mt={1}>
                                <CustomTextField 
                                    label="Email"     
                                    placeholder="Enter email"  
                                    id="reference3.email"
                                    value={formik.values.reference3.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.errors.reference3 && Boolean(formik.errors.reference3.email)}
                                    helperText={formik.errors.reference3 && formik.errors.reference3.email}                      
                                />                   
                            </Grid> 
                            <Grid item xs={12} md={6} mt={1}>
                                <CustomTextField 
                                    label="Company name"     
                                    placeholder="Ex: Microsoft"  
                                    id="reference3.company"
                                    value={formik.values.reference3.company}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.errors.reference3 && Boolean(formik.errors.reference3.company)}
                                    helperText={formik.errors.reference3 && formik.errors.reference3.company}                           
                                />                   
                            </Grid> 
                            <Grid item xs={12} md={6} mt={1}>
                                <CustomTextField 
                                    label="Phone number"     
                                    placeholder="+1 (305)"  
                                    id="reference3.phone"
                                    value={formik.values.reference3.phone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.errors.reference3 && Boolean(formik.errors.reference3.phone)}
                                    helperText={formik.errors.reference3 && formik.errors.reference3.phone}                       
                                />                   
                            </Grid>  
                        </Grid> 
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
