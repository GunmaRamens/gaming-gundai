import "@/styles/gaming.scss";

import { DetailedHTMLProps } from "react";

type HeaderProps = DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

export default function Header(props: HeaderProps) {
    return (
        <header className="text-center" {...props}>
            <div className="my-4">
                <p className="rainbow-text text-2xl">Gaming Gunma University</p>
            </div>

            <div className="my-4">
                <p>荒牧祭で「長谷川とら」で出店します。</p>
                <p>「ゲーミング群馬大学入れました」で割引します。</p>
            </div>
        </header>
    );
}
