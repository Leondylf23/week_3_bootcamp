import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";

import Home from './pages/Home';
import LoadingContainer from './components/LoadingContainer';
import store from './configureStore';

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} fallbackElement={<LoadingContainer isFullHeight={true} />} />
    </Provider>
  </React.StrictMode>,
)
