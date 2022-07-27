import React, { useState, useContext, useEffect } from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { styled, alpha } from "@mui/material/styles";
import { Box, Menu, MenuItem, Dialog } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { ThemeContext } from "../../contexts/useThemeContext";

const StyledInput = styled(TextField)(({ theme, error }) => ({
  "label + &": {
    marginTop: theme.spacing(2.6),
  },
  "& .MuiInputBase-input": {
    borderRadius: 8,
    position: "relative",
    fontSize: 16,
    padding: "12px 12px",
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: error ? `1px solid ${theme.palette.error.main}` : "#D9D9D9",
    },
    "&.Mui-focused fieldset": {
      boxShadow: error
        ? `${alpha(theme.palette.error.main, 0.25)} 0 0 0 0.2rem`
        : `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: error
        ? theme.palette.error.main
        : theme.palette.primary.main,
    },
    "& fieldset": {
      border: error
        ? `1px solid ${theme.palette.error.main}`
        : "1px solid #D9D9D9",
      borderRadius: 8,
    },
  },
  "& .MuiSvgIcon-root": {},
}));
export default function CustomAutocomplete({ 
  error, 
  label,
  defaultSkills,
  onChangeSkills,
  setErrorSkills
}) {
  // console.log("defaultSkills", defaultSkills)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [skills, setSkills] = useState([]);
  const { theme } = useContext(ThemeContext);
  const open = Boolean(anchorEl);
  // const [selected, setSelected] = useState([]);
  const [idSkill, setIdSkill] = useState(null);
  const [top100Films, setTop100Films] = useState([
    { title: "Figma", year: 1994, id: 1 },
    { title: "JavaScript1", year: 1972, id: 2 },
    { title: "JavaScript: Part II", year: 1974, id: 3 },
    { title: "Figma1", year: 1994, id: 4 },
    { title: "JavaScript", year: 1972, id: 5 },
    { title: "JavaScript: Part II1", year: 1974, id: 6 },
  ]);

  const level = [
    {
      id: 0,
      label: "Basic",
      color: "gray",
    },
    {
      id: 1,
      label: "Intermediate",
      color: "blue",
    },
    {
      id: 2,
      label: "Advanced",
      color: "yellow",
    },
  ];


  useEffect(() => {
    if (defaultSkills.length > 0 ){
      setSkills((old) => [...defaultSkills]);
    }
  }, [defaultSkills])

  useEffect(() => {
    onChangeSkills(skills);
  }, [skills])
  console.log("skilss", skills)
  
  
  const onChangeAutocomplete = (event, value) => {
    console.log("paso2", skills)
    if (value.length > skills.length) {
      setTimeout(() => {
        const element = document.getElementById(
          `step-2-skill-${value.length - 1}`
        );
        setAnchorEl(element);
      }, 100);
      setIdSkill(value[value.length - 1].id);
      // setSelected([...selected, value[value.length - 1]]);
      setSkills([...skills, value[value.length - 1]]);
      setErrorSkills(false);
      return;
    }
    const items = value.map(x => x.id);
    // setSelected(selected.filter(x => items.includes(x.id)))
    setSkills(skills.filter(x => items.includes(x.id)));

  };

  const handleLevel = (id) => {
    console.log("entre")
    const updatedSkills = skills.map((type) => {
      return type.id === idSkill ? { ...type, level: level[id] } : { ...type };
    });
    // setSelected(updatedSkills);
    setSkills(updatedSkills);
    setAnchorEl(null);
  };


  return (
    <Box style={{ position: "relative" }}>
      <FormControl fullWidth error={error}>
        <InputLabel
          shrink
          sx={{
            fontSize: 20,
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
          defaultValue={defaultSkills}
          renderTags={(value, getTagProps) =>
            skills && skills.map((option, index) => {
              return (
                <Chip
                  avatar={
                    <span
                      style={{
                        backgroundColor: option.level && option.level.color,
                        width: 15,
                        height: 15,
                      }}
                    ></span>
                  }
                  variant="outlined"
                  label={option.title}
                  key={index}
                  {...getTagProps({ index })}
                  id={`step-2-skill-${index}`}
                />
              );
            })
          }
          onChange={(event, value) => onChangeAutocomplete(event, value)}
          renderInput={(params) => (
            <StyledInput
              {...params}
              sx={{ marginTop: 3, mb: 0.5 }}
              placeholder="Skills"
              fullWidth
              error={error}
            />
          )}
        />
        {error ? (
            <Box
              sx={{ display: 'flex', justifyContent: 'flex-start', fontSize: 12, color:theme.colorError }}
            >
              Required
            </Box>
          ) : null}
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            "aria-labelledby": "lock-button",
            role: "listbox",
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          {level.map((lev, index) => {
            return (
              <MenuItem
                onClick={() => {
                  handleLevel(lev.id);
                }}
                key={index}
              >
                {lev.label}
              </MenuItem>
            );
          })}
        </Menu>
      </FormControl>
    </Box>
  );
}