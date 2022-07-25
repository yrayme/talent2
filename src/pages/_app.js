import React, { Fragment, useEffect } from "react";
import Head from 'next/head'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import '../../styles/globals.css'

import { AuthProvider } from '../contexts/useAuthContext'
import { ThemeProvider as ThemeProvide } from '../contexts/useThemeContext'
import { SignUpProvider } from "../contexts/SignUpContext";
import { AlertProvider } from "../contexts/useAlertContext";

const theme = createTheme({
  palette: {
    primary: {
      main: '#ABCD00',
    },
    secondary: {
      main: '#FF6700',
    },
    warning: {
      main: '#ed3e45',
    },
    info: {
      main: '#0090D4',
    },
    error: {
      main: '#c62828',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h2',
          h2: 'h2',
          h3: 'h2',
          h4: 'h2',
          h5: 'h2',
          h6: 'h2',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span',
        },
      },
    },
  },
})

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <Fragment>
      <Head>
        <meta name="description" content="Report"></meta>
        <link rel="icon" href="/assets/logo.png" />
        <title>Talent</title>
      </Head>
      <AuthProvider>
        <SignUpProvider>
            <ThemeProvider theme={theme}>
              <ThemeProvide>
                <AlertProvider>
                  <Component {...pageProps} />
                </AlertProvider>
              </ThemeProvide>
            </ThemeProvider>
        </SignUpProvider>
      </AuthProvider>
    </Fragment>
  )
}

export default MyApp