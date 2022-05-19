
import React from "react";
import { AppLayout } from "../../components/AppLayout";
import FreePlanView from "./FreePlan.view";
import { FreePlanContext } from "./utils/context";

export default function FreePlanContainer() {
    const [count, setCount] = React.useState(1);
    return (
        <AppLayout>
            <FreePlanContext.Provider
                value={{
                    count: count,
                }}
            >
                <FreePlanView />
            </FreePlanContext.Provider>
        </AppLayout>
    );
}
