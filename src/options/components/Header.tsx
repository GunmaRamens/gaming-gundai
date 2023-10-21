import { Menu, Navbar } from "react-daisyui";
import { FaGithub, FaTwitter } from "react-icons/fa";

export default function Header() {
    return (
        <header>
            <Navbar className="bg-base-300 child-all:text-2xl">
                <NavbarStart />
                <NavbarCenter />
                <NavbarEnd />
            </Navbar>
        </header>
    );
}

/* eslint-disable tailwindcss/no-custom-classname */
// Todo: Make rainbow-text tailwindcss compatible
function NavbarStart() {
    return (
        <Navbar.Start>
            <a className="rainbow-text daisy-btn daisy-btn-ghost normal-case">Gaming Gunma University</a>
        </Navbar.Start>
    );
}

function NavbarCenter() {
    return (
        <Navbar.Center>
            <Menu>
                <Menu.Item>
                    <p>Settings</p>
                </Menu.Item>
            </Menu>
        </Navbar.Center>
    );
}

function NavbarEnd() {
    return (
        <Navbar.End>
            <Menu horizontal>
                <Menu.Item>
                    <a href="https://twitter.com/Hayao0819">
                        <FaTwitter />
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="https://github.com/Hayao0819/gaming-gundai">
                        <FaGithub />
                    </a>
                </Menu.Item>
            </Menu>
        </Navbar.End>
    );
}
