import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import { IButtonProps } from './type';


// interface ButtonProps {
//   primary?: boolean;
//   backgroundColor?: string;
//   size?: 'small' | 'medium' | 'large';
//   label?: string;
//   onClick?: () => void;
// }
export type IButtonProps = {
  label : string,
  size : string,
  color : string,

}


export function ColorButtons(props : IButtonProps) {
  return (
    // <Button variant="contained" color={props.color} size={props.size} >
    //    {props.label}
    // </Button>
    <Stack direction="row" spacing={2}>
      
      <Button {...props} variant="contained">
         {props.label}
      </Button>
   
    </Stack>
  );
}
