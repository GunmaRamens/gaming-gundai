import "/styles/popup.css";
import "/styles/tailwind.css";
import "/styles/gaming.scss";

import { createRoot } from "react-dom/client";

import Layout from "./components/Layout";

function Popup() {
    return <Layout></Layout>;
}

const rootElement = document.getElementById("popup-root");
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<Popup />);
}
