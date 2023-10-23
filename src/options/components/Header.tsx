import { Menu, Navbar } from "react-daisyui";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header({ className }: { className?: string }) {
    return (
        <header className={className}>
            <Navbar className="bg-base-300 child-all:text-xl">
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
            <Menu horizontal>
                <Menu.Item>
                    <Link to="/">Settings</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/about">About</Link>
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
