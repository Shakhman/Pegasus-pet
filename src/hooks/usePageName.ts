import { capitalizeString } from '@/utils/capitalizeString';
import { useCurrentRoutePath } from './useCurrentRoutePath';

type Titles = '' | 'market' | 'profile' | 'sign-in';

const pageTitleMapping: Record<Titles, string> = {
  '': 'Main Dashboard',
  market: 'NFT Marketplace',
  profile: 'Profile',
  'sign-in': 'Sign-In'  
};

const pageBreadcrumbMapping: Record<Titles, string> = {
  '': 'Dashboard',
  market: 'NFT Marketplace',
  profile: 'Profile',
  'sign-in': 'Sign-In' 
};


export function usePageName() {
  const currentPageTitle = useCurrentRoutePath<Titles>();

  return {
    title: pageTitleMapping[currentPageTitle],
    breadcrumb: capitalizeString(pageBreadcrumbMapping[currentPageTitle])
  };
}