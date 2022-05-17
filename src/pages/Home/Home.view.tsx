
import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import MovingLine from "./components/MovingLine";
import { useHomeContext } from "./utils/context";

export default function HomeView() {
    const { count } = useHomeContext();
    return (
        <Flex direction={'column'}>
            <Flex>
                <Flex w='65%' bgColor={'#f5f2f2'}>
                    
                </Flex>
                <Flex w='35%' boxShadow={'-10px 0px 3px 0px #19191a'}>
                    <Image src="1.jpeg" w='100%' />
                </Flex>
            </Flex>
            <MovingLine />
        </Flex>
    );
}    
