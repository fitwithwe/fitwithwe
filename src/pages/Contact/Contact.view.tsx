
import { Flex } from "@chakra-ui/react";
import React from "react";
import PageHeader from "../../components/PageHeader";
import ContactSection from "./components/ContactSection";

export default function ContactView() {
    return (
        <Flex
            w='100%'
            direction={'column'}
            bgImage={'url("/contactbg.jpeg")'}
            bgAttachment='fixed'
            bgSize={{base:'100vw 40vh',sm:'100vw 50vh',md:'100vw 60vh',lg:'100vw 70vh',xl:'100vw 80vh'}}
            bgRepeat='no-repeat'
        >
            <PageHeader name="Contact us" />
            <ContactSection/>
        </Flex>
    )
}    
