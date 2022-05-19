import { Flex, FlexProps, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import Logo from "../../Logo";
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'
import { whatsapp_data } from "../../../utils/whatsapp_data";
import HoverMotion from "../../HoverMotion";
import { motion } from "framer-motion";

export default function Footer() {
    const icon = [
        {
            img: FaFacebookF,
            link: ''
        },
        {
            img: AiOutlineInstagram,
            link: 'https://www.instagram.com/fitwith.we/?hl=en'
        },
        {
            img: AiOutlineWhatsApp,
            link: whatsapp_data.number
        }
    ]
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
    return (
        <Flex
            bgColor={'#181818'}
            direction='column'
            color={'white'}
            pb='20px'
        >
            <Flex
                h={{ base: '40pt', sm: '60pt', md: '80pt', lg: '100pt' }}
            />
            <Flex>
                <Flex
                    h='25px'
                    bgColor={'white'}
                    w={{ base: '15px', sm: '50px', md: '100px', lg: '130px', xl: '200px' }}
                />
                <Flex
                    direction={'column'}
                    w={{ base: '85%', md: '80%', lg: '70%' }}
                    gridRowGap={'50px'}
                >
                    <Grid
                        w='100%'
                        color={'black'}
                        templateColumns={{ base: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }}
                        rowGap='50px'
                    >
                        <GridItem
                            gridColumn='1/1'
                        >
                            <Logo />
                        </GridItem>
                        <GridItem
                            fontSize={{ base: '20px', sm: '22px', md: '24px', lg: '26px' }}
                            fontWeight='bold'
                            color={'white'}
                            gridColumn={{ base: "1/4", lg: '-1/2' }}
                        >
                            FitWith.We is more than a place where high performers come to be their best.
                        </GridItem>
                    </Grid>

                    <Grid
                        w='100%'
                        color={'white'}
                        justifyContent=''
                        templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
                        gap='30px'
                        fontSize={{ base: '10px', sm: '11px', md: '12px', lg: '14px' }}
                    >
                        <GridItem>
                            <Flex>
                                {icon.map((row, id) => (
                                    <Flex
                                        key={id}
                                        h='56px'
                                        w={'56px'}
                                        borderRadius='99px'
                                        justifyContent={'center'}
                                        alignItems='center'
                                        bgColor={'#2E2E2E'}
                                        _hover={{
                                            bgColor: '#f5f3ed',
                                            color: '#2b2b2b',
                                            transition: "0.3s ease-in"
                                        }}
                                        cursor='pointer'
                                        onClick={() => {
                                            window.open(row.link, "_self")
                                        }}
                                        mr='20px'
                                    >
                                        <row.img />
                                    </Flex>
                                ))}
                            </Flex>
                        </GridItem>

                        <GridItem
                            direction={'column'}
                            lineHeight={'1.75em'}
                            letterSpacing={'2px'}
                        >
                            <Flex direction={'column'} >
                                <Flex
                                    letterSpacing={'7px'}
                                    fontWeight='600'
                                    color={'#A3A3A3'}
                                >
                                    WORKING HOURS
                                </Flex>
                                <Flex>
                                    Mon – Fri: 7.00 – 5.00
                                </Flex>
                            </Flex>
                        </GridItem>

                        <GridItem>
                            <Flex
                                direction={'column'}
                                lineHeight={'1.75em'}
                                letterSpacing={'2px'}
                            >
                                <Text
                                    letterSpacing={'7px'}
                                    fontWeight='600'
                                    color={'#A3A3A3'}
                                > WE ARE HERE</Text>
                                <Text>320/A, GURUDWARA ROAD<br />
                                    SAHARANPUR
                                </Text>
                            </Flex>
                        </GridItem>

                        <GridItem>
                            <Flex
                                direction={'column'}
                                lineHeight={'1.75em'}
                                letterSpacing={'2px'}
                            >
                                <Text
                                    letterSpacing={'7px'}
                                    fontWeight='600'
                                    color={'#A3A3A3'}
                                > CALL US
                                </Text>
                                <Text>+91 6395611002</Text>
                            </Flex>
                        </GridItem>
                    </Grid>
                </Flex>
            </Flex>

            <Flex
                lineHeight={'1.75em'}
                letterSpacing={'2px'}
                mt={'20px'}
                px={{ base: '15px', sm: '50px', md: '100px', lg: '130px', xl: '200px' }}
                direction='column'
                fontSize={{ base: '10px', sm: '11px', md: '12px', lg: '14px' }}
            >
                <Text
                    letterSpacing={'7px'}
                    fontWeight='600'
                    color={'#A3A3A3'}
                >
                    WEBSITE BY
                </Text>
                <MotionFlex
                    direction={"column"}
                    animate={"hover"}
                    w={{base:'140px',sm:'140px',md:'150px',lg:'160px'}}
                >
                    <Flex
                        alignItems={'center'}
                        letterSpacing={'4px'}
                        cursor='pointer'
                        onClick={() => {
                            window.open("https://api.whatsapp.com/send?phone=+917579214173", "_self")
                        }}
                        gridGap='5px'
                    >
                        Nikhil Gupta <AiOutlineWhatsApp />
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

            <Flex
                h={{ base: '20pt', sm: '40pt', md: '60pt', lg: '80pt' }}
                w='90%'
                borderBottom={'1px solid #A3A3A3'}
            />
            <Flex
                pt={'10px'}
                ml={{ base: '20px', md: '40px', lg: '80px' }}
                color={'#A3A3A3'}
                fontSize='12px'
                alignItems={{ base: 'start', md: 'center' }}
                gridColumnGap='100px'
                direction={{ base: 'column', md: 'row' }}
            >
                <Text>
                    Privacy Policy
                </Text>
                <Text>
                    Terms of Use
                </Text>
                <Text display={{ base: 'none', sm: 'inherit' }}>
                    Copyright © 2022 FitWith.We. All Rights Reserved.
                </Text>
            </Flex>
            <Flex >
            </Flex>
        </Flex>
    )
}