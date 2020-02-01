import React from "react";

const NameContext = React.createContext();

const NameProvider = ({ value, children }) => {
  return <NameContext.Provider value={value}>{children}</NameContext.Provider>;
};

const useNameContext = () => {
  const context = React.useContext(NameContext);
  if (context === undefined) {
    throw new Error("useNameContext must be used within a NameProvider");
  }
  return context;
};

export { useNameContext, NameProvider };
