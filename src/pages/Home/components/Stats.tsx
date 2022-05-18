import { Flex, Text, Image, GridItem, Grid } from "@chakra-ui/react";

const items = [
    {
        title: 'Years of<br/> Experience',
        ans: '4'
    },
    {
        title: 'Skilled <br/>Trainers',
        ans: '4'
    },
    {
        title: 'Calories <br/>Burned',
        ans: '5k'
    },
    {
        title: 'Happy <br/>Members',
        ans: '40'
    }
]

export default function Stats() {
    return (
        <Flex
            bgColor={'#3c8599'}
            justifyContent={'center'}
            py={{ base: '10pt', sm: '20pt', md: '30pt', lg: '40pt' }}
            alignItems={'center'}
            color='white'
            fontWeight={'bold'}
        >
            <Grid
                templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)' }}
                w={{ base: '95%', sm: '90%', md: '85%', lg: '80%' }}
            >
                {items.map((row, id) => (
                    <GridItem
                        key={id}
                        position='relative'
                    >
                        <Flex
                            alignItems={'center'}
                            justifyContent='center'
                            pl={'50px'}
                            zIndex={50}
                        >
                            <Text
                                fontSize={{ base: '60px', sm: '64px', md: '68px', lg: '72px' }}
                            >
                                {row.ans}
                            </Text>
                            <Text
                                fontWeight={'normal'}
                                m={{base:'0 2px 0 4px',lg:'0 4px 0 16px'}}
                                fontSize={{ base: '15px', sm: '16px', md: '17px', lg: '18px' }}
                                dangerouslySetInnerHTML={{ __html: row.title }}
                                lineHeight={1.5}
                            />
                        </Flex>
                        <Flex
                            position={'absolute'}
                            top={'50%'}
                            opacity={0.1}
                            left={'30%'}
                            // color='transparent'
                            // zIndex={-1}
                            textShadow={'1px 1px 3px #090909'}
                            fontSize={{ base: '90px', sm: '110px', md: '130px', lg: '150px' }}
                            lineHeight={0}
                        >
                            {row.ans}
                        </Flex>
                    </GridItem>
                ))}
            </Grid>
        </Flex>
    )
}