import { Image, Box, Text, Flex } from "@chakra-ui/react";

export function Banner() {
    return (
        <Flex
            width="100%"
            h="335px"
            backgroundImage="background.png"
            bgSize="cover"
            color="#DADADA"
        >
            <Flex width="100%" maxWidth={1440} mx="auto" px="6" justify="space-between" align="center">
                <Box>
                    <Text fontSize="34" fontWeight="bold">5 Continentes, <br /> infinitas possibilidades.</Text>
                    <Text mt="4"> Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
                </Box>
                <Box>
                    <Image mt="80px" src="airplane.png" />
                </Box>
            </Flex>
        </Flex>
    )
}