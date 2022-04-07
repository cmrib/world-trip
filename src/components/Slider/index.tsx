import { Flex } from "@chakra-ui/react"
import { Carroussel } from './Carroussel'

export function Slider() {
    return (
        <Flex
            w="100%"
            maxW={1440}
            mx="auto"
            h="450px"
            my="60px"
            px="6"
        >
            <Carroussel />

        </Flex>
    )
}