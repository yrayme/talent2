import React from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import PropTypes from "prop-types";
import { TextField, Typography } from '@mui/material';

const BootstrapInput = styled(InputBase)(({ theme, type, iconleft, error }) => ({
  'label + &': {
    marginTop: theme.spacing(2.5),
  },
  '& .MuiInputBase-input': {
    borderRadius: 6,
    position: 'relative',
    border: error ? `1px solid ${theme.palette.error.main}` : '1px solid #ced4da',
    fontSize: 16,
    padding: type ? '10px 40px 10px 10px' : "10px 10px",
    paddingLeft: iconleft ? "45px" : "10px",
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
  

const CustomTextField = ({
    id,
    error,
    helperText,
    label, 
    placeholder, 
    onChange, 
    children, 
    type, 
    value,
    iconleft,
    multiline,
    rows,
    name
  }) => {
  return(
    <FormControl fullWidth 
      error={error}
    >
      <StyledLabel error={error} shrink sx={{fontSize: 22, fontWeight: 600, marginLeft: -1.5}} htmlFor="input-field">
        {label}
      </StyledLabel>
      <BootstrapInput
        name={name}
        id={id}
        error={error}
        value={value}
        type={type}
        placeholder={placeholder} 
        onChange={onChange}
        iconleft={iconleft}
        multiline={multiline}
        rows={rows}
      />
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
        {children}
        
    </FormControl>
  );
}
CustomTextField.propTypes = {
  id: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  // label: PropTypes.string, 
  placeholder: PropTypes.string, 
  onChange: PropTypes.func, 
  children: PropTypes.node, 
  type: PropTypes.string, 
  value: PropTypes.string,
  iconleft: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
};

CustomTextField.defaultProps = {
};

export default CustomTextField;