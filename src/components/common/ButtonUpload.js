import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import { ThemeContext } from '../../contexts/useThemeContext';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { AlertContext } from '../../contexts/useAlertContext';
import { MAXIMO_TAMANIO_BYTES } from '../../constantes';
import LogoutIcon from '@mui/icons-material/Logout';

const Input = styled('input')({
    display: 'none',
});

  
export default function ButtonUpload({
    setImagen,
    imagen,
    title,
    photo,
    type,
}) {
    const { theme } = useContext(ThemeContext);
    const { alertError, alertWarning, alertSuccess } = useContext(AlertContext);
    const base64 = (e) =>{
        let documentos = []
        Array.from(e.files).forEach(archivo => {
            if (archivo.size > MAXIMO_TAMANIO_BYTES){  
                alertError('', "The maximum size is 10 MB");
                return e.value = "";
            }
            let reader = new FileReader();
            reader.readAsDataURL(archivo);
            reader.onload = function(){
                let base64 = reader.result;  
                if (photo){
                    setTimeout(() => {
                        setImagen([{ base64: base64}])
                      }, 1000);
                }else{
                    setTimeout(() => {
                        setImagen([...imagen, { base64: base64}])
                      }, 1000);
                }
                // return documentos.push({ base64: base64})
            }           
        }) 
    }
    return (
        <Stack direction="row" alignItems="center" spacing={2} > 
            <label htmlFor="contained-button-file">
                <Input 
                    accept={type} 
                    id="contained-button-file" 
                    type="file"                     
                    onChange={(e) => {base64(e.target, true)}} 
                    // multiple={multiple}
                />
                <Button 
                    component="span"
                    variant="outlined"
                    startIcon={<LogoutIcon sx={{color: theme.colorLabel, transform: "rotate(270deg)"}}/>}
                    sx={{
                        height: 45, 
                        borderRadius: 2, 
                        color: theme.colorLabel,
                        border: `1px solid ${theme.grayInput}`,                  
                        textTransform: "none",
                        px: 4,
                        '&:hover':{
                            border: `1px solid ${theme.grayInput}`,
                        }
                    }}
                >
                    {title}
                </Button>
            </label>
        </Stack>
    )
}
