import React, { useState } from "react";
import styled from "styled-components";
import { NameProvider } from "./NameContext";
import HelloDisplay from "./components/HelloDisplay";

const AppWrapper = styled.div`
  width: 300px;
  margin: 0 auto;
  text-align: center;
`;

const Button = styled.button`
  font-size: 1.2rem;
  margin-right: 5px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: #efefef;
  }
  &:focus {
    outline: none;
  }
  &:active {
    background-color: #fff;
  }
`;

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
    <AppWrapper>
      <NameProvider value={name}>
        <HelloDisplay />
        <Button onClick={handleChangeName}>Change Name</Button>
        <Button onClick={handleResetName}>Reset</Button>
      </NameProvider>
    </AppWrapper>
  );
};

export default App;
