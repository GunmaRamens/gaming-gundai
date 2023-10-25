import classNames from "classnames";
import { Route, Routes } from "react-router-dom";

import Heading from "../../components/Heading";
import About from "../pages/About";
import Thanks from "../pages/Thanks";
import Top from "../pages/Top";
import Why from "../pages/Why";

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
                <Route path="/why" Component={Why} />
                <Route path="/thanks" Component={Thanks} />
                <Route
                    path="*"
                    Component={() => {
                        return (
                            <>
                                <Heading.h1>404 Not Found</Heading.h1>
                                <p>内容は無いようです。</p>
                            </>
                        );
                    }}
                />
            </Routes>
        </main>
    );
}
