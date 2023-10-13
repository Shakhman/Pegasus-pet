import { memo } from 'react';
import { useCurrentThemeColor } from '@/hooks/useCurrentThemeColor';
import { useStyles } from './Logo.styles';

type LogoProps = {
  color?: string;
}
const Logo = (props: LogoProps) => {
  const themeColor = useCurrentThemeColor('primaryAlt');
  const { color = themeColor } = props;

  const classes = useStyles({
    color,
  });

  return (
    <div className={classes.root}>
      Pegasus UI
    </div>
  );
};

export default memo(Logo);
