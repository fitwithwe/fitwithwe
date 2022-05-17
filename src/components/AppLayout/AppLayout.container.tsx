
import React, { ReactNode } from "react";
import AppLayoutView from "./AppLayout.view";
import { AppLayoutContext } from "./utils/context";

export default function AppLayoutContainer({children}:{children:ReactNode}) {
    return (
    <AppLayoutContext.Provider
        value={{
        children
        }}
    >
        <AppLayoutView />
    </AppLayoutContext.Provider>
    );
}
