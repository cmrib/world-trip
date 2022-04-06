import { Flex, Text, Image, Box } from "@chakra-ui/react";

export function IconsBox() {
    return (
        <Flex
            width="100%"
            mx="auto"
            direction="column"
            align="center"
        >
            <Flex
                width="100%"
                maxWidth={1480}
                h="250px"
                mx="auto"
                px="6"
                justify="space-between"
                align="center"
                color="#47585B"
            >

                <Flex direction="column" align="center" >
                    <Image src="cocktail.png" w="85px" mb="2" />
                    <Text fontWeight="600" >vida noturna</Text>
                </Flex >

                <Flex direction="column" align="center" >
                    <Image src="surf.png" w="85px" mb="2" />
                    <Text fontWeight="600" >praia</Text>
                </Flex >

                <Flex direction="column" align="center">
                    <Image src="building.png" w="85px" mb="2" />
                    <Text fontWeight="600"  >moderno</Text>
                </Flex >

                <Flex direction="column" align="center" >
                    <Image src="museum.png" w="85px" mb="2" />
                    <Text fontWeight="600" >clássico</Text>
                </Flex >

                <Flex direction="column" align="center" >
                    <Image src="earth.png" w="85px" mb="2" />
                    <Text fontWeight="600" >e mais...</Text>
                </Flex >
            </Flex>

            <Box textAlign="center" fontSize="36" color="#47585B" fontWeight="600">
                <Text>Vamos nessa?</Text>
                <Text>Então escolha seu continente</Text>
            </Box>
        </Flex>
    )
}