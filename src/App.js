import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";

const HelloContext = React.createContext();
// {
//   Provider: Object,
//   Consumer: Object,
//   ...other stuff
// }

const HelloDisplay = () => {
  const name = useContext(HelloContext);
  return <h1>Hello, {name}!</h1>;
};

const App = () => {
  return (
    <HelloContext.Provider value={"David"}>
      <HelloDisplay />
    </HelloContext.Provider>
  );
};

export default App;
