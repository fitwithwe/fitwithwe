
import React from "react";

export const TransformationContext = React.createContext(null);

export const useTransformationContext = () => {
  const context = React.useContext(TransformationContext);
  if (!context)
    throw new Error("useTransformationContext can not be used outside it's provider");
  return context;
};
