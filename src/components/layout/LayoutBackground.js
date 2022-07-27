
import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { ThemeContext } from '../../contexts/useThemeContext';

const container = {
    backgroundImage: "url('/assets/fondo.jpg')",
    backgroundSize: "100% 100%",
    height: '96.7vh',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 15,
}
export default function LayoutBackground({children, title}) {
  const { theme } = useContext(ThemeContext);
  return (
    <Grid container spacing={0} sx={{backgroundColor: theme.colorGrayFondo}}>
      <Grid item xs={12} md={6} p={2} 
        sx={{display: {xs: "none", md: "block"}}}
      >
        <Box style={container}></Box>
      </Grid>
      <Grid item xs={12} md={6}
          sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}
      >
        <Box sx={{width: {xs:"80%", md:"60%"}, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>          
          <Box> 
            <Image 
                src="/assets/logo.png"
                alt="logo"
                width={180}
                height={80}
            />
          </Box>
          <Typography sx={{fontWeight: 600, mb:3, fontSize: "30px"}}>{title}</Typography>
          {children}
        </Box>
      </Grid>
    </Grid>
  )
}
