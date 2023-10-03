import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Grid } from '@mui/material';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LogoutOutlined from '@mui/icons-material/LogoutOutlined';

import SearchBarIcon from '../SearchBarIcon/SearchBarIcon';
import Search from '../Search/Search';

import { AuthContext } from '@/contexts/AuthContext';
import { ThemeModeContext } from '@/contexts/ThemeModeContext';

import { useCurrentThemeColor } from '@/hooks/useCurrentThemeColor';

export default function SearchBar() {
  const useThemeMode = useContext(ThemeModeContext);
  const navigate = useNavigate();
  const { setIsAuth } = useContext(AuthContext);

  const onSearch = (s: string) => {
    console.log(s);
  };

  const iconsList = [
    {
      Icon: NotificationsOutlinedIcon,
      onClick: () => {
        console.log('NotificationsOutlinedIcon click');
      },
    },
    {
      Icon: DarkModeOutlinedIcon,
      onClick: () => {
        useThemeMode.toggleColorMode();
      },
    },
    {
      Icon: LogoutOutlined,
      onClick: () => {
        setIsAuth(false);
        navigate('sign-in');
      },
    },
  ];

  return (
    <Grid
      container
      direction="row"
      gap="10px"
      alignItems="center"
      sx={{
        background: useCurrentThemeColor('box'),
        p: 1,
        borderRadius: 30,
      }}
    >
      <Grid item>
        <Search onSearch={onSearch}></Search>
      </Grid>
      {iconsList.map(({ Icon, onClick }, index) => (
        <Grid item key={index}>
          <SearchBarIcon onIconClick={onClick}>
            <Icon />
          </SearchBarIcon>
        </Grid>
      ))}
      <Grid item>
        <Avatar sx={{ width: 40, height: 40 }}>MS</Avatar>
      </Grid>
    </Grid>
  );
}
