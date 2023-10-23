import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

export default function Layout({ children }: { children?: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <Main className="grow">{children}</Main>
            <Footer />
        </div>
    );
}
