import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../layouts/Layout";

import App from "../App";
import RegisterForm from "../components/RegisterForm";
import Recipes from "../pages/Recipes/Recipes";

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
                element: <RegisterForm /> ,
                //loader: () => authLoader()
            },
            {
                path: '/recipes',
                element: <Recipes/>,
                
            },

           
        ]
      },
    ]
)