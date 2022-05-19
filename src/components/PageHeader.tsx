import { Flex, Text } from "@chakra-ui/react";

export default function PageHeader({name}:{name:string}) {
    return (
        <>
            <Flex
                w={'100%'}
                py={{ base: '40pt', sm: '60pt', md: '80pt', lg: '100pt' }}
                direction='column'
                justifyContent={'center'}
                alignItems='center'
                color={'white'}
                fontWeight='700'
            >
                <Text
                    fontSize={{base:'20px',sm:'40px',md:'60px',lg:'80px'}}
                    letterSpacing='2px'
                >
                    {name}
                </Text>
                <Text
                    fontSize={{base:'12px',sm:'14px',md:'16px',lg:'18px'}}
                    letterSpacing={{base:'3px',sm:'4px',md:'5px',lg:'6px'}}
                    fontWeight={'400'}
                >
                    HOME / <span style={{textDecoration:'underline', lineHeight:1.5}}>{(name+"").toUpperCase()}</span>
                </Text>
            </Flex>
        </>
    )
}