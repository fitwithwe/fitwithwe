
import React from "react";
import { AppLayout } from "../../components/AppLayout";
import PricingView from "./Pricing.view";
import { PricingContext } from "./utils/context";

export default function PricingContainer() {
    const [count, setCount] = React.useState(1);
    return (
        <AppLayout>
            <PricingContext.Provider
                value={{
                    count: count,
                }}
            >
                <PricingView />
            </PricingContext.Provider>
        </AppLayout>
    );
}
