import React, { useContext, useState } from 'react';
import { Box, Grid, Typography, Card, CardContent, Divider } from '@mui/material';
import { ThemeContext } from '../../../contexts/useThemeContext';
import ButtonUpload from '../../common/ButtonUpload';
import Image from 'next/image';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

export default function Section3() {
    const { theme } = useContext(ThemeContext);
    const [imagen, setImagen] = useState([]);
    return (
        <Grid container pt={6} spacing={2}>
            <Grid item xs={12} md={5}>
                <Box px={{xs: 2, md:0}}>
                    <Typography fontWeight={600} sx={{fontSize: "20px"}}>Subcontractor Master Agreement</Typography>
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
                                <Typography  sx={{fontWeight: 400, fontSize: "14px"}}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quibusdam facere blanditiis doloremque harum nam ea laborum nobis placeat nulla vel odio, quasi asperiores atque saepe earum quae deserunt deleniti.
                                </Typography>
                            </Grid> 
                            <Grid item xs={12} md={12} mt={1} sx={{display: "flex"}}>
                                <Box sx={{mr:1}}>                                    
                                    <PictureAsPdfIcon sx={{color: theme.colorIconRed}}/>
                                </Box>
                                <Typography sx={{fontWeight: 400, color: theme.colorBlue, fontSize: "14px"}}>
                                    subtractor_master_agreement_document.pdf.pdf
                                </Typography>
                            </Grid>  
                            <Grid item xs={12} md={12} mt={1}>
                                <Divider sx={{color: theme.grayInput}}/>                   
                            </Grid> 
                            <Grid item xs={12} md={12} mt={1}>
                                <Typography  sx={{fontWeight: 400, fontSize: "14px"}}>Upload your signed documents</Typography>
                            </Grid>    
                            <Grid item xs={12} md={5} mt={1}>
                                <ButtonUpload
                                    setImagen={setImagen}
                                    imagen={imagen}
                                    title="Upload file"
                                    multiple={true}
                                    type=""
                                />
                            </Grid>   
                            {/* <Grid item xs={12} md={12} mt={1}>
                                <Divider/>    
                            </Grid>     */}
                            {imagen.length > 0 && imagen.map((img, index) => {
                                return(
                                    <Grid item xs={6} sm={3} md={3} mt={1} key={index}>
                                        <Box 
                                            sx={{
                                                border: `1px solid ${theme.grayInput}`,
                                                p: 0.5,
                                                borderRadius: 3,
                                                display: "flex",
                                                justifyContent: "center"
                                            }}
                                        >
                                            <Image
                                                src={img.base64}
                                                width={160}
                                                height={90}
                                                alt="img"
                                            />
                                        </Box>
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
