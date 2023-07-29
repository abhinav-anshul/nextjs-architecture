import Typography from '@mui/material/Typography';
import { ITypographyProps } from '.';

export default function UiTypography(props: ITypographyProps) {
  return (
    <Typography
      style={{ fontFamily: 'IRANSans' }}
      variant={props.variant}
      color={props.color}
    >
      {props.text}
    </Typography>
  );
}

// Usage
{
  /* <UiTypography variant="h1" color="primary" text="Hello, World!" /> */
}
