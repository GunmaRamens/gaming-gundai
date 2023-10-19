import { Center, Flex } from "@chakra-ui/react";
import { DetailedHTMLProps } from "react";

type MainProps = DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

export default function Main(props: MainProps) {
    return (
        <main {...props}>
            <Center>
                <Flex></Flex>
            </Center>
        </main>
    );
}
