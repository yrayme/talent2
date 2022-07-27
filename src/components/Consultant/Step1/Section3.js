import React, { useState, useContext } from 'react';
import CustomSelect from '../../common/CustomSelect';
import { Box, Grid, Typography, Card, CardContent, Divider } from '@mui/material';
import { ThemeContext } from '../../../contexts/useThemeContext';

const Section3 = ({formik}) => {
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
    return(
        <Grid container pt={6} spacing={2}>
            <Grid item xs={12} md={5}>
                <Box px={{xs: 2, md:0}}>
                    <Typography fontWeight={600} sx={{fontSize: "20px"}}>How did you hear about us?</Typography>
                </Box>
                <Box mt={2} pl={{xs: 2, md:0}}>
                    <Typography sx={{fontSize: "16px"}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cumque eligendi tempore aliquam, blanditiis veniam odit aliquid quasi, molestias possimus omnis, aspernatur facilis provident laudantium ipsa sed repellendus eveniet nobis.
                    </Typography>
                </Box>    
            </Grid>
            <Grid item xs={12} md={7} p={{xs:2, md:0}}>
                <Card sx={{padding:1}}>
                    <CardContent>
                        <Grid container spacing={2} sx={{width: {xs:"100%", md: "100%"}}}>
                            <Grid item>
                                <Box mt={2} pl={{xs: 2, md:0}}>
                                    <Typography sx={{fontSize: "14px"}}>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi quaerat officia odio dolor ullam nesciunt, possimus provident perspiciatis ut ea tempora voluptas quasi quos amet est inventore illum molestias eum!
                                    </Typography>
                                    
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Divider sx={{color: theme.grayInput}}/>
                            </Grid>
                            <Grid item xs={12} md={12} mt={1}>
                                <CustomSelect 
                                    label={<span>Select options</span>} 
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Section3;