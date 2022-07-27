import React, { useState, useContext } from 'react'
import Grid from '@mui/material/Grid';
import {Typography, Box, Radio, Divider,Paper, Button } from '@mui/material';
import LayoutBackground from '../../components/layout/LayoutBackground';
import WithAuth from '../../components/hoc/WithAuth'
import { ThemeContext } from '../../contexts/useThemeContext';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useRouter } from 'next/router';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CustomTextField from '../../components/common/CustomTextField';

export default function Login() {
  const { theme } = useContext(ThemeContext);
  const router = useRouter();
  const { query } = router;
  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
    checkbox: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: prop === "checkbox" ? event.target.checked : event.target.value  });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleForm = () => {
    if ( query.id === "1" ) {
      router.push('/consultant');
    }else{
      router.push('/company/step1');
    }

  }

  return (
    <WithAuth safe={false}>      
        <LayoutBackground
          title="Log In"
        >          
          <Button 
            variant="contained" 
            startIcon={<LinkedInIcon />}
            sx={{
                textTransform: "none",
                color: theme.colorWhite,
                backgroundColor: theme.colorBlue2,
                borderRadius: "8px",
                '&:hover':{                            
                    backgroundColor: theme.colorBlue2
                }
            }}
            fullWidth
          >
            Continue with LinkedIn
          </Button>
          <Box mt={2} sx={{width: "100%"}} >
              <Divider sx={{color: theme.colorDivider}}><span style={{color:theme.colorLabel}}>or</span></Divider>
          </Box>
          <form autoComplete='off' style={{marginTop: 0, width: "100%"}}>   
            <Box mt={2}>
              <CustomTextField
                value={values.email}
                onChange={handleChange('email')}
                label="Email"
                placeholder="Enter email"
              />
            </Box>
            <Box mt={3}>
              <CustomTextField
                value={values.password}
                type={values.showPassword ? 'text' : 'password'}
                onChange={handleChange('password')}
                label="Password"
                placeholder="Enter password"
                id="password"
              >
                <Box sx={{position: "absolute", top:25, right: 15}}>
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff fontSize="small" sx={{color: theme.colorLabel}}/> : <Visibility fontSize="small" sx={{color: theme.colorLabel}}/>}
                    </IconButton>
                </Box>
              </CustomTextField>
            </Box>
            <FormControlLabel
              value="end"
              control={
                  <Checkbox 
                      checked={values.checkbox}
                      onChange={handleChange('checkbox')}
                      sx={{borderRadius: 20,}}
                  />
              }
              label={<span style={{color: theme.colorLabel}}>Remember my login on this computer</span>}
              labelPlacement="end"
              sx={{my:1,}}
            />
          </form>
          <Button 
              variant="contained" 
              sx={{
                  textTransform: "none",
                  color: theme.colorWhite,
              }}
              fullWidth
              onClick={handleForm}
          >
              Log In
          </Button>
          <Box mt={2.5} sx={{width: "100%"}} >
              <Divider sx={{color: theme.colorDivider}}/>
          </Box>
          <Box sx={{display: "flex", mt:2,}}>
              <Typography sx={{color: theme.colorLabel}}>Don&apos;t have an account?</Typography>
              <Typography sx={{mx: 1, color: theme.colorLabel}}>|</Typography>
              <Typography 
                  sx={{fontWeight: "bold", cursor: "pointer", color: theme.colorLabel}}                        
                  onClick={() => {router.push("signUp")}}
              >Sign Up</Typography>
          </Box>
        </LayoutBackground>
    </WithAuth>
  )
}
