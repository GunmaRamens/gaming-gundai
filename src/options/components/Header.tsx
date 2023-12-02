import { Menu, Navbar } from "react-daisyui";
import { FaCog, FaGithub, FaInfo, FaTwitter } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import { OtherStorage } from "@/class/Storage/other";

//import StorageTool from "../../../lib/class/Storage/legacybrowser";

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
    const reactLocation = useLocation();
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (reactLocation.pathname === "/") {
            e.preventDefault();
            if (e.detail <= 3) return;

            OtherStorage.set({ "show-hidden-option": true });
            location.reload();
        }
    };

    return (
        <Navbar.Center>
            <Link to="/" className="rainbow-text btn btn-ghost normal-case" onClick={handleClick}>
                Gaming Gunma University
            </Link>
        </Navbar.Center>
    );
}

function NavbarEnd() {
    return (
        <Navbar.End>
            <Menu horizontal className="hidden sm:flex">
                <Menu.Item>
                    <Link to="/about">
                        <FaInfo />
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/">
                        <FaCog />
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
