
import { Flex } from "@chakra-ui/react";
import PageHeader from "../../components/PageHeader";
import Stats from "../../components/Stats";

export default function AboutView() {
    return (
        <Flex w='100%' direction={'column'} bgImage={'url("/aboutbg.jpeg")'} bgAttachment='fixed' bgSize={'100% 100%'}>
            <PageHeader name="About us"/>
            <Stats />
        </Flex>
    )
}    
