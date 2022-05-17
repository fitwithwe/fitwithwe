
import React from "react";
import HomeView from "./Home.view";
import { HomeContext } from "./utils/context";

export default function HomeContainer() {
    const [count, setCount] = React.useState(1);
    return (
    <HomeContext.Provider
        value={{
        count: count,
        }}
    >
        <HomeView />
    </HomeContext.Provider>
    );
}
