import { Center } from "@chakra-ui/react";
import { DetailedHTMLProps } from "react";

type MainProps = DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

export default function Main(props: MainProps) {
    return (
        <Center>
            <main {...props}>
                <p>Popup</p>
            </main>
        </Center>
    );
}
