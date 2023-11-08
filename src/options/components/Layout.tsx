import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

export default function Layout() {
    return (
        <div className="flex min-h-screen flex-col" data-gaming_gundai="true">
            <Header />
            <Main className="grow" />
            <Footer />
        </div>
    );
}
