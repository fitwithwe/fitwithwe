import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Flex,Text } from "@chakra-ui/react"
import { whatsapp_data } from "../../../utils/whatsapp_data"

export default function GetStarted() {
    return (
        <Flex
            fontSize={{ base: '12px', sm: '13px', md: '14px', lg: '15px' }}
            fontWeight='bold'
            color='white'
            mt={'20px'}
            cursor={'pointer'}
            bgColor='#3c8599'
            w={{ base: '120px', sm: '140px', md: '160px', lg: '180px' }}
            alignItems={'center'}
            p={{ base: '2px', sm: '4px', md: '6px', lg: '8px' }}
            letterSpacing={{ base: '1px', sm: '2px', md: '2px', lg: '2px' }}
            onClick={() => {
                window.open(whatsapp_data.number, "_self")
            }}
            justifyContent='center'
            transition='0.3s ease-out'
            _hover={{
                color: 'black',
                bgColor: 'white',
                transition: '0.3s ease-in'
            }}
        >
            <Text mr={'5px'}>Get Started</Text> <ArrowForwardIcon />
        </Flex>
    )
}