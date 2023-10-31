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

const rootElement = document.getElementById("options-root");
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<Options />);
}
