// @mui
// import { BoxProps, colors } from '@mui/material';

// ----------------------------------------------------------------------


export type IButtonProps = {
    label : string,
    size : 'small'| 'medium'| 'large'| string,
    color : 'inherit'| 'primary' | 'secondary'| 'success' | 'error' | 'info' | 'warning'| string,
    variant? : 'contained'|'outlined'| 'text'| string,
    onClick?: () => void;
    sx : Array<Function | object| boolean>| Function | object,
    className : any
  }
  