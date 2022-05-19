import { Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useAppLayoutContext } from "./utils/context";

export default function AppLayoutView() {
    const { children } = useAppLayoutContext();
    return (
        <>
            <Flex direction={'column'} fontFamily='Space Grotesk' overflowX={'hidden'} userSelect='none'>
                <Header />
                {children}
                <Footer />
            </Flex>
        </>
    )
}    
