
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact.js";
import RestauranrMenu from "./components/RestauranrMenu.js";


const AppLayout = () => {
    return (
        <div className="container">
            <Header />
            <Outlet />
            {/* JSX Comments */}
        </div>
    )
}

const Grocery = lazy(() => import('./components/Grocery.js'));
const About = lazy(() => import('./components/About.js'));

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
                element: (
                    <Suspense>
                        <About fallback={<h1>Loading..........</h1>} />
                    </Suspense >
                )
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/grocery',
                element: (
                    <Suspense>
                        <Grocery fallback={<h1>Loading.........</h1>} />
                    </Suspense>
                )
            },
            {
                path: '/resta/:resId',
                element: <RestauranrMenu />
            }
        ],
        errorElement: <Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);