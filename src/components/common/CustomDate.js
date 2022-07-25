import React, { useContext } from 'react'
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { ThemeContext } from '../../contexts/useThemeContext';
import { alpha, styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const BootstrapInput = styled(TextField)(({ theme, error }) => ({
    'label + &': {
      marginTop: theme.spacing(2.6),
    },
    '& .MuiInputBase-input': {
      borderRadius: 6,
      position: 'relative',
      fontSize: 16,
      padding: "12px 12px",      
    },
    "& .MuiOutlinedInput-root": {
      '&:hover fieldset': {
        borderColor: error ? `1px solid ${theme.palette.error.main}` : '#ced4da',
      },
      '&.Mui-focused fieldset': {
        boxShadow: error ? `${alpha(theme.palette.error.main, 0.25)} 0 0 0 0.2rem` : `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: error ? theme.palette.error.main : theme.palette.primary.main,
      },
      "& fieldset": {
          border: error ? `1px solid ${theme.palette.error.main}` : '1px solid #ced4da',
          borderRadius: 6,
      }
    },
    "& .MuiSvgIcon-root":{
    }
}));

export default function CustomDate(props) {
  const {
      label,  
      onChange, 
      children, 
      value,
    } = props;
    const { theme } = useContext(ThemeContext);
    
    return (
        <FormControl fullWidth 
          error={value === "" ? true : false}
        >
            <InputLabel shrink 
                sx={{
                    fontSize: 22, 
                    fontWeight: 600,
                    marginLeft: -1.5,
                }} 
                htmlFor="input-field"
            >
                {label}
            </InputLabel>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={value}
                onChange={onChange}
                renderInput={(params) => <BootstrapInput {...params} />}
              />
            </LocalizationProvider>
            {children}
        </FormControl>
    )
}
