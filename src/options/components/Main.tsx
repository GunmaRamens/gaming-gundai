import { DetailedHTMLProps } from "react";

type MainProps = DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

export default function Main(props: MainProps) {
    return <main {...props}></main>;
}
