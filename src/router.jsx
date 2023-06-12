import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import { HomePage } from "./pages/HomePage/HomePage";
import { About } from "./pages/About/About";
import { Account } from "./pages/Account/Account";

import { CartPage } from "./pages/CartPage/CartPage";
import { CategoryDropdown } from "./pages/CategoryDropdown/CategoryDropdown";
import { Checkout } from "./pages/Checkout/Checkout";
import { Contact } from "./pages/Contact/Contact";
import { Error404 } from "./pages/Error404/Error404";
import { Login } from "./pages/Login/Login";
import { Product } from "./pages/Product/Product";
import { Register } from "./pages/Register/Register";
import { Wishlist } from "./pages/Wishlist/Wishlist";
import { SingleProduct } from "./pages/SingleProduct/SingleProduct";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {
                index:true,
                path:'/',
                element:<HomePage />,
            },
            {
                path:'/about',
                element:<About />,
                errorElement:<h2>ERROR!!!</h2>,
            },
            {
                path:'/account',
                element:<Account />
            },
            {
                path:'/cartPage',
                element:<CartPage />
            },
            {
                path:'/categoryDropdown',
                element:<CategoryDropdown />
            },
            {
                path:'/checkout',
                element:<Checkout />
            },
            {
                path:'/contact',
                element:<Contact />
            },
            {
                path:'/login',
                element:<Login />
            },
          
            {
                path:'/register',
                element:<Register />
            },
            {
                path:'/wishlist',
                element:<Wishlist />
            },
            {
                path:'/*',
                element:<Error404 />
            },
            {
                path:'/product',
                element:<Product />,
            },
            {
                path:'/product/:id',
                element:<SingleProduct />,
            },
        ]
    }
])