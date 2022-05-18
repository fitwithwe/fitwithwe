import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Flex, Image, Text } from "@chakra-ui/react";

export default function Banner() {
    return (
        <Flex position={'relative'}>
            <Flex w='65%' bgColor={'transparent'}>
                <Image src="bg1.jpeg" w='100%' />
            </Flex>
            <Flex w='35%' boxShadow={'-10px 0px 3px 0px #19191a'}>
                <Image src="1.jpeg" w='100%' />
            </Flex>
            <Flex
                position={'absolute'}
                fontWeight={'bold'}
                direction='column'
                color={'white'}
                letterSpacing={{ base: '3px', sm: '4px', md: '5px', lg: '6px' }}
                top='20%'
                left={{ base: '5%', sm: '9%', md: '12%', lg: '15%' }}
            >
                <Flex
                    fontSize={{ base: '7px', sm: '8px', md: '10px', lg: '12px' }}
                >
                    YOU'RE MORE THAN JUST A MEMBER
                </Flex>
                <Flex
                    fontSize={{ base: '20px', sm: '40px', md: '60px', lg: '80px' }}
                >
                    No matter your<br /> fitness level.
                </Flex>
            </Flex>
            <Flex
                fontSize={{ base: '14px', sm: '16px', md: '18px', lg: '20px' }}
                top={'70%'}
                left={{ base: '5%', sm: '9%', md: '12%', lg: '15%' }}
                fontWeight='bold'
                color='white'
                position={'absolute'}
                cursor={'pointer'}
                bgColor='#3c8599'
                w={{ base: '140px', sm: '160px', md: '180px', lg: '200px' }}
                alignItems={'center'}
                p={{ base: '6px', sm: '7px', md: '9px', lg: '10px' }}
                letterSpacing={{ base: '1px', sm: '2px', md: '2px', lg: '2px' }}

                justifyContent='center'
                transition='0.3s ease-out'
                _hover={{
                    color: 'black',
                    bgColor: 'white',
                    transition: '0.3s ease-in'
                }}
            >
                <Text mr={'5px'}>Get Started</Text> <ArrowForwardIcon />
            </Flex>
        </Flex >
    )
}