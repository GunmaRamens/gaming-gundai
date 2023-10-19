export const Layout = ({ children }: { children?: React.ReactNode }) => {
    return (
        <>
            <header>
                <h1>Popup</h1>
            </header>
            <main>{children}</main>
            <footer></footer>
        </>
    );
};

export default Layout;
