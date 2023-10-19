import { Container } from "@chakra-ui/react";

import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

export const Layout = ({ children }: { children?: React.ReactNode }) => {
    return (
        <Container width="600px">
            <Header></Header>
            <Main>{children}</Main>
            <Footer></Footer>
        </Container>
    );
};

export default Layout;
