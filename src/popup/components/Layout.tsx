import { Container } from "@chakra-ui/react";

import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

export const Layout = ({ children }: { children?: React.ReactNode }) => {
    return (
        <Container width="400px" height="600px" bgColor="teal.900" color="gray.50">
            <Header></Header>
            <Main>{children}</Main>
            <Footer></Footer>
        </Container>
    );
};

export default Layout;
