import { Flex, Text, Image, GridItem, Grid } from "@chakra-ui/react";

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
                top='60%'
                color='transparent'
                lineHeight={0}
                style={{
                    WebkitTextStroke: '1px white'
                }}
            >
                SPORT
            </Flex>
            <Text
                color={'white'}
                bgColor={'#3c8599'}
                lineHeight='25px'
                letterSpacing={'8px'}
                px={{base:'1px',md:'2px'}}
                fontSize={{ base: '10px', sm: '12px', md: '14px', lg: '16px' }}
            >
                WHAT WE OFFER
            </Text>
            <Text
                 fontSize={{ base: '20px', sm: '30px', md: '38px', lg: '48px' }}
                mt='20px'
                textAlign={'center'}
            >
                The best standards<br /> anywhere.
            </Text>
            <Grid
                templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)' }}

            >
                <GridItem />
            </Grid>
        </Flex>
    )
}