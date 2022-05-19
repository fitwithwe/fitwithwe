import { Flex, Text } from "@chakra-ui/react";
import { BsDot } from 'react-icons/bs'

declare global {
    namespace JSX {
      interface IntrinsicElements {
        marquee: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      }
    }
  }

export default function MovingLine() {
    const line = "MAKE REAL RESULTS HAPPEN. MORE THAN WORKOUT"
    return (
        <Flex
            h='60px'
            borderTop={'1px solid #181818'}
            borderBottom={'1px solid #181818'}
            alignItems='center'
            overflowX={'hidden'}
            wrap={'nowrap'}
            flexWrap='nowrap'
            letterSpacing={'2px'}
            fontSize='18px'
            bgColor={'white'}
        >
            <Flex minW='100vw'>
                <marquee>
                    <Flex alignItems={'center'}>
                        {Array.from({ length: 100 }, x => (
                            <Flex alignItems={'center'} w='600px'>
                                <Text>{line}</Text>
                                <Flex fontSize={'30px'} color='rgb(51,167,181)'>
                                    <BsDot />
                                </Flex>
                            </Flex>
                        ))}
                    </Flex>

                </marquee>
            </Flex>
        </Flex>
    )
}