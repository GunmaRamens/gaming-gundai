import { Center, Flex, Switch, Text } from "@chakra-ui/react";

export default function SwitchItem() {
    return (
        <Flex className="w-full" justifyContent="space-between">
            <Center className="w-1/2">
                <Switch size="lg"></Switch>
            </Center>
            <Center className="w-1/2">
                <Text fontSize="2xl">ほげほげ</Text>
            </Center>
        </Flex>
    );
}
