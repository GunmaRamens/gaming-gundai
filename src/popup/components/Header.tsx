import { DetailedHTMLProps } from "react";

type HeaderProps = DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

export default function Header(props: HeaderProps) {
    return (
        <header className="text-center" {...props}>
            <div className="my-4">
                <p className="rainbow-text text-4xl">Gaming Gunma University</p>
            </div>
            <div className="my-4">
                <p className="text-2xl italic">Configure it!!</p>
            </div>
        </header>
    );
}
