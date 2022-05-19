
import React from "react";
import { AppLayout } from "../../components/AppLayout";
import TransformationView from "./Transformation.view";
import { TransformationContext } from "./utils/context";

export default function TransformationContainer() {
    const [count, setCount] = React.useState(1);
    return (
        <AppLayout>
            <TransformationContext.Provider
                value={{
                    count: count,
                }}
            >
                <TransformationView />
            </TransformationContext.Provider>
        </AppLayout>
    );
}
