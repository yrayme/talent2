import React, { useContext } from 'react'
import { Box, Grid, Typography, Card, CardContent, Divider } from '@mui/material';
import CustomTextField from '../../common/CustomTextField';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ThemeContext } from '../../../contexts/useThemeContext';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


export default function Section2({formik}) {
    const { theme } = useContext(ThemeContext);
    const stylesIcon = {
        position: "absolute", 
        top:21, 
        left: 10,
        display: 'flex',
        alignItems: 'center',
        width: 'fit-content',
        '& svg': {
            my: 1.2,
        },
        '& hr': {
            mx: 0.9,
        },
    }
    return (
        <Grid container pt={6} spacing={2}>
            <Grid item xs={12} md={5}>
                <Box px={{xs: 2, md:0}}>
                    <Typography fontWeight={600} sx={{fontSize: "20px"}}>Social presence</Typography>
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
                            <Grid item xs={12} md={12} mt={1}>
                                <CustomTextField 
                                    label={<span>LinkedIn <span style={{fontWeight: 400}}>(Optional)</span></span>} 
                                    iconleft="true"                                    
                                    id="linkedin"
                                    value={formik.values.linkedin}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.errors.linkedin ? true : false}
                                    helperText={formik.errors.linkedin}
                                >                      
                                    <Box
                                        sx={stylesIcon}
                                    >
                                        <LinkedInIcon sx={{color: theme.colorIconRed}}/> 
                                        <Divider orientation="vertical" flexItem />
                                    </Box>                                      
                                </CustomTextField>
                            </Grid>                        
                            <Grid item xs={12} md={12} mt={1}>
                                <CustomTextField 
                                    label={<span>Skype <span style={{fontWeight: 400}}>(Optional)</span></span>} 
                                    iconleft="true"
                                >            
                                    <Box
                                        sx={stylesIcon}
                                    >
                                        <LinkedInIcon sx={{color: theme.colorIconRed}}/> 
                                        <Divider orientation="vertical" flexItem />
                                    </Box>                               
                                </CustomTextField>
                            </Grid>                    
                            <Grid item xs={12} md={12} mt={1}>
                                <CustomTextField 
                                    label={<span>Facebook <span style={{fontWeight: 400}}>(Optional)</span></span>} 
                                    iconleft="true"
                                >            
                                    <Box
                                        sx={stylesIcon}
                                    >
                                        <FacebookIcon sx={{color: theme.colorIconRed}}/> 
                                        <Divider orientation="vertical" flexItem />
                                    </Box>                                 
                                </CustomTextField>
                            </Grid>
                            
                            <Grid item xs={12} md={12} mt={1}>
                                <CustomTextField 
                                    label={<span>Twitter <span style={{fontWeight: 400}}>(Optional)</span></span>} 
                                    iconleft="true"
                                >            
                                    <Box
                                        sx={stylesIcon}
                                    >
                                        <TwitterIcon sx={{color: theme.colorIconRed}}/> 
                                        <Divider orientation="vertical" flexItem />
                                    </Box>                               
                                </CustomTextField>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
