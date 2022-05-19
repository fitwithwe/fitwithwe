
import { Flex } from "@chakra-ui/react";
import React from "react";
import PageHeader from "../../components/PageHeader";
import ContactSection from "./components/ContactSection";
import { useContactContext } from "./utils/context";

export default function ContactView() {
    return (
        <Flex w='100%' direction={'column'} bgImage={'url("/contactbg.jpeg")'} bgAttachment='fixed' bgSize={'100% 100%'}>
            <PageHeader name="Contact us" />
            <ContactSection/>
        </Flex>
    )
}    
