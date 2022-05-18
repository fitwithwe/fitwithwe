import { Flex, Image, Text } from "@chakra-ui/react";

export default function Banner() {
    return (
        <Flex>
            <Flex w='65%' bgColor={'transparent'}>
                <Image src="bg1.jpeg" w='100%' />
            </Flex>
            <Flex w='35%' boxShadow={'-10px 0px 3px 0px #19191a'}>
                <Image src="1.jpeg" w='100%' />
            </Flex>
        </Flex>
    )
}