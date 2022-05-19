
import { Flex } from "@chakra-ui/react";
import PageHeader from "../../components/PageHeader";
import Stats from "../../components/Stats";
import MovingLine from "../Home/components/MovingLine";
import AboutOffer from "./components/AboutOffer";
import AboutUs from "./components/AboutUs";

export default function AboutView() {
    return (
        <Flex
            w='100%'
            direction={'column'}
            bgImage={'url("/aboutbg.jpeg")'}
            bgAttachment='fixed'
            bgSize={{base:'100vw 40vh',sm:'100vw 50vh',md:'100vw 60vh',lg:'100vw 70vh',xl:'100vw 80vh'}}
            bgRepeat='no-repeat'
        >
            <PageHeader name="About us"/>
            <AboutUs/>
            <AboutOffer/>
            <MovingLine/>
        </Flex>
    )
}    
