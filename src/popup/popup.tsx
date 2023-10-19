import { ChakraProvider } from "@chakra-ui/react";

import Layout from "./components/Layout";

export default function Popup() {
    return (
        <ChakraProvider>
            <Layout></Layout>
        </ChakraProvider>
    );
}
