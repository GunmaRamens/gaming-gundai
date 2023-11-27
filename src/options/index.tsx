import "@/styles/popup.css";
import "@/styles/tailwind.css";
import "@/styles/gaming.scss";

import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import Layout from "./components/Layout";

function Options() {
    return (
        <HashRouter>
            <Layout />
        </HashRouter>
    );
}

//window.onload = () =>
/*
Browser.runtime.onMessage.addListener((message) => {
    console.log("message", message);
    if (message === "reload") {
        location.reload();
    }
    //return true;
});
*/

const rootElement = document.getElementById("options-root");
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<Options />);
}
