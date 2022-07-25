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
                        onClick={linkedInLogin}
                        sx={{
                            textTransform: "none",
                            color: theme.colorWhite,
                            backgroundColor: theme.colorBlue,
                            '&:hover':{                            
                                backgroundColor: theme.colorBlue
                            }
                        }}
                        fullWidth
                    >
                        Continue with LinkedIn
                    </Button>
                )}
                </LinkedIn>
                <Box mt={2} sx={{width: "100%"}} >
                    <Divider>or</Divider>
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
                                    {values.showPassword ? <VisibilityOff fontSize="small"/> : <Visibility fontSize="small"/>}
                                </IconButton>
                            </Box>
                        </CustomTextField>
                    </Box>       
                    {/* <FormControl
                        fullWidth 
                        variant="outlined"
                    >
                        <Typography
                            sx={{fontSize: 16, ml:0, mb:0.5, fontWeight: 800}}
                        >
                            First Name
                        </Typography>
                        <OutlinedInput
                            value={values.firstname}
                            onChange={handleChange('firstname')}
                            placeholder='Enter name'
                            size="small"
                        />
                    </FormControl>                 
                    <FormControl
                        fullWidth 
                        variant="outlined"
                        sx={{mt:2}}
                    >
                        <Typography
                            sx={{fontSize: 16, ml:0, mb:0.5, fontWeight: 800}}
                        >
                            Last Name
                        </Typography>
                        <OutlinedInput
                            value={values.lastname}
                            onChange={handleChange('lastname')}
                            placeholder='Enter name'
                            size="small"
                        />
                    </FormControl>             
                    <FormControl
                        fullWidth 
                        variant="outlined"
                        sx={{mt:2}}
                    >
                        <Typography
                            sx={{fontSize: 16, ml:0, mb:0.5, fontWeight: 800}}
                        >
                            Email
                        </Typography>
                        <OutlinedInput
                            value={values.email}
                            onChange={handleChange('email')}
                            placeholder='Enter email'
                            size="small"
                        />
                    </FormControl>        
                    <FormControl
                        fullWidth 
                        variant="outlined"
                        sx={{mt:2}}
                    >
                        <Typography
                            sx={{fontSize: 16, ml:0, mb:0.5, fontWeight: 800}}
                        >
                            Passsword
                        </Typography>
                        <OutlinedInput
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            placeholder='Enter password'
                            size="small"
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  edge="end"
                                >
                                  {values.showPassword ? <VisibilityOff fontSize="small"/> : <Visibility fontSize="small"/>}
                                </IconButton>
                              </InputAdornment>
                            }
                        />
                    </FormControl>                     */}
                    <FormControlLabel
                        value="end"
                        control={
                            <Checkbox 
                                checked={values.checkbox}
                                onChange={handleChange('checkbox')}
                            />
                        }
                        label={<span>I agree with <strong>Privacy Policy & terms of Use</strong></span>}
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
                >
                    Apply to join
                </Button>
                <Box mt={2.5} sx={{width: "100%"}} >
                    <Divider/>
                </Box>
                <Box sx={{display: "flex", mt:2,}}>
                    <Typography >Already have an account</Typography>
                    <Typography sx={{mx: 1}}>|</Typography>
                    <Typography 
                        sx={{fontWeight: "bold", cursor: "pointer"}}                        
                        onClick={() => {router.push("login")}}
                    >Log In</Typography>
                </Box>
            </LayoutBackground>
        </WithAuth>
    )
}
