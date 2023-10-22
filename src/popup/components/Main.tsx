import { DetailedHTMLProps } from "react";

import { Switches } from "../../components/Switches";

type MainProps = DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

export default function Main(props: MainProps) {
    return (
        <main {...props}>
            <Switches />
        </main>
    );
}
