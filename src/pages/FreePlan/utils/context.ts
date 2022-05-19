
import React from "react";

export const FreePlanContext = React.createContext(null);

export const useFreePlanContext = () => {
  const context = React.useContext(FreePlanContext);
  if (!context)
    throw new Error("useFreePlanContext can not be used outside it's provider");
  return context;
};
