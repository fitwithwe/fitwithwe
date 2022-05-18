import { Flex, Text, Image, GridItem, Grid } from "@chakra-ui/react";

const items = [
    {
        title: 'Years of<br/> Experience',
        ans: '04'
    },
    {
        title: 'Skilled <br/>Trainers',
        ans: '04'
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
            py={{ base: '50pt', sm: '50pt', md: '50pt', lg: '50pt' }}
            alignItems={'center'}
            color='white'
            fontWeight={'bold'}
        >
            <Grid
                templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)' }}
                w={{ base: '95%', sm: '90%', md: '85%', lg: '80%' }}
                rowGap='100px'
            >
                {items.map((row, id) => (
                    <GridItem
                        key={id}
                        position='relative'
                        justifyContent={'center'}
                    >
                        <Flex
                            alignItems={'center'}
                            pl={'50px'}
                            zIndex={50}
                            justifyContent='center'
                            gridColumnGap={'10px'}
                        >
                            <Text
                                fontSize={'72px'}
                            >
                                {row.ans}
                            </Text>
                            <Text
                                fontWeight={'normal'}
                                m={{ base: '0 2px 0 4px', lg: '0 4px 0 16px' }}
                                fontSize={'18px'}
                                dangerouslySetInnerHTML={{ __html: row.title }}
                                lineHeight={1.5}
                            />
                        </Flex>
                        <Flex
                            position={'absolute'}
                            top={'50%'}
                            opacity={0.3}
                            left={'20%'}
                            color='transparent'
                            fontSize={'200px'}
                            lineHeight={0}
                            style={{
                                WebkitTextStroke: '1px white'
                            }}
                        >
                            {row.ans}
                        </Flex>
                    </GridItem>
                ))}
            </Grid>
        </Flex>
    )
}