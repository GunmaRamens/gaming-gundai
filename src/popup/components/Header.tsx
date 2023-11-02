import "@/styles/gaming.scss";

import { DetailedHTMLProps } from "react";
import { Collapse } from "react-daisyui";

type HeaderProps = DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

export default function Header(props: HeaderProps) {
    return (
        <header className="text-center" {...props}>
            <div className="my-4">
                <p className="rainbow-text text-2xl">Gaming Gunma University</p>
            </div>

            <Advertisement />
        </header>
    );
}

function Advertisement() {
    return (
        <>
            <Collapse checkbox icon="arrow" className="my-5 bg-neutral-focus">
                <Collapse.Title className="flex text-lg">
                    <span className="rainbow-text font-serif italic">NEW</span>
                    <span className="grow text-center">荒牧祭について</span>
                </Collapse.Title>
                <Collapse.Content>
                    <p>荒牧祭で「長谷川とら」で出店します。</p>
                    <p>「ゲーミング群馬大学入れました」で割引します。</p>
                </Collapse.Content>
            </Collapse>
        </>
    );
}
