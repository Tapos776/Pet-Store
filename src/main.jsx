import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Displays from './Components/Displays/Displays';
import Pets from './Components/Pages/Pets/Pets';
import AboutUs from './Components/Pages/AboutUs/AboutUs';
import Campaigns from './Components/Pages/Campaigns/Campaigns';
import Contacts from './Components/Pages/Contacts/Contacts';
import Shop from './Components/Pages/Shop/Shop';
import Register from './Components/Pages/Register/Register';
import Login from './Components/Pages/Login/Login';
import AuthProvider from './Components/Route/AuthProvider/AuthProvider';
import PrivateRouter from './Components/Route/PrivateRouter/PrivateRouter';
import CartView from './Components/Pages/Shop/CartView';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Displays></Displays>,
      },
      {
        path:"/pets",
        element:<PrivateRouter><Pets></Pets></PrivateRouter>,
        
      },
      {
        path:"/aboutUs",
        element:<PrivateRouter><AboutUs></AboutUs></PrivateRouter>,
      },
      {
        path:"/campaign",
        element:<Campaigns></Campaigns>,
      },
      {
        path:"/contacts",
        element:<Contacts></Contacts>,
      },
      {
        path:"/shop",
        element:<PrivateRouter><Shop></Shop></PrivateRouter>,
        loader:()=> fetch('http://localhost:5000/pet')
      },
      {
        path:"/shop/:id",
        element:<CartView></CartView>,
        loader:({params})=>fetch(`http://localhost:5000/pet/${params.id}`)
      },
      {
        path:"/register",
        element:<Register></Register>,
      },
      {
        path:"/login",
        element:<Login></Login>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </StrictMode>,
)
