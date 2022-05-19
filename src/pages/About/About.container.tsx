
import React from "react";
import { AppLayout } from "../../components/AppLayout";
import AboutView from "./About.view";
import { AboutContext } from "./utils/context";

export default function AboutContainer() {
    return (
        <AppLayout>
            <AboutContext.Provider
                value={{
                }}
            >
                <AboutView />
            </AboutContext.Provider>
        </AppLayout>
    );
}
