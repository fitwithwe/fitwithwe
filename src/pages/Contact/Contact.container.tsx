
import React from "react";
import { AppLayout } from "../../components/AppLayout";
import ContactView from "./Contact.view";
import { ContactContext } from "./utils/context";

export default function ContactContainer() {
    const [count, setCount] = React.useState(1);
    return (
        <AppLayout>
            <ContactContext.Provider
                value={{
                    count: count,
                }}
            >
                <ContactView />
            </ContactContext.Provider>
        </AppLayout>
    );
}
