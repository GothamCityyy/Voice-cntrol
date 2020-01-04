import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { MainView } from "./main";

function App() {
  return (
    <MainView />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
