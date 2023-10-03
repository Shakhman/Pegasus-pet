import { useMemo, useState } from 'react';

export default function useTheme() {
  const [, setMode] = useState<'light' | 'dark'>('light');
  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    },
  }), []);

  return {
    mode: colorMode
  };
}
