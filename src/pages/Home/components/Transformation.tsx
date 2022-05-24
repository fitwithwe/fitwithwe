import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import { BsArrowLeft, BsArrowRight, BsFillPersonFill } from "react-icons/bs";

const items = {
    1: {
        img: '/transformation/1.jpeg',
    },
    2: {
        img: '/transformation/2.jpeg',
    },
    3: {
        img: '/transformation/3.jpeg',
    },
    4: {
        img: '/transformation/4.jpeg',
    },
    5: {
        img: '/transformation/5.jpeg',
    },
}

export default function Transformation() {
    const length = 4
    const [itemNum, setItemNum] = React.useState(1)
    const next = () => {
        console.log(itemNum)
        if (itemNum + 1 <= length)
            setItemNum(itemNum + 1)
    }
    const prev = () => {
        if (itemNum - 1 > 0)
            setItemNum(itemNum - 1)
    }
    return (
        <Flex
            w='100%'
            direction={'column'}
            py={{ base: '50pt', sm: '60pt', md: '70pt', lg: '80pt' }}
            overflow={'hidden'}
            position='relative'
            bgColor={'#181818'}
            px={{ base: '1px', md: '2px' }}
            borderBottom='1px solid #3c8599'
        >
            <Flex justifyContent={'center'}>
                <Text
                    color={'white'}
                    bgColor={'#3c8599'}
                    lineHeight='25px'
                    letterSpacing={'8px'}
                    fontSize={{ base: '10px', sm: '12px', md: '14px', lg: '16px' }}
                    mb={{ base: '10pt', sm: '20pt', md: '30pt', lg: '40pt' }}
                >
                    TRANSFORMATIONS
                </Text>
            </Flex>
            <Flex
                zIndex={99}
                w={{ base: '100%', md: 'auto' }}
                transition='background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s'
                bottom={'0%'}
                left={{ base: 'none', md: '10%', lg: '20%' }}
                overflow='hidden'
                color={'white'}
                justifyContent='space-between'
                alignItems='center'
                px='20px'
                py={{ base: '80px', md: '100px' }}
                gridGap={'20px'}
            >
                <Flex
                    position={'absolute'}
                    bottom={{ base: '-10%', md: '-20%' }}
                    left={'-20%'}
                    opacity={0.1}
                    fontSize={{ base: '750px', sm: '1000px', md: '1250px', lg: '1500px' }}
                    color='transparent'
                    lineHeight={0}
                    style={{
                        WebkitTextStroke: '1px white'
                    }}
                    userSelect='none'
                >
                    {'@'}
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
                    onClick={() => prev()}
                >
                    <BsArrowLeft />
                </Flex>

                <Flex
                    direction='column'
                    w={{base:'100%',sm:'90%',md:'80%',lg:'70%',xl:'60%'}}
                >
                    <Image src={items[itemNum].img} w='100%'/>
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
                    onClick={() => next()}
                >
                    <BsArrowRight />
                </Flex>
            </Flex>
        </Flex>
    )
}