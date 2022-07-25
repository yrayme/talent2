import React, { createContext, useContext, useState } from 'react'
import {
  useToast,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import Typography from '@mui/material/Typography'

import { ThemeContext } from './useThemeContext'

const STATE_INITIAL = {
  duration: 3000,
  isClosable: true,
  position: 'top-right',
}

const AlertContext = createContext(STATE_INITIAL)

export default function AlertProvider(props) {
  const [state, setState] = useState(STATE_INITIAL)
  const [stateAlert, setStateAlert] = useState({
    title: '',
    message: '',
    btnSuccess: '',
    btnClose: '',
    onSuccess: () => {},
    onClose: () => {},
  })

  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  const { theme } = useContext(ThemeContext);

  const toast = useToast()

  const { children } = props

  const alertSuccess = (title, description, duration) => {
    const newState = {
      ...state,
      title,
      description,
      status: 'success',
      duration: duration || 3000,
    }
    toast(newState)
    setState(newState)
  }

  const alertError = (title, description, duration) => {
    const newState = {
      ...state,
      title,
      description,
      status: 'error',
      duration: duration || 3000,
    }
    toast(newState)
    setState(newState)
  }

  const alertWarning = (title, description, duration) => {
    const newState = {
      ...state,
      title,
      description,
      status: 'warning',
      duration: duration || 3000,
    }
    toast(newState)
    setState(newState)
  }

  const alertInfo = (title, description, duration) => {
    const newState = {
      ...state,
      title,
      description,
      status: 'info',
      duration: duration || 3000,
    }
    toast(newState)
    setState(newState)
  }

  const onCloseAlertDialog = () => {
    setStateAlert({
      title: '',
      message: '',
      btnClose: '',
      btnSuccess: '',
      onSuccess: () => {},
      onClose: () => {},
    })
    onClose()
  }

  const onOpenAlertDialog = (alertDetails) => {
    setStateAlert(alertDetails)
    onOpen()
  }

  return (
    <AlertContext.Provider
      value={{
        alertSuccess,
        alertError,
        alertWarning,
        alertInfo,
        onOpenAlertDialog,
        onCloseAlertDialog,
      }}
    >
      {children}
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <Typography
              variant="h4"
              sx={{ ml: 2, mt: 1, color: theme.colorPrimary }}
            >
              {stateAlert.title}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                ml: 3,
                mt: 1,
                color: theme.colorText,
                whiteSpace: 'pre-line',
              }}
            >
              {stateAlert.message}
            </Typography>

            <AlertDialogFooter>
              <Button onClick={stateAlert.onClose}>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.colorText,
                  }}
                >
                  {stateAlert.btnClose}
                </Typography>
              </Button>
              <Button
                style={{
                  backgroundColor: theme.colorPrimary,
                }}
                ref={cancelRef}
                onClick={stateAlert.onSuccess}
                ml={3}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: '#ffffff',
                  }}
                >
                  {stateAlert.btnSuccess}
                </Typography>
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </AlertContext.Provider>
  )
}

export { AlertProvider, AlertContext }
