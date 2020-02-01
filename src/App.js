import React, { useState } from "react";
import { NameProvider } from "./NameContext";
import HelloDisplay from "./components/HelloDisplay";

const App = () => {
  const [name, setName] = useState("David");
  const handleChangeName = e => {
    e.preventDefault();
    if (name === "David") {
      setName("Robert");
    } else {
      setName("David");
    }
  };
  const handleResetName = e => {
    e.preventDefault();
    setName("David");
  };
  return (
    <NameProvider value={name}>
      <HelloDisplay />
      <button onClick={handleChangeName}>Change Name</button>
      <button onClick={handleResetName}>Reset</button>
    </NameProvider>
  );
};

export default App;
