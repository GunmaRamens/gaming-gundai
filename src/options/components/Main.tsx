import { DetailedHTMLProps } from "react";

type MainProps = DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

import classNames from "classnames";

export default function Main(props: MainProps) {
    return (
        <main {...props} className={classNames(props.className, "w-2/3 mx-auto mt-8")}>
            <div className="">{props.children}</div>
        </main>
    );
}
