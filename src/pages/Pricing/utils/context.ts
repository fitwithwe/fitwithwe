
import React from "react";

export const PricingContext = React.createContext(null);

export const usePricingContext = () => {
  const context = React.useContext(PricingContext);
  if (!context)
    throw new Error("usePricingContext can not be used outside it's provider");
  return context;
};
