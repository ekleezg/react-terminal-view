import React, { useState } from "react";
import Terminal from "./components/Terminal";

const App = () => {
  const [data, setData] = useState([
    "Welcome to the React Output Console - Terminal Style",
  ]);
  const css = {
    width: "600px",
    height: "300px",
  };
  return (
    <Terminal
      renderData={{ data: data, setData: setData }}
      terminalStyle={css}
    />
  );
};

export default App;
