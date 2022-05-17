
import { Flex } from "@chakra-ui/react";
import React from "react";
import { useHomeContext } from "./utils/context";

export default function HomeView() {
    const { count } = useHomeContext();
    return (
        <Flex fontFamily='Space Grotesk'>
            N M
        </Flex>
    );
}    
