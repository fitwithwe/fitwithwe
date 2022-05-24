import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Flex, Text, Image } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

export default function AboutUs() {
    const history = useHistory()
    return (
        <Flex
            direction={{ base: 'column', lg: 'row' }}
            justifyContent='center'
            alignItems={'center'}
            bgColor='white'
            py={{ base: '50pt', sm: '60pt', md: '70pt', lg: '80pt' }}
            px={{ base: '20pt', sm: '30pt', md: '40pt', lg: '50pt' }}
            gridRowGap={'20px'}
            gridColumnGap='100px'
        >
            <Flex
                w='55%'
                justifyContent={'end'}
                overflow='hidden'
                display={{ base: 'none', lg: 'inherit' }}
            >
                <Flex w='80%'>
                    <Image src="https://res.cloudinary.com/dis12nayi/image/upload/v1653380755/2_vqsit2.jpg" w='100%' />
                </Flex>
            </Flex>
            <Flex
                direction={'column'}
                w={{ base: '100%', lg: '50%' }}
            >
                <Flex>
                    <Text
                        color={'white'}
                        bgColor={'black'}
                        lineHeight='25px'
                        letterSpacing={'8px'}
                        px={{ base: '1px', md: '2px' }}
                        fontSize={{ base: '10px', sm: '12px', md: '14px', lg: '16px' }}
                    >
                        ABOUT US
                    </Text>
                </Flex>
                <Text
                    fontSize={{ base: '24px', sm: '32px', md: '40px', lg: '48px' }}
                    color={'#181818'}
                    mt='15px'
                    lineHeight={{ base: '30px', sm: '40px', md: '50px', lg: '60px' }}
                    fontWeight={'600'}
                >
                    Your life is healthier & happier with FitWith.We.
                </Text>
                <Text
                    fontSize={{ base: '13px', sm: '14px', md: '15px', lg: '16px' }}
                    color={'#181818'}
                    my='16px'
                    w={{base:'100%',md:'90%'}}
                >
                    Celebrating over 4 years in this industry, FithWith.We helps to transform lives every day through fitness. Offering a welcoming environment for members to achieve the results they’re looking for.
                </Text>
                <Flex
                    fontSize={{ base: '14px', sm: '16px', md: '18px', lg: '20px' }}
                    fontWeight='bold'
                    color='white'
                    cursor={'pointer'}
                    mt='16px'
                    bgColor='#3c8599'
                    w={{ base: '200px', sm: '220px', md: '240px', lg: '260px' }}
                    alignItems={'center'}
                    p={{ base: '6px', sm: '7px', md: '9px', lg: '10px' }}
                    letterSpacing={{ base: '1px', sm: '2px', md: '2px', lg: '2px' }}
                    justifyContent='center'
                    transition='0.3s ease-out'
                    _hover={{
                        bgColor: 'black',
                        transition: '0.3s ease-in'
                    }}
                    onClick={()=>history.push("/pricing")}
                >
                    <Text mr={'5px'}>Become a member</Text> <ArrowForwardIcon />
                </Flex>
                <Flex w='100%' justifyContent={'center'}>
                    <Flex
                        w={{ base: '100%', sm: '80%', md: '60%' }}
                        display={{ base: 'inherit', lg: 'none' }}
                        mt='50px'
                        justifyContent={'center'}
                    >
                        <Image src="https://res.cloudinary.com/dis12nayi/image/upload/v1653380756/website_xxohtk.jpg" w='100%' />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}