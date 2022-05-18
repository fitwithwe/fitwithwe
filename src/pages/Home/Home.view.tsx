
import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import Banner from "./components/Banner";
import MovingLine from "./components/MovingLine";
import { useHomeContext } from "./utils/context";

export default function HomeView() {
    const { count } = useHomeContext();
    return (
        <Flex direction={'column'}>
            <Banner />
            <MovingLine />
        </Flex>
    );
}    
