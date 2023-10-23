import classNames from "classnames";
import { Route, Routes } from "react-router-dom";

import About from "../pages/About";
import Top from "../pages/Top";

export default function Main(props: { className?: string }) {
    return (
        <main {...props} className={classNames(props.className, "w-2/3 mx-auto mt-8")}>
            <Routes>
                <Route path="/" Component={Top} />
                <Route
                    path="/hoge"
                    Component={() => {
                        return (
                            <>
                                <p>Hello</p>
                            </>
                        );
                    }}
                />
                <Route path="/about" Component={About} />
            </Routes>
        </main>
    );
}
