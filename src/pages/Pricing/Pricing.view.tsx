
import { Flex, Grid, Text, GridItem, Image } from "@chakra-ui/react";
import React from "react";
import { BiRupee } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import { whatsapp_data } from "../../utils/whatsapp_data";
import MovingLine from "../Home/components/MovingLine";
import { usePricingContext } from "./utils/context";

export default function PricingView() {
    const { count } = usePricingContext();
    const items = [
        {
            title: "LITE PLAN",
            price: "990",
            plan: '4 Weeks Plan'
        },
        {
            title: "ELITE PLAN",
            price: "2499",
            plan: '12 Weeks Plan'
        },
        {
            title: "PRO ELITE PLAN",
            price: "3999",
            plan: '24 Weeks Plan'
        },
        {
            title: "PREMIUM PLAN",
            price: "5499",
            plan: 'Yearly Plan'
        }
    ]
    const [hoverActive, setHoverActive] = React.useState(-1)
    const history = useHistory()
    return (
        <Flex
            w='100%'
            direction={'column'}
            bgImage={'url("/pricingbg.jpeg")'}
            bgAttachment='fixed'
            bgSize={{ base: '100vw 40vh', sm: '100vw 50vh', md: '100vw 60vh', lg: '100vw 70vh', xl: '100vw 80vh' }}
            bgRepeat='no-repeat'
        >
            <PageHeader name="Pricing" />
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
                    top={{ base: '10%', md: '40%', lg: '60%' }}
                    color='transparent'
                    lineHeight={0}
                    style={{
                        WebkitTextStroke: '1px white'
                    }}
                    userSelect='none'
                    zIndex='1'
                >
                    PRICING
                </Flex>
                <Text
                    color={'white'}
                    bgColor={'#3c8599'}
                    lineHeight='25px'
                    letterSpacing={'8px'}
                    px={{ base: '1px', md: '2px' }}
                    fontSize={{ base: '10px', sm: '12px', md: '14px', lg: '16px' }}
                    alignItems='center'
                >
                    PRICING
                </Text>
                <Text
                    fontSize={{ base: '20px', sm: '30px', md: '38px', lg: '48px' }}
                    mt='20px'
                    textAlign={'center'}
                >
                    We have four plans for you
                </Text>
                <Text
                    fontSize={{ base: '13px', sm: '14px', md: '15px', lg: '16px' }}
                    fontWeight={'400'}
                    w='90%'
                    textAlign={'center'}
                    zIndex={99}
                >
                    In all the plan, you will get everything 
                    <span
                    onClick={()=>{
                          history.push('/home')
                    }}
                    style={{
                        cursor:'pointer',
                        paddingLeft:'4px',
                        paddingRight:'4px',
                        zIndex:99,
                        textDecoration:'underline'
                    }}
                    >what we offer</span>
                    , just the difference is in the duration
                </Text>
                <Grid
                    mt={'100px'}
                    templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)' }}
                    gap={{ base: '10px', md: '50px' }}
                    zIndex='999'
                    justifyContent={'center'}
                >
                    {items.map((row, id) => (
                        <GridItem
                            key={id}
                            onMouseOver={() => setHoverActive(id)}
                            onMouseOut={() => setHoverActive(-1)}
                        >
                            <Flex
                                maxW={'350px'}
                                border='1px solid'
                                maxh={'350px'}
                                direction={'column'}
                                alignItems='center'
                                justifyContent={'center'}
                                transition='0.3s ease-out'
                                _hover={{
                                    bgColor: '#3c8599',
                                    transition: '0.5s ease-in'
                                }}
                                p={'40px'}
                            >
                                <Text
                                    textAlign={'center'}
                                    fontSize={'20px'}
                                >
                                    {row.title}
                                </Text>
                                <Text
                                    my='30px'
                                    textAlign={'center'}
                                    fontSize={'16px'}
                                >
                                    {row.plan}
                                </Text>

                                <Flex
                                    mb='40px'
                                    textAlign={'center'}
                                    fontSize={'30px'}
                                    alignItems='center'
                                >
                                    <BiRupee />{row.price}
                                </Flex>
                                <Flex
                                    alignItems={'center'}
                                    fontSize='20px'
                                    letterSpacing={'4px'}
                                    cursor='pointer'
                                    p='5px'
                                    onClick={() => {
                                        window.open(whatsapp_data.number, "_self")
                                    }}
                                    border={hoverActive == id ? 'none' : '1px solid'}
                                    bgColor={hoverActive == id ? 'black' : 'transparent'}
                                    transition='0.5s ease-in'
                                >
                                    BUY NOW
                                </Flex>
                            </Flex>
                        </GridItem>
                    ))}
                </Grid>
            </Flex>
            <MovingLine />
        </Flex>
    )
}    
