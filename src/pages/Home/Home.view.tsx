
import { Flex, Image, Stat } from "@chakra-ui/react";
import Banner from "./components/Banner";
import Motivation from "./components/Motivation";
import MovingLine from "./components/MovingLine";
import Stats from "./components/Stats";
import { useHomeContext } from "./utils/context";

export default function HomeView() {
    const { count } = useHomeContext();
    return (
        <Flex direction={'column'}>
            <Banner />
            <Motivation />
            <Stats/>
            <MovingLine />
        </Flex>
    );
}    
