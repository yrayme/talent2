import React, {useState, useContext} from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import {styled, alpha} from '@mui/material/styles';
import { InputBase, Typography } from '@mui/material';
import NativeSelect from '@mui/material/NativeSelect';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ThemeContext } from '../../contexts/useThemeContext';

const StyledSelect = styled(InputBase)(({theme,error})=>({
  'label + &': {
    marginTop: theme.spacing(2.5)
  },
  '& .MuiInputBase-input': {
    borderRadius: 8,
    position: 'relative',
    border: error ? `1px solid ${theme.palette.error.main}` : '1px solid #D9D9D9',
    fontSize: 16,
    padding: "10px 10px",
    '&:focus': {
      boxShadow: error ? `${alpha(theme.palette.error.main, 0.25)} 0 0 0 0.2rem` : `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: error ? theme.palette.error.main : theme.palette.primary.main,
    },
  },
})); 


const StyledLabel = styled(InputLabel)(({theme,error})=>({
  '&.Mui-focused': {
    color: error ? theme.palette.error.main : "gray",
  },
}));

const CustomSelect = ({
  label,
  options,
  type, 
  value,
  name,
  error,
  helperText,
  id, 
  onChange
  }) => {
  const { theme } = useContext(ThemeContext);
    // console.log(options)
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: 120 }} fullWidth>
    <StyledLabel error={error} shrink sx={{fontSize: 20, fontWeight: 600, marginLeft: -1.5, color: theme.colorLabel}} htmlFor="input-field">
      {label}
    </StyledLabel>
      <NativeSelect 
        name={name}
        id={id}       
        value={value}
        onChange={onChange}     
        input={<StyledSelect />}
        IconComponent={KeyboardArrowDownIcon}
        error={error}
      >
      <option value="None" defaultValue>Select...</option>
      {options && options.map((value, index) => {
        return(
          <option value={value} key={index}>{value}</option>
        )
      })}
      </NativeSelect>
      {error ? (
          <Typography
            color="error"
            mb={0}
            ml={0}
            variant="caption"
            sx={{ display: 'flex', justifyContent: 'flex-start' }}
          >
            {helperText}
          </Typography>
        ) : null}
    </FormControl>
  );
}

CustomSelect.defaultProps = {
};

export default CustomSelect;