import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Details from "../layouts/Details";
import ChefDetails from "../Pages/Details/chefDetails/chefDetails";
export  const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:() => fetch('Chefs_Name.json')
            }
        ]
    },
    {
        path:'/details',
        element:<Details></Details>,
        children:[
            {
                path:'/details',
                element:<ChefDetails></ChefDetails>
            }
        ]
    }
  ])