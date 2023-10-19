import "/styles/popup.css";
import "/styles/tailwind.css";
import "/styles/gaming.pcss";

import { ChakraProvider } from "@chakra-ui/react";
import { createRoot } from "react-dom/client";

import Layout from "./components/Layout";

function Popup() {
    return (
        <ChakraProvider>
            <Layout></Layout>
        </ChakraProvider>
    );
}

const rootElement = document.getElementById("popup-root");
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<Popup />);
}
