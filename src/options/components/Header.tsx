import { Menu, Navbar } from "react-daisyui";
import { FaGithub, FaInfo, FaTwitter } from "react-icons/fa";
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

function NavbarStart() {
    return <Navbar.Start></Navbar.Start>;
}

function NavbarCenter() {
    return (
        <Navbar.Center>
            <Link to="/" className="rainbow-text btn btn-ghost normal-case">
                Gaming Gunma University
            </Link>
        </Navbar.Center>
    );
}

function NavbarEnd() {
    return (
        <Navbar.End>
            <Menu horizontal>
                <Menu.Item>
                    <Link to="/about">
                        <FaInfo />
                    </Link>
                </Menu.Item>
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
