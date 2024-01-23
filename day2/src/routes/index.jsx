import MainLayout from '@layouts/MainLayout';
import Bookmarks from '@pages/Bookmarks';
import DetailPost from '@pages/DetailPost';
import Home from '@pages/Home';
import NewJourney from '@pages/NewJourney';
import NotFound from '@pages/NotFound';
import Profile from '@pages/Profile';

const routes = [
  {
    path: '/',
    name: 'Home',
    protected: false,
    component: Home,
    layout: MainLayout,
  },
  {
    path: '/bookmark',
    name: 'Bookmark',
    protected: false,
    component: Bookmarks,
    layout: MainLayout,
  },
  {
    path: '/profile',
    name: 'Profile',
    protected: false,
    component: Profile,
    layout: MainLayout,
  },
  {
    path: '/newjourney',
    name: 'New Journey',
    protected: false,
    component: NewJourney,
    layout: MainLayout,
  },
  {
    path: '/:postid',
    name: 'Detail Post',
    protected: false,
    component: DetailPost,
    layout: MainLayout,
  },
  { path: '/notfound', name: 'Not Found', component: NotFound, layout: MainLayout, protected: false },
];

export default routes;
