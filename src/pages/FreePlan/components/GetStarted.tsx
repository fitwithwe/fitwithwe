import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Flex, Text } from "@chakra-ui/react"
import { whatsapp_data } from "../../../utils/whatsapp_data"

export default function GetStarted() {
    return (
        <Flex
            fontSize={{ base: '14px', sm: '16px', md: '18px', lg: '20px' }}
            fontWeight='bold'
            color='white'
            cursor={'pointer'}
            bgColor='#3c8599'
            w={{ base: '150px', sm: '170px', md: '190px', lg: '210px' }}
            alignItems={'center'}
            p={{ base: '6px', sm: '7px', md: '9px', lg: '10px' }}
            letterSpacing={{ base: '1px', sm: '2px', md: '2px', lg: '2px' }}
            onClick={() => {
                window.open(whatsapp_data.number, "_self")
            }}
            justifyContent='center'
            transition='0.3s ease-out'
            _hover={{
                color: 'white',
                bgColor: 'black',
                transition: '0.3s ease-in'
            }}
        >
            <Text mr={'5px'}>Get Started</Text> <ArrowForwardIcon />
        </Flex>
    )
}