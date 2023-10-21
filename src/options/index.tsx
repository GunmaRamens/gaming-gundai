import "/styles/popup.css";
import "/styles/tailwind.css";
import "/styles/gaming.scss";

import { createRoot } from "react-dom/client";

import Layout from "./components/Lauout";

function Options() {
    return <Layout />;
}

const rootElement = document.getElementById("options-root");
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<Options />);
}
