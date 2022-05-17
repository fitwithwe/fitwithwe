import { Flex, Image, Text } from "@chakra-ui/react";

export default function Logo({ light = false }) {
    return (
        <Flex direction={'column'} letterSpacing='5px' fontWeight={'bold'} fontSize='20pt' lineHeight={'25px'}>
            <Flex>
                <Text bgColor={light ? 'black' : 'white'} color={light?'white':'black'}>
                    FitWith
                </Text>
                <Text bgColor={light ? 'black' : 'white'} color='rgb(51,167,181)' fontSize='20pt' >
                    .
                </Text>
            </Flex>
            <Flex>
                <Text color={light ? 'black' : 'white'}>
                    We
                </Text>
            </Flex>
        </Flex>
    )
}