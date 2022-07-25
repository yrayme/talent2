
import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const container = {
    backgroundImage: "url('/assets/fondo.jpg')",
    backgroundSize: "100% 100%",
    height: '96.7vh',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 15,
}
export default function LayoutBackground({children, title}) {
  return (
    <Grid container spacing={0}>
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
                width={250}
                height={120}
            />
          </Box>
          <Typography variant='h4' sx={{fontWeight: "bold", mb:3}}>{title}</Typography>
          {children}
        </Box>
      </Grid>
    </Grid>
  )
}
