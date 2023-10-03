import {
  createElement,
  useMemo,
} from 'react';
import { NavLink, useLocation } from 'react-router-dom'; 
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIconProps,
} from '@mui/material';

import { useCurrentThemeColor }  from '@/hooks/useCurrentThemeColor';

type Props = {
  name: string,
  Icon: (props: SvgIconProps) => JSX.Element,
  to: string,
}

const mainColor = 'secondaryLight';

export default function NavItem(props: Props) {
  const { Icon, name, to } = props;

  const location = useLocation();

  // TODO: refactor to useMatch from router lib
  const isActiveNav = useMemo(() => location.pathname === to, [location]);
  const currentListItemColor = useMemo(() => isActiveNav ? 'primary' : mainColor, [isActiveNav]);
  const currentItemTextColor = useMemo(() => isActiveNav ? 'primaryAlt' : mainColor, [isActiveNav]);

  const themeListItemColor = useCurrentThemeColor(currentListItemColor);
  const themeListTextColor = useCurrentThemeColor(currentItemTextColor);

  const itemTextStyles = useMemo(() => ({
    color: themeListTextColor,
    '& .MuiTypography-root': {
      fontWeight: isActiveNav ? 700 : 500
    }
  }), [isActiveNav, themeListTextColor]);
  
  const ListItemStyles = useMemo(() => ({
    color: themeListItemColor,
    borderColor: currentItemTextColor,
    borderRight: isActiveNav ? 4 : null,
    '&:hover': {
      color: themeListItemColor,
    }
  }), [isActiveNav, themeListItemColor]);

  return (
    <ListItem
      to={to}
      component={NavLink}
      disablePadding
      sx={ListItemStyles}
    >
      <ListItemButton>
        <ListItemIcon>
          {createElement(Icon, {
            htmlColor: themeListTextColor,
          })}
        </ListItemIcon>
        <ListItemText sx={itemTextStyles}>
          {name}
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
}
