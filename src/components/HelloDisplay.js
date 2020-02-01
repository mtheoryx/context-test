import React from "react";
import { useNameContext } from "../NameContext";

const HelloDisplay = () => {
  const name = useNameContext();
  return <h1>Hello, {name}!</h1>;
};

export default HelloDisplay;
