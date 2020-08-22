import React from 'react';
import { Button, Box } from '@material-ui/core';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

interface InputUploadImageProps {
    register: any;
}


const InputUploadImage: React.FC<InputUploadImageProps> = (props) => {
    const [fileState, setFileState] = React.useState<string | ArrayBuffer | null>();

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();
        
        if (e.target.files) {
        const file = e.target.files[0];

         reader.onloadend = () => {
          setFileState(reader.result);
         };

         reader.readAsDataURL(file);   
        }

    };
 
 return (
     <Box 
     display="flex"
     flexDirection="column"
     justifyContent="center"
     alignItems="center">
    {fileState ?  <img alt="photo product" style={{borderRadius: '50%'}} width="150" height="150" src={`${fileState}`} /> : ''}
    <label htmlFor="image">
        <input
         style={{ display: 'none' }}
         id="image"
         name="image"
         accept="image/*"
         ref={props.register}
         type="file"
         onChange={handleFileUpload}
        />
        <Button color="secondary" variant="contained" component="span">
         Upload Image <PhotoCameraIcon />
        </Button>
     </label>
     </Box>
 )
}

export default InputUploadImage;
