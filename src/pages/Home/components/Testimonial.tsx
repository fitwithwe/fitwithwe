import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import { BsArrowLeft, BsArrowRight, BsFillPersonFill } from "react-icons/bs";

const items = {
    1: {
        name: 'Heena sharma',
        msg: "I had a cesarean around 10 months ago I Gained around 12 kgs of weight and was really worried what will happen with my child Vansh being a coach and acted more like a brother I was really impressed with the way he scheduled everything. I lost 9 kgs in last three months and am continuing my journey with him."
    },
    2: {
        name: 'Vaibhav gaba',
        msg: "Knowledge is a major power I had been into gymming since 2 years but I joined him and saw results in just 1 month I gained around 4 kgs a month and even had a muscular body shape with the help of his diet and workout plans. I am definitely taking his membership plan for the next whole year."
    },
    3: {
        name: 'Rohan bhandari',
        msg: "I had been 6 months under his guidance Had a full bulk to cut process once the results are like awesome am just waiting for my abs to pop out this month."
    },
    4: {
        name: 'Purnima Mittal',
        msg: "He is more of a freind and less of a coach he provided everything on call and then Aloted the trainers and then also keeps a Check over my routine himself. I lost around 7 kgs in 3 months seeing more and more in the further months."
    },
    5: {
        name: 'Jasman Singh saluja',
        msg: "The meal plans ohh yeah am eating protein ice creams making pancakes tastier than cakes recipies are nice and the trainers aloted listen your each and every query . Even the classes are really enduring where you meet different people with same goals."
    }
}

export default function Testimonial() {
    const length = 4
    const [itemNum, setItemNum] = React.useState(1)
    const next = () => {
        if (itemNum + 1 <= length)
            setItemNum(itemNum + 1)
    }
    const prev = () => {
        if (itemNum - 1 > 0)
            setItemNum(itemNum - 1)
    }
    return (
        <Flex w='100%' direction={'column'} maxH='80vh' overflow={'hidden'} position='relative'>
            <Flex w='100%' display={{ base: 'none', md: 'inherit' }}>
                <Image src="https://res.cloudinary.com/dis12nayi/image/upload/v1653380755/bg2_clqkoy.jpg" w='100%' />
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
                py={{ base: '80px', md: '100px' }}
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
                    userSelect='none'
                >
                    {'“'}
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
                    fontSize={{ base: '16px', sm: '19px', md: '22px', lg: '25px' }}
                    direction='column'
                >
                    <Text
                        w={{ base: '200px', sm: '300px', md: '400px', lg: '500px' }}
                    >
                        {`“${items[itemNum].msg}"`}
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
                                {items[itemNum].name}
                            </Text>
                            <Text
                                letterSpacing={'4px'}
                                fontSize={{ base: '12px', sm: '13px', md: '14px', lg: '15px' }}
                                color={'#3c8599'}
                            >
                                CLIENT OF FitWith.We
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
                    onClick={() => next()}
                >
                    <BsArrowRight />
                </Flex>
            </Flex>
        </Flex>
    )
}