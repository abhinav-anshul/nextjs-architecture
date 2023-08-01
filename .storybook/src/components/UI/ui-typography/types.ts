// @mui
// import { BoxProps, colors } from '@mui/material';

// ----------------------------------------------------------------------

export type ITypographyProps = {
  variant:
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'inherit'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2';
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | string;
  children?: Node;
  size?: 'small' | 'medium' | 'large' | string;
  sx: any;
  className: any;
  text: string;
};
