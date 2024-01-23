import MainLayout from '@layouts/MainLayout';
import Bookmarks from '@pages/Bookmarks';

import Home from '@pages/Home';
import NotFound from '@pages/NotFound';

const routes = [
  {
    path: '/',
    name: 'Home',
    protected: false,
    component: Home,
    layout: MainLayout,
  },
  {
    path: '/bookmarks',
    name: 'Bookmarks',
    protected: true,
    component: Bookmarks,
    layout: MainLayout,
  },
  { path: '*', name: 'Not Found', component: NotFound, layout: MainLayout, protected: false },
];

export default routes;
