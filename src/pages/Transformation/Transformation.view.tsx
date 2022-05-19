
import React from "react";
import { useTransformationContext } from "./utils/context";

export default function TransformationView() {
    const { count } = useTransformationContext();
    return <p>Transformation View and count is {count}</p>;
}    
