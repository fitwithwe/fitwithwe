import { Flex, Input, Textarea, Text } from "@chakra-ui/react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

export default function ContactBox() {
    const form = useRef();
    const onSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_k0efnm8', 'template_l3e0bvp', form.current, 'lZ-Fprmhgxy7EBh0N')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        alert("Contacted Successfully")
    }
    return (
        <>
            <Flex
                bgColor={'#181818'}
                color='#BFBFBF'
                direction='column'
                p={{ base: '24px 40px 40px 40px', lg: '34px 50px 50px 50px' }}
                m={{ base: '30px 15px 0px 0px', lg: '30px 15px 0px 15px' }}
            >
                <Flex
                    fontSize={{ base: '15pt', sm: '20pt', md: '25pt', lg: '32pt' }}
                    fontWeight='bold'
                    color={'white'}
                >
                    Contact us
                </Flex>
                <Text
                    fontSize={{ base: '11px', sm: '12px', md: '13px', lg: '14px' }}
                    mb='16px'
                    mt={'4px'}
                >
                    Your email address will not be published. Required fields are marked *
                </Text>
                <form ref={form} onSubmit={onSubmit}>
                    <Flex
                        direction={'column'}
                        gridGap={'20px'}
                        color='#BFBFBF'
                    >
                        <Input
                            name="user_name"
                            placeholder='Your Name *'
                            borderRadius='0'
                            p='0'
                            border={'none'}
                            borderBottom='1px solid #BFBFBF'
                            isRequired
                        />
                        <Input
                            type='email'
                            p='0'
                            name="user_email"
                            placeholder='Your Email *'
                            borderRadius='0'
                            border={'none'}
                            borderBottom='1px solid #BFBFBF'
                            isRequired
                        />
                        <Textarea
                            name="message"
                            p='0'
                            placeholder='Message...'
                            borderRadius='0'
                            borderBottom='1px solid #BFBFBF'
                            border={'none'}
                        />
                        <Input
                            mt='30px'
                            alignSelf={'start'}
                            borderRadius='0'
                            w='200px'
                            h='50px'
                            p={{ base: '6px', sm: '7px', md: '9px', lg: '10px' }}
                            letterSpacing={{ base: '1px', sm: '2px', md: '2px', lg: '2px' }}
                            justifyContent='center'
                            border={'none'}
                            bgColor='#3c8599'
                            color='white'
                            type={'submit'}
                            fontWeight='bold'
                            value='Send a Message'
                            cursor={'pointer'}
                            transition='0.3s ease-out'
                            _hover={{
                                color: 'black',
                                bgColor: 'white',
                                transition: '0.3s ease-in'
                            }}
                        />
                    </Flex>
                </form>
            </Flex>
        </>
    )
}