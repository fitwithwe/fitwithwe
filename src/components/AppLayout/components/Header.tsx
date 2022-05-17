import { Flex, Text, Image, FlexProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { whatsapp_data } from "../../../utils/whatsapp_data";
import HoverMotion from "../../HoverMotion";
import Logo from "../../Logo";

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
        >
            <Flex>
                <Flex
                    h='25px'
                    bgColor={'black'}
                    w={'80px'}
                />
                <Logo light />
            </Flex>
            <Flex justifyContent={'space-between'} w='40%'>
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
            <MotionFlex direction={"column"} animate={"hover"}>
                <Flex
                    alignItems={'center'}
                    fontSize='18px'
                    letterSpacing={'4px'}
                    gridGap='5px'
                    cursor='pointer'
                    onClick={() => {
                        window.open(whatsapp_data.phone)
                    }}
                >
                    <Text>
                        Get in touch
                    </Text>
                    <AiOutlineArrowRight />
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