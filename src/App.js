import React from 'react';
import { Provider } from 'react-redux';
import { Users, Posts } from './containers';
import { store } from './store';
import {
  createHashRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import GlobalStyle from './styles';
import 'rodal/lib/rodal.css';

const router = createHashRouter([
  {
    path: '*',
    element: <Navigate  to="users" />
  },
  {
    path: "/users/:id?/albums?",
    element: <Users />,
  },
  {
    path: "/users/:id/posts",
    element: <Posts />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
