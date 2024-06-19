import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../layouts/Layout";

import App from "../App";

function authLoader () {
  if(!localStorage.getItem('token')) return redirect("/");
}

export const router = createBrowserRouter([
  
      {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <App/>

            },

            {
                path: '/register',
                element: '',
                //loader: () => authLoader()
            },

           
        ]
      },
    ]
)