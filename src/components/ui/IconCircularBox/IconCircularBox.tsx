import { SvgIconProps } from '@mui/material';
import { useStyles } from './IconCircularBox.styles';
import { useCurrentThemeColor } from '@/hooks/useCurrentThemeColor';

export type IconCircularBoxProps = {
  Icon: (props: SvgIconProps) => JSX.Element,
  size?: 'small' | 'medium' | 'large',
  variant?: 'solid' | 'gradient'
  IconProps?: SvgIconProps,
};

export default function IconCircularBox(props: IconCircularBoxProps) {
  const { Icon, IconProps = {}, size = 'large', variant = 'solid' } = props;

  const classes = useStyles({ size, variant, Icon, IconProps });
  const iconColor = variant === 'solid'
    ? useCurrentThemeColor('primary')
    : '#FFF';

  return (
    <div className={classes.root}>
      <Icon htmlColor={iconColor} fontSize={size} {...IconProps}></Icon>
    </div>
  );
}
