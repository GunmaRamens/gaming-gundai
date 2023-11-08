import classNames from "classnames";
import React from "react";
import { Route, Routes } from "react-router-dom";

import About from "../pages/About";
import Thanks from "../pages/Thanks";
import Top from "../pages/Top";
import Wanted from "../pages/Wanted";
import Why from "../pages/Why";
import NotFound from "./404";

/*
const About = React.lazy(() => import( "../pages/About"));
const Thanks = React.lazy(() => import("../pages/Thanks"));
const Top = React.lazy(() => import("../pages/Top"));
const Why = React.lazy(() => import("../pages/Why"));
const NotFound = React.lazy(() => import("./404"));
*/

export default function Main(props: { className?: string }) {
    return (
        <main {...props} className={classNames(props.className, "w-4/5 mx-auto mt-8")}>
            <Routes>
                <Route path="/" Component={Top} />
                <Route path="/about" Component={About} />
                <Route path="/why" Component={Why} />
                <Route path="/thanks" Component={Thanks} />
                <Route path="/wanted" Component={Wanted} />
                <Route path="*" Component={NotFound} />
            </Routes>
        </main>
    );
}
