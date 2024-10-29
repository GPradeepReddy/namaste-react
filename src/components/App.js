
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./Contact.js";
import About from "./About.js";
import RestauranrMenu from "./RestauranrMenu.js";

const AppLayout = () => {
    return (
        <div className="container">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/resta/:resId',
                element: <RestauranrMenu />
            }
        ],
        errorElement: <Error/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>);