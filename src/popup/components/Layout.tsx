import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

export const Layout = ({ children }: { children?: React.ReactNode }) => {
    return (
        <div className="flex justify-center border border-double bg-base-100 px-4">
            <div className="flex flex-col" data-gaming_gundai="true">
                <Header></Header>
                <Main>{children}</Main>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Layout;
