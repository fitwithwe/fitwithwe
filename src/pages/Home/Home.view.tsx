
import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import Banner from "./components/Banner";
import Motivation from "./components/Motivation";
import MovingLine from "./components/MovingLine";
import { useHomeContext } from "./utils/context";

export default function HomeView() {
    const { count } = useHomeContext();
    return (
        <Flex direction={'column'}>
            <Banner />
            <Motivation />
            <MovingLine />
        </Flex>
    );
}    
