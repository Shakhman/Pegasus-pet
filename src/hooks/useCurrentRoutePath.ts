import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';

export function useCurrentRoutePath<T = string>() {
  const location = useLocation();

  const currentRoutePath = useMemo(
    () => (location.pathname.split('/')[1] || ''), [location]) as T;

  return currentRoutePath;
}