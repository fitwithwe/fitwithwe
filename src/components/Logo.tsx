import { Flex, Image, Text } from "@chakra-ui/react";

export default function Logo() {
    return (
        <Flex direction={'column'} letterSpacing='5px' fontWeight={'bold'} fontSize='20pt' lineHeight={'25px'}>
            <Flex>
                <Text bgColor={'white'}>
                    FitWith
                </Text>
                <Text bgColor={'white'} color='rgb(51,167,181)' fontSize='20pt' >
                    .
                </Text>
            </Flex>
            <Flex>
                <Text color={'white'}>
                    We
                </Text>
            </Flex>
        </Flex>
    )
}