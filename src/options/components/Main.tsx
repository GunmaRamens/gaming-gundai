import classNames from "classnames";
import { Route, Routes } from "react-router-dom";

import About from "../pages/About";
import Thanks from "../pages/Thanks";
import Top from "../pages/Top";
import Why from "../pages/Why";
import NotFound from "./404";

export default function Main(props: { className?: string }) {
    return (
        <main {...props} className={classNames(props.className, "w-4/5 mx-auto mt-8")}>
            <Routes>
                <Route path="/" Component={Top} />
                <Route path="/about" Component={About} />
                <Route path="/why" Component={Why} />
                <Route path="/thanks" Component={Thanks} />
                <Route path="*" Component={NotFound} />
            </Routes>
        </main>
    );
}
