import { Center } from "@chakra-ui/react";
import { DetailedHTMLProps } from "react";

import SwitchItem from "./SwitchItem";

type MainProps = DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

export default function Main(props: MainProps) {
    return (
        <main {...props}>
            <Center>
                <SwitchItem></SwitchItem>
            </Center>
        </main>
    );
}
