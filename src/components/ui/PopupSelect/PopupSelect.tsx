import { useEffect, useState, ReactNode } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import PopupState, { bindTrigger, bindMenu, Props as PopupProps } from 'material-ui-popup-state';

export type MenuItems = {
  value: 'month' | 'year',
  text: string,
}

type Props = {
  items: MenuItems[];
  handleSelectedMenuItem: (item: 'month' | 'year') => void;
  startIcon?: ReactNode;
}
export default function PopupSelect(props: Props) {
  const { items, handleSelectedMenuItem, startIcon = null } = props;
  const [selectedItem, setSelectedItem] = useState<MenuItems>({ value: '', text: '' });

  const onItemClick = (item: MenuItems, popupState: PopupProps['parentPopupState']) => {
    setSelectedItem(item);
    handleSelectedMenuItem(item.value);
    popupState!.close();
  };

  useEffect(() => {
    setSelectedItem(items[0]);
  }, []);

  return (
    <PopupState variant="popover">
      {(popupState) => (
        <>
          <Button sx={{ borderRadius: '7px' }} startIcon={startIcon} variant="text" color="secondaryLight" size='large' {...bindTrigger(popupState)}>
            {selectedItem.text}
          </Button>
          <Menu {...bindMenu(popupState)}>
            {items.map(item => (
              <MenuItem key={item.value} onClick={() => onItemClick(item, popupState)}>{item.text}</MenuItem>
            ))}
          </Menu>
        </>
      )}
    </PopupState>
  );
}
