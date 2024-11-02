
import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact.js";
import RestauranrMenu from "./components/RestauranrMenu.js";
import userContext from "./utils/userContext.js";
import appStore from "./utils/appStore.js";
import { Provider } from "react-redux";
import Cart from "./components/Cart.js";


const AppLayout = () => {

    const [userName, setUserName] = useState("Pradee Reddy");

    return (
        <Provider store={appStore}>
            <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
                <div className="container">
                    <Header />
                    <Outlet />
                    {/* JSX Comments */}
                </div>
            </userContext.Provider>
       </Provider>
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
                path: '/cart',
                element: <Cart />
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