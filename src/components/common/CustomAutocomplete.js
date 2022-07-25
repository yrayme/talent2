import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import {styled, alpha} from '@mui/material/styles';
import { Avatar, InputBase, Box, Menu, MenuItem, Dialog } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import DoneIcon from '@mui/icons-material/Done';

const StyledInput = styled(TextField)(({theme,error})=>({
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
export default function CustomAutocomplete({error, label}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    // const [open, setOpen] = useState(false);
    const open = Boolean(anchorEl);
    const handleClose = (event) => {
        // setOpen(false);
        setAnchorEl(null);
    };
    const [top100Films, setTop100Films] = useState([
        { title: 'Figma', year: 1994, id: 1 },
        { title: 'JavaScript1', year: 1972, id: 2 },
        { title: 'JavaScript: Part II', year: 1974, id: 3 },
        { title: 'Figma1', year: 1994, id: 4 },
        { title: 'JavaScript', year: 1972, id: 5 },
        { title: 'JavaScript: Part II1', year: 1974, id: 6 },
    ])
    const onChangeAutocomplete = (event, value) => {
        console.log(event, value)   
        setAnchorEl(event.nativeEvent);
        // setOpen(true)     

    }

    
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// const top100Films = [
//   { title: 'The Shawshank Redemption', year: 1994, id:1},
//   { title: 'The Godfather', year: 1972, id:2 },
//   { title: 'The Godfather: Part II', year: 1974, id: 3 },
//   { title: 'The Dark Knight', year: 2008, id: 4 },
//   { title: '12 Angry Men', year: 1957, id: 5 },
//   { title: "Schindler's List", year: 1993, id: 6 },
//   { title: 'Pulp Fiction', year: 1994, id:7 },
// ];

    return (
        <FormControl fullWidth 
            error={error}
        >
            <InputLabel shrink 
                sx={{
                    fontSize: 22, 
                    fontWeight: 600,
                    marginLeft: -1.5,
                }} 
                htmlFor="input-field"
            >
                {"Skills"}
            </InputLabel>
            <Autocomplete
                multiple
                id="tags-filled"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                filterSelectedOptions
                renderTags={(value, getTagProps) =>
                    // console.log("value", value) &&
                    value.map((option, index) => (
                        <Box key={index} sx={{position: "relative"}}>
                            <Chip 
                                // avatar={
                                // }
                                variant="outlined" 
                                label={option.title} 
                                key={index} 
                                {...getTagProps({ index })}
                            />                            
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}
                                style={{
                                    position: "absolute",
                                    bottom: 0,
                                    right: 0
                                }}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem >My account</MenuItem>
                                <MenuItem >Logout</MenuItem>
                            </Menu>
                        </Box>
                    ))
                }
                onChange={(event, value) => onChangeAutocomplete(event, value)}
                // renderTags={(value, getTagProps) =>
                //   value.map((option, index) => (
                //     <Chip variant="outlined" label={option} {...getTagProps({ index })} key={index}/>
                //   ))
                // }
                renderInput={(params) => (
                    <StyledInput
                        {...params}
                        // label="Skills"
                        sx={{marginTop: 3, mb: 0.5}}
                        placeholder="Skills"
                        fullWidth
                    />
                )}
            />
        </FormControl>
    );
}
