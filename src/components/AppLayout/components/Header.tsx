import { Flex, Text, Image, FlexProps, Drawer, useDisclosure, Box, Button, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Stack, Textarea } from "@chakra-ui/react";
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
        link: '/freehelp'
    },
    {
        title: 'Pricing',
        link: '/pricing'
    },
    {
        title: 'Transformations',
        link: '/transformation'
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
    const { isOpen, onClose, onOpen } = useDisclosure()
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
            p={{ base: '0px 10px 0px 0px', md: '0px 50px 0px 0px' }}
            alignItems={'center'}
            h='100px'
            fontSize={'16px'}
            justifyContent='space-between'
            fontWeight={'600'}
            bgColor={{ base: 'rgba(24,24,24, 1)', lg: 'white' }}
        >
            <Flex
                fontSize='25px'
                display={{ base: 'inherit', lg: 'none' }}
                ml='20px'
                color={'white'}
                cursor='pointer'
                onClick={() => onOpen()}
            >
                <GiHamburgerMenu />
            </Flex>

            <Flex display={{ base: 'inherit', lg: 'none' }} >
                <Logo />
            </Flex>

            <Flex display={{ base: 'none', lg: 'inherit' }}>
                <Flex
                    h='25px'
                    bgColor={'rgba(24,24,24, 1)'}
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
                        window.open(whatsapp_data.phone, "_self")
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
                        window.open(whatsapp_data.phone, "_self")
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
            <Drawer
                onClose={onClose}
                isOpen={isOpen}
                placement={'left'}
            >
                <DrawerContent bgColor={'rgba(24,24,24, 1)'}>
                    <DrawerCloseButton color={'white'} />
                    <DrawerBody>
                        <Flex my={'50px'}>
                            <Logo />
                        </Flex>
                        {items.map((item, id) => (
                            <Flex
                                key={id}
                                onClick={() => {
                                    history.push(item.link)
                                    onClose()
                                }}
                                cursor='pointer'
                                color={'white'}
                                my='20px'
                                lineHeight={'25px'}
                            >
                                <HoverMotion>
                                    {item.title}
                                </HoverMotion>
                            </Flex>
                        ))}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex >
    )
}