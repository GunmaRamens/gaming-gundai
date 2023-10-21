import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

export default function Layout({ children }: { children?: React.ReactNode }) {
    return (
        <div className="h-screen">
            <Header />
            <Main>{children}</Main>
            <Footer />
        </div>
    );
}
