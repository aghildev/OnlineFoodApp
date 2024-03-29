import React, { lazy,Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Body from './src/components/Body';
import Footer from './src/components/Footer';
import Header from './src/components/Header';
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Error from './src/components/Error';
import RestaurantDetails from './src/components/RestaurantDetails';
import ShimmerUi from './src/components/ShimmerUi';

const Instamart = lazy(()=>import("./src/components/Instamart"))


function AppLayout() {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )

}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/about",
                element:<About/>
        
            },
            {
                path:"/contact",
                element:<Contact/>
        
            },
            {
                path:"/",
                element:<Body/>
        
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantDetails/>
        
            },
            {
                path:"/instamart",
                element:<Suspense fallback={<ShimmerUi/>}><Instamart/></Suspense>
        
            }
        ]

    },
    
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />)