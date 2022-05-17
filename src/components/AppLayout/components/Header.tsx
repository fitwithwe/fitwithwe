import { Flex, Text, Image, FlexProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AiOutlineArrowRight, AiOutlinePhone } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { whatsapp_data } from "../../../utils/whatsapp_data";
import HoverMotion from "../../HoverMotion";
import Logo from "../../Logo";
import { GiHamburgerMenu } from 'react-icons/gi'

const items = [
    {
        title: 'Home',
        link: '/home'
    },
    {
        title: 'Free Help',
        link: '/pricing'
    },
    {
        title: 'Pricing',
        link: '/pricing'
    },
    {
        title: 'About',
        link: '/about'
    },
    {
        title: 'Contact',
        link: '/contact'
    }
]

export default function Header() {
    const MotionFlex = motion<FlexProps>(Flex);
    const hoverMotion = {
        hover: {
            opacity: 1,
            width: '95%',
            transition: {
                duration: 2,
                type: "spring",
                ease: "easeIn",
                repeat: Infinity
            },
        },
    };
    const history = useHistory()
    return (
        <Flex
            p='0px 50px 0px 0px'
            alignItems={'center'}
            border='1px solid'
            h='100px'
            fontSize={'16px'}
            justifyContent='space-between'
            fontWeight={'600'}
            bgColor={{ base: 'black', lg: 'white' }}
        >
            <Flex fontSize='25px'
                display={{ base: 'inherit', lg: 'none' }}
                ml='20px'
                color={'white'}
            >
                <GiHamburgerMenu />
            </Flex>

            <Flex display={{ base: 'inherit', lg: 'none' }}>
                <Logo />
            </Flex>

            <Flex display={{ base: 'none', lg: 'inherit' }}>
                <Flex
                    h='25px'
                    bgColor={'black'}
                    w={'80px'}
                />
                <Logo light />
            </Flex>
            <Flex justifyContent={'space-between'} w='40%' display={{ base: 'none', lg: 'inherit' }}>
                {items.map((item, id) => (
                    <Flex
                        key={id}
                        onClick={() => history.push(item.link)}
                        cursor='pointer'
                    >
                        <HoverMotion>
                            {item.title}
                        </HoverMotion>
                    </Flex>
                ))}
            </Flex>
            <MotionFlex direction={"column"} animate={"hover"} color={{ base: 'white', lg: 'black' }}>
                <Flex
                    alignItems={'center'}
                    fontSize='18px'
                    letterSpacing={'4px'}
                    cursor='pointer'
                    onClick={() => {
                        window.open(whatsapp_data.phone)
                    }}
                    display={{ base: 'none', md: 'inherit' }}
                >
                    <Text>
                        Get in touch
                    </Text>
                    <AiOutlineArrowRight />
                </Flex>
                <Flex
                    alignItems={'center'}
                    fontSize='25px'
                    letterSpacing={'4px'}
                    cursor='pointer'
                    onClick={() => {
                        window.open(whatsapp_data.phone)
                    }}
                    display={{ base: 'inherit', md: 'none' }}
                >
                    <AiOutlinePhone />
                </Flex>
                <MotionFlex
                    h="2.5px"
                    width={'0%'}
                    bgColor={"currentcolor"}
                    variants={hoverMotion}
                    opacity="0"
                    borderRadius={"9999px"}
                />
            </MotionFlex>
        </Flex>
    )
}