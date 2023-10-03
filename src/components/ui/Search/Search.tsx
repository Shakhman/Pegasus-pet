import { InputAdornment,  TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useCurrentThemeColor } from '@/hooks/useCurrentThemeColor';
import SearchIcon from '@mui/icons-material/Search';

export type SearchProps = {
  onSearch: (val: string) => void
}

export default function Search(props: SearchProps) {
  const { onSearch } = props;
  const [search, setSearch] = useState('');

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    onSearch(search);
  };
    
  return (
    <TextField
      type="search"
      placeholder="Search"
      value={search}
      sx={{
        border: 'none',
        '& .MuiOutlinedInput-notchedOutline': {
          border: 0,
        },
        '& .MuiInputBase-root': {
          width: 214,
          background: useCurrentThemeColor('secondary'),
          borderRadius: 30,
          px: '20px',
          fontSize: '14px',
        },
        '& .MuiInputBase-input': {
          p: '10px',
          color: useCurrentThemeColor('mainText'),
        },
        '& .MuiSvgIcon-root': {
          color: useCurrentThemeColor('secondaryText'),
        }
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="end">
            <SearchIcon sx={{
              width: 18,
              height: 18,
              color: useCurrentThemeColor('primaryAlt')
            }} />
          </InputAdornment>
        )
      }}
      onInput={handleSearch}
    />
  );
}
