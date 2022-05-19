
import { Flex, Text, Image, Grid } from "@chakra-ui/react";
import React from "react";
import PageHeader from "../../components/PageHeader";
import MovingLine from "../Home/components/MovingLine";
import { useTransformationContext } from "./utils/context";

export default function TransformationView() {
    const { count } = useTransformationContext();
    return (
        <Flex
            w='100%'
            direction={'column'}
            bgImage={'url("/transformationbg.jpeg")'}
            bgAttachment='fixed'
            bgSize={{ base: '100vw 40vh', sm: '100vw 50vh', md: '100vw 60vh', lg: '100vw 70vh', xl: '100vw 80vh' }}
            bgRepeat='no-repeat'
        >
            <PageHeader name="Transformation" />
            <Flex
                bgColor={'white'}
                justifyContent={'center'}
                py={{ base: '50pt', sm: '60pt', md: '70pt', lg: '80pt' }}
                alignItems={'center'}
                color='white'
                fontWeight={'bold'}
                direction='column'
                overflow={'hidden'}
                position='relative'
            >
                <Text
                    color={'white'}
                    bgColor={'#3c8599'}
                    lineHeight='25px'
                    letterSpacing={'8px'}
                    px={{ base: '1px', md: '2px' }}
                    fontSize={{ base: '10px', sm: '12px', md: '14px', lg: '16px' }}
                    alignItems='center'
                >
                    TRANSFORMATION
                </Text>
                <Grid
                    mt={'100px'}
                    templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)' }}
                    gap='20px'
                    zIndex='999'
                    justifyContent={'center'}
                >
                    {Array.from({ length: 6 }, (x, id) => {
                        if (id + 1 == 10) return null
                        return (
                            <Flex key={id}>
                                <Image w='100%' src={`/transformation/o${id + 1}.jpeg`} />
                            </Flex>
                        )
                    })}
                    {Array.from({ length: 12 }, (x, id) => {
                        if (id + 1 == 10) return null
                        return (
                            <Flex key={id}>
                                <Image w='100%' src={`/transformation/${id + 1}.jpeg`} />
                            </Flex>
                        )
                    })}
                </Grid>
            </Flex>
        </Flex>
    )
}    
