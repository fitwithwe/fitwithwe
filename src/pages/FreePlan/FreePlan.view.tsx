
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import PageHeader from "../../components/PageHeader";
import { whatsapp_data } from "../../utils/whatsapp_data";
import GetStarted from "./components/GetStarted";
import { useFreePlanContext } from "./utils/context";

export default function FreePlanView() {
    const { count } = useFreePlanContext();
    return (
        <Flex
            w='100%'
            direction={'column'}
            bgImage={'url("https://res.cloudinary.com/dis12nayi/image/upload/v1653380755/freebg_egcbwi.jpg")'}
            bgAttachment='fixed'
            bgSize={{ base: '100vw 40vh', sm: '100vw 50vh', md: '100vw 60vh', lg: '100vw 70vh', xl: '100vw 80vh' }}
            bgRepeat='no-repeat'
        >
            <PageHeader name="Free help" />
            <Flex
                bgColor={'white'}
                justifyContent={'center'}
                py={{ base: '30pt', sm: '40pt', md: '50pt', lg: '60pt' }}
                px={{ base: '20pt', sm: '30pt', md: '40pt', lg: '100pt' }}
                alignItems={'center'}
                color='white'
                fontWeight={'bold'}
                direction='column'
                overflow={'hidden'}
                position='relative'
            >
                <Flex
                    position={'absolute'}
                    opacity={0.3}
                    fontSize={'30vw'}
                    top={{ base: '1%', md: '0%', lg: '5%', xl: '10%' }}
                    color='transparent'
                    lineHeight={0}
                    style={{
                        WebkitTextStroke: '1px gray'
                    }}
                    userSelect='none'
                    zIndex='1'
                >
                    FREE
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
                    FREE HELP
                </Text>
                <Flex color={'black'}>
                    <Flex
                        direction={'column'}
                    >
                        <Text
                            fontSize={{ base: '20px', sm: '30px', md: '38px', lg: '48px' }}
                            my='20px'
                        >
                            WEIGHT LOSS TIPS
                        </Text>
                        <Text>
                            Here are the best TIPS I can provide you guys to lose weight :
                        </Text>
                        <ul style={{ fontWeight: 400, lineHeight: 2 }}>
                            <li>
                                Be in a Calorie Deficit
                                Eating right or wrong while in a calorie deficit in any case you will lose weight .
                                Nutritious food can make your body look better .
                                More portein Will save your muscles while losing weight .
                                But basically if your goal is just weight loss maintaining a calorie deficit of (200-500) calories can help you out .
                            </li>
                            <li>
                                Eat food that fills you up for a long time and has lower amount of calories .Any  food item that has more amount of protein can help .
                            </li>
                            <li>
                                Drink more water,
                                Water Will keep you hydrated .
                                Helps you loose stubborn fat
                                And never lets the fat cells stored .
                                (Drink atleast 2 gallons a day ).
                            </li>
                            <li>
                                Diet coke (or any other diet drink) its low in calories and can suppress cravings.
                            </li>
                            <li>
                                Chew a gum
                                It’s the best way you can suppress cravings .
                            </li>
                            <li>
                                Snack less or have healthy alternatives *have a good training plan
                                (I can help you with this I sell proper customised plans according to your daily needs)
                            </li>
                            <li>
                                ANY KIND OF PHYSICAL ACTIVITY LIKE WALKING ,RUNNING ,STRENGTH TRAINING ,HIIT CARDIO (I provide proper customised workout plans too join ( get started ka button ) for proper results )
                            </li>
                        </ul>
                        <Text
                            fontSize={{ base: '20px', sm: '30px', md: '38px', lg: '48px' }}
                            my='20px'
                        >
                            Want to Gain Weight?
                        </Text>
                        <ul style={{ fontWeight: 400, lineHeight: 2 }}>
                            <li> *Be in a Calorie Surplus: No matter what you eat if you are in a calorie surplus you will gain weight in any case. Nutritious food will help with your gut health and will allow you to eat more. But in any case being in a calorie surplus of 200-500 calories will Help you out
                            </li>
                            <li>
                                *Eat calorie dense foods like nuts and nut butters .
                            </li>
                            <li>
                                *Drink more high calorie drinks: As shakes and juices are enjoyable and easily consumable drinking your calories will Help you being in a calorie surplus easily . ( I make really tasty shakes and add these to my customised diet too you can have the recipes join me)
                            </li>
                            <li>
                                *have a good training plan (I can help you with this I sell really good ones)
                            </li>
                            <li>
                                *Snack more with higher calorie snacks
                            </li>
                            <li>
                                *Have more Protein: 1g of protein per lb of bodyweight.
                            </li>
                            <li>
                                *Train with progressive overload and to failure to maximise muscle growth .
                            </li>
                        </ul>
                        <Text
                            fontSize={{ base: '20px', sm: '30px', md: '38px', lg: '48px' }}
                            my='20px'
                        >
                            Body recomposition
                        </Text>

                        <ul style={{ fontWeight: 400, lineHeight: 2 }}>
                            <li>
                                *eat at maintenance calories
                            </li>
                            <li>*1g of protein per lb of bodyweight</li>
                            <li>*train to failure and use progressive overload</li>
                            <li>*priorities recovery have a good training plan (I can help you with this I sell really good online plans</li>
                        </ul>
                        <Text
                            fontSize={{ base: '20px', sm: '30px', md: '38px', lg: '48px' }}
                            my='20px'
                        >
                            IMPORTANT MESSAGE
                        </Text>
                        <ul style={{ fontWeight: 400, lineHeight: 2 }}>
                            <li>All forms of exercise carry a risk of injury. Therefore, by following a training programme without us  you do so at your own risk.
                            </li>
                            <li>
                                No exercises should be performed if you are unsure about correct form, you should seek in-person advice from a qualified trainer.
                            </li>
                            <li>
                                Consult a medical professional before undertaking any exercise programme.
                            </li>
                            <li>
                                Results will primarily depend on factors such as your personal commitment, exercise history, genetics and other factors.
                            </li>
                        </ul>

                        <Text mt={'20px'}>
                            If you think these TIPS helped you, imagine what a full training plan can do join
                            For better results in less period of time .
                        </Text>
                        <GetStarted />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}    
