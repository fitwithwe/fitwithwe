import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Flex, Text, Image } from "@chakra-ui/react";
import { BsArrowLeft, BsArrowRight, BsFillPersonFill } from "react-icons/bs";

export default function Testimonial() {
    return (
        <Flex w='100%' direction={'column'} maxH='80vh' overflow={'hidden'} position='relative'>
            <Flex w='100%' display={{ base: 'none', md: 'inherit' }}>
                <Image src="/bg2.jpeg" w='100%' />
            </Flex>
            <Flex
                position={{ base: 'inherit', md: 'absolute' }}
                zIndex={99}
                w={{ base: '100%', md: 'auto' }}
                bgColor={'#181818'}
                transition='background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s'
                bottom={'0%'}
                left={{ base: 'none', md: '10%', lg: '20%' }}
                overflow='hidden'
                color={'white'}
                justifyContent='space-between'
                alignItems='center'
                px='20px'
                py={{base:'80px',md:'100px'}}
                gridGap={'20px'}
            >
                <Flex
                    position={'absolute'}
                    bottom={{ base: '-10%', md: '-40%' }}
                    left={'-20%'}
                    opacity={0.1}
                    fontSize={{ base: '750px', sm: '1000px', md: '1250px', lg: '1500px' }}
                    color='transparent'
                    lineHeight={0}
                    style={{
                        WebkitTextStroke: '1px white'
                    }}
                >
                    {'"'}
                </Flex>
                <Flex
                    fontWeight={'100'}
                    fontSize={{ base: '20px', sm: '25px', md: '33px', lg: '40px' }}
                    opacity={0.6}
                    cursor='pointer'
                    transition={'0.1s ease-out'}
                    _hover={{
                        color: '#3c8599',
                        transition: '0.2s ease-in'
                    }}
                >
                    <BsArrowLeft />
                </Flex>

                <Flex
                    fontSize={{ base: '16px', sm: '19px', md: '22px', lg: '25px' }}
                    direction='column'
                >
                    <Text
                        w={{ base: '200px', sm: '300px', md: '400px', lg: '500px' }}
                    >
                        “Our office is something we are pleased with. We consider it the little magnet; it is wanting to come here and afterward difficult to leave it. Our office is additionally a big name.”
                    </Text>
                    <Flex
                        mt={'30px'}
                        alignItems='center'
                        gridGap={{ base: '15px', sm: '20px', md: '25px', lg: '30px' }}
                    >
                        <Flex
                            fontSize={{ base: '20px', sm: '30px', md: '40px', lg: '50px' }}
                            color='#3c8599'
                        >
                            <BsFillPersonFill />
                        </Flex>
                        <Flex
                            direction={'column'}
                        >
                            <Text
                                fontSize={{ base: '14px', sm: '16px', md: '18px', lg: '20px' }}
                            >
                                Linda Anderson
                            </Text>
                            <Text
                                letterSpacing={'4px'}
                                fontSize={{ base: '12px', sm: '13px', md: '14px', lg: '15px' }}
                                color={'#3c8599'}
                            >
                                CLIENT OF CLUB
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>

                <Flex
                    fontWeight={'100'}
                    fontSize={{ base: '20px', sm: '25px', md: '33px', lg: '40px' }}
                    opacity={0.6}
                    cursor='pointer'
                    transition={'0.1s ease-out'}
                    _hover={{
                        color: '#3c8599',
                        transition: '0.2s ease-in'
                    }}
                >
                    <BsArrowRight />
                </Flex>
            </Flex>
        </Flex>
    )
}