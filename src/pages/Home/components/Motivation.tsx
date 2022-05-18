import { Flex, Text, Image, Grid, GridItem } from "@chakra-ui/react";

const items = [
    {
        title: 'Motivate',
        desc: "It's one of the best methods of combining the independence and initiative of indivisual ownership",
        num: "01"
    },
    {
        title: 'Workout',
        desc: "It's one of the best methods of combining the independence and initiative of indivisual ownership",
        num: "02"
    },
    {
        title: 'Result',
        desc: "It's one of the best methods of combining the independence and initiative of indivisual ownership",
        num: "03"
    }
]

export default function Motivation() {
    return (
        <Flex
            bgColor={'white'}
            justifyContent={'center'}
            py={{ base: '10pt', sm: '20pt', md: '30pt', lg: '40pt' }}
            alignItems={'center'}
        >
            <Grid
                templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' }}
                w={{ base: '95%', sm: '90%', md: '85%', lg: '80%' }}
            >
                {items.map((row, id) => (
                    <GridItem
                        key={id}
                        p={{ base: '10px', sm: '20px', md: '40px', lg: '60px' }}
                        position={'relative'}
                        cursor={'crosshair'}
                    >
                        <Flex
                            position={'absolute'}
                            fontSize={{ base: '20px', sm: '30px', md: '50px', lg: '70px' }}
                            opacity={0.3}
                            top={0}
                            left={0}
                            color='white'
                            style={{
                                WebkitTextStroke: '1px gray'
                            }}
                        >
                            {row.num}
                        </Flex>
                        <Flex
                            fontWeight={'500'}
                            lineHeight={1.5}
                            fontSize={{ base: '18px', md: '20px', lg: '25px' }}
                            mb={'7px'}
                        >
                            {row.title}
                        </Flex>

                        <Flex
                            mb={'20px'}
                            fontSize={{ base: '12px', md: '14px', lg: '16px' }}
                            letterSpacing={'2px'}
                        >
                            {row.desc}
                        </Flex>
                    </GridItem>
                ))}
            </Grid>
        </Flex>
    )
}