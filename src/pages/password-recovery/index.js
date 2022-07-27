import React, { useState, useContext } from 'react'
import Grid from '@mui/material/Grid';
import {Typography, Box, Radio, Divider,Paper, Button } from '@mui/material';
import LayoutBackground from '../../components/layout/LayoutBackground';
import WithAuth from '../../components/hoc/WithAuth'
import { ThemeContext } from '../../contexts/useThemeContext';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CustomTextField from '../../components/common/CustomTextField';

export default function PasswordRecovery() {
    const { theme } = useContext(ThemeContext);
    const router = useRouter();
    const [selectedValue, setSelectedValue] = useState(1);

  
    const formik = useFormik({
        initialValues: {
            email: "", 
            // date: new Date(),
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Required').email(),
            // date: Yup.string().required('Required'),
        }),
        validate: (values) => {
            const errors = {}
            return errors
        },
        onSubmit: async (values) => {
            const { user, password } = values
        },
    });


    const handleSubmit = () => {
        router.push({
        pathname : "/signUp",
        query: { id: selectedValue }
        })
    }
    return (
        <WithAuth safe={false}>      
            <LayoutBackground
                title="Password recovery"
            >
                <Typography sx={{fontSize: "16px", color: theme.colorLabel, textAlign: "center", mt: -1}}>
                    Enter your email address, we will send you a link to recover your password.
                </Typography>
                    <Box autoComplete='off' style={{marginTop: 0, width: "100%"}}>   
                        <Box mt={3}>
                            <CustomTextField
                                label="Email"
                                placeholder="Enter email"
                                id="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.errors.email}
                            />
                        </Box>
                        <Button 
                            variant="contained" 
                            sx={{
                                textTransform: "none",
                                color: theme.colorWhite,
                                mt: 4
                            }}
                            fullWidth
                            onClick={formik.handleSubmit}
                        >
                            Send
                        </Button>
                    </Box>
            </LayoutBackground>
        </WithAuth>
    )
}
