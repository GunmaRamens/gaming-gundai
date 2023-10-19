import { Center, Heading, Text } from "@chakra-ui/react";
import { DetailedHTMLProps } from "react";

type HeaderProps = DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

export default function Header(props: HeaderProps) {
    return (
        <header {...props}>
            <Center>
                <Heading size="lg" className="rainbow-text">
                    Gaming Gunma University
                </Heading>
            </Center>
            <Center>
                <Text margin="4" fontSize="2xl">ゲーミング群馬大学のON/OFF</Text>
            </Center>
        </header>
    );
}
