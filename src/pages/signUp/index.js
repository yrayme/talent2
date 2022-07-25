import React, { useState, useContext } from 'react'
import Grid from '@mui/material/Grid';
import {Typography, Box, Radio, Divider,Paper, Button } from '@mui/material';
import LayoutBackground from '../../components/layout/LayoutBackground';
import WithAuth from '../../components/hoc/WithAuth'
import { ThemeContext } from '../../contexts/useThemeContext';
import { useRouter } from 'next/router';

export default function SignUp() {
  const { theme } = useContext(ThemeContext);
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState(1);

  

  const handleChange = (event, boolCheck) => {
    setSelectedValue(boolCheck ? event : event.target.value);
  };

  const roles = [
    {
      id: 1,
      title: "Consultant",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi.",
    },
    {
      id: 2,
      title: "Company",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi.",
    }
  ]

  const handleSubmit = () => {
    if ( selectedValue === 1) {
      router.push("signUp/step1")
    }else{
      router.push("signUp1")
    }
  }
  return (
    <WithAuth safe={false}>      
        <LayoutBackground
            title="Please select your role"
        >
          {roles.map((rol) => (            
              <Paper 
                key={rol.id}
                sx={{
                  // width: {xs: "80%", md: "50%"}, 
                  pt:2, 
                  mt:3,
                  borderRadius: 2,
                  '&:hover':{
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
                  }
                }}   
                onClick={() => {handleChange(rol.id, true)}}
              >
                <Box
                  sx={{
                    display: "flex", 
                    justifyContent: "space-between",
                    px:3
                  }}
                >              
                  <Typography variant="subtitle1" sx={{fontWeight: "bold"}}>{rol.title}</Typography>
                  <Box mt={-1}>                
                    <Radio
                      checked={selectedValue == rol.id}
                      onChange={handleChange}
                      value={rol.id}
                      name="radio-buttons"
                      inputProps={{ 'aria-label': rol.id }}
                      sx={{color: "grey"}}
                    />
                  </Box>
                </Box>
                <Divider/>
                <Typography variant='subtitle2' px={3} py={2}>{rol.description}</Typography>
              </Paper>
            ))}
            <Box mt={5}>
              <Button 
                variant="contained" 
                sx={{px: 6, textTransform: 'none', color: theme.colorWhite}}
                onClick={handleSubmit}
                >
                Apply
              </Button>
            </Box>
        </LayoutBackground>
    </WithAuth>
  )
}
