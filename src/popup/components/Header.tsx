import { Center, Heading } from "@chakra-ui/react";
import { DetailedHTMLProps } from "react";

type HeaderProps = DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

export default function Header(props: HeaderProps) {
    return (
        <header {...props}>
            <Center>
                <Heading size="lg" className="rainbow-text w-full">
                    Gaming Gunma University
                </Heading>
            </Center>
        </header>
    );
}
