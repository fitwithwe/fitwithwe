import { Flex, Text, Image } from "@chakra-ui/react";

export default function AboutOffer() {
    return (
        <Flex
            bgColor={'#181818'}
            justifyContent='space-between'
            py={{ base: '40pt', sm: '50pt', md: '60pt', lg: '100pt' }}
            px={{ base: '20pt', sm: '30pt', md: '40pt', lg: '100pt' }}
            color='white'
            fontWeight={'bold'}
            overflow={'hidden'}
            position='relative'
            direction={'column'}
        >
            <Flex
                position={'absolute'}
                opacity={0.1}
                fontSize={'30vw'}
                top={{ base: '80%', md: '80%', lg: '60%' }}
                color='transparent'
                lineHeight={0}
                style={{
                    WebkitTextStroke: '1px white'
                }}
                userSelect='none'
                zIndex='1'
            >
                SPORT
            </Flex>

            <Flex
                overflow={'hidden'}
                borderRadius='20px'
                border='1px solid gray'
                p='10px'
                bgColor='black'
                display={{ base: 'inherit', lg: 'none' }}
                mb='40px'
            >
                <Flex
                    borderRadius='10px'
                    overflow={'hidden'}
                    justifyContent='center'
                >
                    <Image src='/website.jpg' />
                </Flex>
            </Flex>

            <Flex direction={'column'}>
                <Flex>
                    <Text
                        color={'white'}
                        bgColor={'#3c8599'}
                        lineHeight='25px'
                        letterSpacing={'8px'}
                        px={{ base: '1px', md: '2px' }}
                        fontSize={{ base: '10px', sm: '12px', md: '14px', lg: '16px' }}
                    >
                        WHAT WE OFFER
                    </Text>
                </Flex>
                <Flex>
                    <Text
                        fontSize={{ base: '20px', sm: '30px', md: '38px', lg: '48px' }}
                        my='20px'
                        display={{ base: 'inherit', lg: 'none' }}
                    >
                        Coaching when & where you want it.
                    </Text>
                    <Text
                        fontSize={{ base: '20px', sm: '30px', md: '38px', lg: '48px' }}
                        my='20px'
                        display={{ base: 'none', lg: 'inherit' }}
                    >
                        Coaching when & <br />where you want it.
                    </Text>
                </Flex>
            </Flex>

            <Flex
                w='50%'
                overflow={'hidden'}
                borderRadius='20px'
                position={'absolute'}
                top='-15%'
                right={'-4%'}
                border='1px solid gray'
                p='20px'
                zIndex={99}
                bgColor='black'
                display={{ base: 'none', lg: 'inherit' }}
            >
                <Flex borderRadius='10px' overflow={'hidden'} justifyContent='center'>
                    <Image src='/website.jpg' />
                </Flex>
            </Flex>
        </Flex>
    )
}