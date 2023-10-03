import Main from '@/views/Main/Main';
import Market from '@/views/Market/Market';
import Profile from '@/views/Profile/Profile';
import SignIn from '@/views/SignIn/SignIn';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import MainLayout from '@/components/layouts/MainLayout';

export type ChildRoute = {
  name: string,
  title: string,
  path: string,
  component:  () => JSX.Element,
  isPublic?: boolean,
  routes?: ChildRoute[]
}

export type RouteData = {
  layout: () => JSX.Element,
  routes: ChildRoute[],
  isAuth: boolean,
}

export const routes: RouteData[] = [{
  layout: DashboardLayout,
  isAuth: true,
  routes: [
    {
      name: 'main',
      title: 'Main page',
      component: Main,
      path: '/',
    },
    {
      name: 'market',
      title: 'Market page',
      component: Market,
      path: '/market',
    },
    {
      name: 'profile',
      title: 'Profile page',
      component: Profile,
      path: '/profile',
    },
  ]
}, {
  layout: MainLayout,
  isAuth: false,
  routes: [
    {
      name: 'sign-in',
      title: 'Sign In page',
      component: SignIn,
      path: '/sign-in',
    },
  ]
}];