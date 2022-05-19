import { Flex, Text, Image, Button, Input } from "@chakra-ui/react";
import { AiOutlinePhone } from "react-icons/ai";
import { icon, whatsapp_data } from "../../../utils/whatsapp_data";
import ContactBox from './ContactBox'

export default function ContactSection() {
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
                position={'absolute'}
                opacity={0.2}
                fontSize={'15vw'}
                top={{ base: '30%', md: '30%', lg: '40%' }}
                color='transparent'
                lineHeight={0}
                style={{
                    WebkitTextStroke: '1px gray'
                }}
                userSelect='none'
                zIndex='1'
            >
                FitWith.We
            </Flex>
            <Flex
                direction={'column'}
                width={{ base: '100%', lg: '50%', xl: '40%' }}
                zIndex={99}
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
                        ABOUT
                    </Text>
                </Flex>
                <Flex>
                    <Text
                        fontSize={{ base: '24px', sm: '26px', md: '28px', lg: '30px' }}
                        mt='20px'
                        fontWeight={'600'}
                    >
                        Find us here. Make real results happen.
                    </Text>
                </Flex>
                <Flex>
                    <Text
                        fontSize={{ base: '13px', sm: '14px', md: '15px', lg: '16px' }}
                        color={'#181818'}
                        mb='16px'
                        mt={'4px'}
                        w={{ base: '100%', md: '90%' }}
                    >
                        Get in touch to discuss your employee wellbeing needs today. Please give us a call, drop us an email or fill out the contact form.
                    </Text>
                </Flex>
                <Flex>
                    <Flex>
                        {icon.map((row, id) => (
                            <Flex
                                key={id}
                                h='56px'
                                w={'56px'}
                                borderRadius='99px'
                                justifyContent={'center'}
                                border='1px solid'
                                alignItems='center'
                                transition={"0.3s ease-out"}
                                bgColor={'white'}
                                _hover={{
                                    bgColor: '#f5f3ed',
                                    color: '#2b2b2b',
                                    transition: "0.3s ease-in"
                                }}
                                cursor='pointer'
                                onClick={() => {
                                    window.open(row.link, "_self")
                                }}
                                mr='20px'
                            >
                                <row.img />
                            </Flex>
                        ))}
                        <Flex
                            h='56px'
                            w={'56px'}
                            borderRadius='99px'
                            justifyContent={'center'}
                            border='1px solid'
                            alignItems='center'
                            transition={"0.3s ease-out"}
                            bgColor={'white'}
                            _hover={{
                                bgColor: '#f5f3ed',
                                color: '#2b2b2b',
                                transition: "0.3s ease-in"
                            }}
                            cursor='pointer'
                            onClick={() => {
                                window.open(whatsapp_data.phone, "_self")
                            }}
                            mr='20px'
                        >
                            <AiOutlinePhone />
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex width={{ base: '100%', lg: '50%', xl: '40%' }} zIndex={99}>
                <ContactBox />
            </Flex>
        </Flex>
    )
}