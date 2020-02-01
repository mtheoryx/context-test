import React from "react";

const NameContext = React.createContext();

const NameProvider = props => {
  return (
    <NameContext.Provider value={"David"}>
      {props.children}
    </NameContext.Provider>
  );
};

export { NameContext, NameProvider };
