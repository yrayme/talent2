import React, { useContext, useState } from 'react'
import { Box, Grid, Typography, Card, CardContent, Divider } from '@mui/material';
import CustomTextField from '../../common/CustomTextField';
import CustomSelect from '../../common/CustomSelect';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ThemeContext } from '../../../contexts/useThemeContext';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import CustomDate from '../../common/CustomDate';
import ButtonUpload from '../../common/ButtonUpload';
import Image from 'next/image';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const Section1 = () => {
    const [imagen, setImagen] = useState([]);
    const { theme } = useContext(ThemeContext);    
    
    return (
        <Grid container pt={6} spacing={2}>
            <Grid item xs={12} md={5}>
                <Box px={{xs: 2, md:0}}>
                    <Typography fontWeight={600} sx={{fontSize: "20px"}}>General</Typography>
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
                        <Grid container spacing={2} sx={{width: {xs:"100%", md: "100%"}}}>
                            <Grid item xs={12} md={2} mt={1}>
                                <Box
                                    sx={{
                                        borderRadius: "50%",
                                        width: 100,
                                        height: 100,
                                        backgroundColor: theme.colorDivider,
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}
                                >                                    
                                    {imagen.length > 0 ? (
                                        <Image
                                            src={imagen[0].base64}
                                            width={100}
                                            height={100}
                                            alt="img"    
                                            style={{
                                                borderRadius: "50%",
                                            }}                                
                                        />
                                    ):(
                                        <PersonOutlineIcon fontSize="large" sx={{color: theme.colorWhite}}/>
                                    )}    
                                </Box>                             
                            </Grid>   
                            <Grid item xs={12} md={7} mt={1}>  
                                <Typography variant='subtitle2'>Please upload a JPG or PNG that is at least 380x380px and no larger than 10 MB</Typography>   
                                <Box sx={{mt:1,mb:2}}>
                                    <ButtonUpload
                                        setImagen={setImagen}
                                        imagen={imagen}
                                        title="Upload Photo"      
                                        photo={true}  
                                        type="image/*"                      
                                    />    
                                </Box>                           
                            </Grid>  
                            <Grid item xs={12} md={12} mt={1}>  
                              <Divider sx={{color: theme.grayInput}}/>                                  
                            </Grid>     
                            <Grid item xs={12} md={12} mt={1}>  
                                <CustomTextField 
                                    label="Full legal name"     
                                    placeholder="Ex: Gismart"  
                                    // id="linkedin"
                                    // value={formik.values.linkedin}
                                    // onChange={formik.handleChange}
                                    // onBlur={formik.handleBlur}
                                    // error={formik.touched.linkedin && Boolean(formik.errors.linkedin)}
                                    // helperText={formik.errors.linkedin}                           
                                />                                   
                            </Grid>     
                            <Grid item xs={12} md={6} mt={1}>  
                                <CustomSelect 
                                    label="Country"      
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
                                <CustomSelect 
                                    label="State/Province"      
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
                                <CustomSelect 
                                    label="City"      
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
                                    placeholder="+1(305)"  
                                    // id="linkedin"
                                    // value={formik.values.linkedin}
                                    // onChange={formik.handleChange}
                                    // onBlur={formik.handleBlur}
                                    // error={formik.touched.linkedin && Boolean(formik.errors.linkedin)}
                                    // helperText={formik.errors.linkedin}                           
                                />                                   
                            </Grid> 
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Section1;