import { createBrowserRouter } from "react-router";
import Routelayouts from "../layouts/Routelayouts";
import { Component } from "react";
import Home from "../Home/Home";
import About from "../sections/About";
// import Project from "../components/Project";
import Contact from "../sections/Contact";
import Work from "../Work/Work";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Routelayouts,
        children: [
            {
                index: true,
                Component: Home
            }
            ,
            { path: "/about", Component: About },
            { path: "/contact", Component: Contact },
            { path: "/work", Component: Work },


        ]
    },
]);