import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from '../layout';
import { Home } from '../../pages/home';



export const AppRouter: FC = () => {

    const router = createBrowserRouter([
        {
          path: '/',
          element: (
            <>          
                <Layout />
            </>           
          ),
          children: [
            {
              path: '',
              element: <Home />,
            },
          ],
        },
      ]);

  return (    
    <RouterProvider router={router} />     
  )
}
