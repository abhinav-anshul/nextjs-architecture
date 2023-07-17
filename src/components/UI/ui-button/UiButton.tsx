import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { IButtonProps } from './';




export default function UiButton(props : IButtonProps) {
  return (
    // <Button variant="contained" color={props.color} size={props.size} >
    //    {props.label}
    // </Button>
    <Stack direction="row" spacing={2}>
      
      <Button {...props} >
         {props.label}
      </Button>
   
    </Stack>
  );
}
