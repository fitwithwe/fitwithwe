
import React from "react";
import { useFreePlanContext } from "./utils/context";

export default function FreePlanView() {
    const { count } = useFreePlanContext();
    return <p>FreePlan View and count is {count}</p>;
}    
