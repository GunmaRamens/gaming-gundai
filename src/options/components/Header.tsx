import { Menu, Navbar } from "react-daisyui";

export default function Header() {
    return (
        <Navbar>
            <NavbarStart />
            <NavbarCenter />
            <NavbarEnd />
        </Navbar>
    );
}

/* eslint-disable tailwindcss/no-custom-classname */
// Todo: Make rainbow-text tailwindcss compatible
function NavbarStart() {
    return (
        <Navbar.Start>
            <a className="rainbow-text daisy-btn daisy-btn-ghost text-xl normal-case">Gaming Gunma University</a>
        </Navbar.Start>
    );
}

function NavbarCenter() {
    return (
        <Navbar.Center>
            <Menu>
                <Menu.Item>
                    <a href="https://twitter.com/Hayao0819">Twitter</a>
                </Menu.Item>
            </Menu>
        </Navbar.Center>
    );
}

function NavbarEnd() {
    return <Navbar.End></Navbar.End>;
}
