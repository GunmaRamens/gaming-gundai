import { DetailedHTMLProps } from "react";

import SwitchItem from "./SwitchItem";

type MainProps = DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

export default function Main(props: MainProps) {
    return (
        <main {...props}>
            <div>
                <SwitchItem></SwitchItem>
            </div>
        </main>
    );
}
