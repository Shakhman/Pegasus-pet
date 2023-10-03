import HomeIcon from '../../Icons/HomeIcon';
import BasketIcon from '../../Icons/BasketIcon';
import ProfileIcon from '../../Icons/ProfileIcon';
import SignInIcon from '../../Icons/SignInIcon';

import NavItem from '../NavItem/NavItem';
import { SvgIconProps } from '@mui/material';

type NavItemsList = {
  name: string,
  Icon: (props: SvgIconProps) => JSX.Element,
  to: string,
}

// TODO: Lazy load icons https://dev.to/ayo_tech/how-to-use-components-dynamically-in-react-2gmk
const navItemsList: NavItemsList[] = [
  { name: 'Dashboard', Icon: HomeIcon, to: '/' }, 
  { name: 'NFT Marketplace', Icon: BasketIcon, to: '/market' },
  { name: 'Profile', Icon: ProfileIcon, to: '/profile' },
  { name: 'Sign In', Icon: SignInIcon, to: '/sign-in' },
];

export default function NavItems() {
  return (
    <>
      {navItemsList.map((navItemProps, index) => (
        <NavItem {...navItemProps} key={index}></NavItem>
      ))}
    </>
  );
}
