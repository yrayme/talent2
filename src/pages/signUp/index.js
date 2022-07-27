import React, { useContext, useEffect, useState } from 'react';
import { Button, Divider, Box, Typography } from '@mui/material'
import WithAuth from '../../components/hoc/WithAuth'
import LayoutBackground from '../../components/layout/LayoutBackground'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ThemeContext } from '../../contexts/useThemeContext';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useRouter } from 'next/router';
import CustomTextField from '../../components/common/CustomTextField';

import { LinkedIn } from 'react-linkedin-login-oauth2';
// You can use provided image shipped by this package or using your own
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png';
import Image from 'next/image';

export default function Register() {
    const { theme } = useContext(ThemeContext);
    const router = useRouter();
    const { query } = router
    const [values, setValues] = useState({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      showPassword: false,
      checkbox: false,
    });
    const [location, setLocation] = useState();
    
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: prop === "checkbox" ? event.target.checked : event.target.value  });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    useEffect(() => {
      setLocation(window.location.origin);
    }, [])
    
    const login = () => {
        router.push({
          pathname : "/login",
          query: { id: query.id }
        })
    }
    return (
        <WithAuth safe={false}>
            <LayoutBackground            
                title="Sign Up"
            >
                <LinkedIn
                    clientId="86vhj2q7ukf83q"
                    redirectUri={`${location}/linkedin`}
                    onSuccess={(code) => {
                        console.log(code);
                    }}
                    onError={(error) => {
                        console.log(error);
                    }}
                >
                {({ linkedInLogin }) => (  
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
                )}
                </LinkedIn>
                <Box mt={2} sx={{width: "100%"}} >
                    <Divider sx={{color: theme.colorDivider}}><span style={{color:theme.colorLabel}}>or</span></Divider>
                </Box>
                <form autoComplete='off' style={{marginTop: 10, width: "100%"}}> 
                    <Box mt={2}>
                        <CustomTextField
                            value={values.firstname}
                            onChange={handleChange('firstname')}
                            label="First Name"
                            placeholder="Enter name"
                        />
                    </Box>    
                    <Box mt={3}>
                        <CustomTextField
                            value={values.lastname}
                            onChange={handleChange('lastname')}
                            label="Last Name"
                            placeholder="Enter name"
                        />
                    </Box>   
                    <Box mt={3}>
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
                            />
                        }
                        label={<span style={{color: theme.colorLabel}}>I agree with <strong>Privacy Policy & terms of Use</strong></span>}
                        labelPlacement="end"
                        sx={{my:1}}
                    />
                </form>
                <Button 
                    variant="contained" 
                    sx={{
                        textTransform: "none",
                        color: theme.colorWhite,
                    }}
                    fullWidth
                    onClick={login}
                >
                    Apply to join
                </Button>
                <Box mt={2.5} sx={{width: "100%"}} >
                    <Divider sx={{color: theme.colorDivider}}/>
                </Box>
                <Box sx={{display: "flex", mt:2,}}>
                    <Typography sx={{color: theme.colorLabel}}>Already have an account</Typography>
                    <Typography sx={{mx: 1, color: theme.colorLabel}}>|</Typography>
                    <Typography 
                        sx={{fontWeight: "bold", cursor: "pointer", color: theme.colorLabel}}                        
                        onClick={() => {router.push("login")}}
                    >Log In</Typography>
                </Box>
            </LayoutBackground>
        </WithAuth>
    )
}
