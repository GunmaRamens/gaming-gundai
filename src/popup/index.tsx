import "/styles/popup.css";

import { createRoot } from "react-dom/client";

import Popup from "./popup";

const rootElement = document.getElementById("popup-root");
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<Popup />);
}
