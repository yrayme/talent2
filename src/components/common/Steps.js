import React, { useState, useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import Image from 'next/image';
import { ThemeContext } from '../../contexts/useThemeContext';
import SignUpContext from '../../contexts/SignUpContext';
import Check from '@mui/icons-material/Check';
import { useRouter } from 'next/router';

const steps = [
    {
        id: 1,
        label: 'Log In details',
    },
    {
        id: 2,
        label: 'Tell us about ypurself',
    },
    {
        id: 3,
        label: 'Master Agreement',
    },
];

const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: 'calc(-50% + 16px)',
      right: 'calc(50% + 16px)',
      height: 7,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.primary.main,
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.primary.main,
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#BFBFBF",
      borderTopWidth: 1,
      borderRadius: 1,
    },
}));
  
const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: 'transparent',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: theme.palette.primary.main,
  }),
  '& .QontoStepIcon-completedIcon': {
    color: theme.palette.primary.main,
    zIndex: 1,
    fontSize: 16,
    width: 32,
    height: 32,
    borderRadius: '50%',
    border: `1px solid ${theme.palette.primary.main}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  '& .QontoStepIcon-circle': {
    width: 32,
    height: 32,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
    border: ownerState.active ?  `1px solid ${theme.palette.primary.main}`: `1px solid #BFBFBF`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className, icon } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
       {completed ? (
          <div className="QontoStepIcon-completedIcon">
            <Check fontSize='small'/>
          </div>
        ) : (
            <div className="QontoStepIcon-circle">
                <Typography sx={{color: active ? "white" : "#BFBFBF"}}>{icon}</Typography>
            </div>
        )}
    </QontoStepIconRoot>
  );
}

export default function Steps() {
  const { theme } = useContext(ThemeContext);
  const { activeStep, setActiveStep } = useContext(SignUpContext);
  const router = useRouter();

  // useEffect(() => {
  //   switch (activeStep) {
  //     case 0:
  //       return router.push('/signUp/step1');
  //     case 1: 
  //       return router.push('/signUp/step2');
    
  //     default:
  //       break;
  //   }
  // }, [activeStep])
  

  return (
    <Box sx={{ width: '100%', backgroundColor: theme.graylight1, height: "100%" }} px={6} pb={5}>
        <Box sx={{ml:-3}}> 
            <Image 
                src="/assets/logo.png"
                alt="logo"
                width={180}
                height={80}
            />
        </Box>
        <Stepper activeStep={activeStep} connector={<QontoConnector />} sx={{pt:1}}>
            {steps.map((step, index) => {
                return (
                    <Step key={step.label}>
                        <StepLabel StepIconComponent={QontoStepIcon}>{step.label}</StepLabel>
                    </Step>
                );
            })}
        </Stepper>
    </Box>
  );
}