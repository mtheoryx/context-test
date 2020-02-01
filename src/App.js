import React, { useContext } from "react";
import { useNameContext, NameProvider } from "./NameContext";

const App = () => {
  return (
    <NameProvider value={"David"}>
      <HelloDisplay />
    </NameProvider>
  );
};

const HelloDisplay = () => {
  const name = useNameContext();
  return <h1>Hello, {name}!</h1>;
};

export default App;
