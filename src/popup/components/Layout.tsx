import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

export const Layout = ({ children }: { children?: React.ReactNode }) => {
    return (
        <div className="flex justify-center bg-base-100 border border-double">
            <div className="flex flex-col">
                <Header></Header>
                <Main>{children}</Main>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Layout;
