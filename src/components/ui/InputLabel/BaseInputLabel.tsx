import { PropsWithChildren } from 'react';
import { useStyles } from './BaseInputLabel.styles';
import { InputLabelProps }from '@mui/material';

type BaseInputLabelProps = InputLabelProps & PropsWithChildren;

export default function BaseInputLabel({ children, ...restProps }: BaseInputLabelProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <label {...restProps}>{children}</label>
    </div>
  );
}
