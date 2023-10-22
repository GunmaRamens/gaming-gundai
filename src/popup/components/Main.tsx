import { DetailedHTMLProps } from "react";

import { Switches } from "../../components/Switches";

type MainProps = DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

export default function Main(props: MainProps) {
    return (
        <main {...props}>
            <Switches className="w-full justify-center child:w-1/2 child:text-center" />
        </main>
    );
}
