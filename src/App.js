import React, { useContext } from "react";
import { NameContext, NameProvider } from "./NameContext";

const App = () => {
  return (
    <NameProvider value={"David"}>
      <HelloDisplay />
    </NameProvider>
  );
};

const HelloDisplay = () => {
  const name = useContext(NameContext);
  return <h1>Hello, {name}!</h1>;
};

export default App;
