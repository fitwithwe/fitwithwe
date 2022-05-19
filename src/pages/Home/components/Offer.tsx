import { Flex, Text, Image, GridItem, Grid } from "@chakra-ui/react";
import { GiGymBag } from "react-icons/gi";
import { BiFoodMenu } from 'react-icons/bi'
import { BsPeople } from 'react-icons/bs'
import { MdOutlinePersonalVideo } from 'react-icons/md'

const items = [
    {
        title: 'Workout plan',
        desc: 'Our expert trainers will help you with workout plan and give video support as well',
        icon: GiGymBag
    },
    {
        title: 'Diet plan',
        desc: 'Our expert trainers will create a customized diet plan as per your need',
        icon: BiFoodMenu
    },
    {
        title: 'Training staff',
        desc: 'Our training staff support will available 24*7 in case you need any help',
        icon: BsPeople
    },
    {
        title: 'Classes',
        desc: 'Lectures will be there every weekend in which you can ask query, will check results and more',
        icon: MdOutlinePersonalVideo
    },
]

export default function Offer() {
    return (
        <Flex
            bgColor={'#181818'}
            justifyContent={'center'}
            py={{ base: '50pt', sm: '60pt', md: '70pt', lg: '80pt' }}
            alignItems={'center'}
            color='white'
            fontWeight={'bold'}
            direction='column'
            overflow={'hidden'}
            position='relative'
        >
            <Flex
                position={'absolute'}
                opacity={0.1}
                fontSize={'30vw'}
                top={{base:'10%',md:'40%',lg:'60%'}}
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
            <Text
                fontSize={{ base: '20px', sm: '30px', md: '38px', lg: '48px' }}
                my='20px'
                textAlign={'center'}
            >
                The best standards<br /> anywhere.
            </Text>
            <Grid
                templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)' }}
                gap={{base:'10px',md:'50px'}}
                zIndex='999'
                justifyContent={'center'}
            >
                {items.map((row, id) => (
                    <GridItem
                        key={id}
                    >
                        <Flex
                            borderRadius={{base:'0px',md:'999px'}}
                            maxW={'350px'}
                            maxh={'350px'}
                            direction={'column'}
                            alignItems='center'
                            justifyContent={'center'}
                            transition='0.3s ease-out'
                            _hover={{
                                bgColor:'black',
                                transition:'0.5s ease-in'
                            }}
                            p={'40px'}
                            cursor='crosshair'
                        >
                            <Flex
                                fontSize={'48px'}
                                mb='10px'
                            >
                                <row.icon />
                            </Flex>
                            <Text
                                textAlign={'center'}
                                mb='10px'
                                fontSize={'20px' }
                            >
                                {row.title}
                            </Text>
                            <Text
                                color={'#D6D6D6'}
                                textAlign={'center'}
                                fontSize={'16px' }
                                fontWeight='300'
                            >
                                {row.desc}
                            </Text>
                        </Flex>
                    </GridItem>
                ))}
            </Grid>
        </Flex>
    )
}