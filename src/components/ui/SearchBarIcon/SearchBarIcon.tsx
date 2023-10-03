import { PropsWithChildren } from 'react';
import { useStyles } from './SearchBarIcon.styles';

type SearchBarIconProps = PropsWithChildren<{
    onIconClick: () => void;
}>

export default function SearchBarIcon(props: SearchBarIconProps) {
  const classes = useStyles();

  return (
    <div className={classes.root} onClick={props.onIconClick}>
      {props.children}
    </div>
  );
}
