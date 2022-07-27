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
      borderRadius: 8,
      position: 'relative',
      fontSize: 16,
      padding: "10.5px 12px",      
    },
    "& .MuiOutlinedInput-root": {
      '&:hover fieldset': {
        borderColor: error ? `1px solid ${theme.palette.error.main}` : '#D9D9D9',
      },
      '&.Mui-focused fieldset': {
        boxShadow: error ? `${alpha(theme.palette.error.main, 0.25)} 0 0 0 0.2rem` : `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: error ? theme.palette.error.main : theme.palette.primary.main,
      },
      "& fieldset": {
          border: error ? `1px solid ${theme.palette.error.main}` : '1px solid #D9D9D9',
          borderRadius: 8,
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
          error={(value === "" || value === null) ? true : false}
        >
            <InputLabel shrink 
                sx={{
                    fontSize: 20, 
                    fontWeight: 600,
                    marginLeft: -1.5,
                    color: theme.colorLabel
                }} 
                htmlFor="input-field"
            >
                {label}
            </InputLabel>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={value}
                onChange={onChange}
                renderInput={(params) => <BootstrapInput {...params} error={value === null || value === ""}/>}
              />
            </LocalizationProvider>
            {children}
        </FormControl>
    )
}
