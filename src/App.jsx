import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  const [number, setNumber] = useState(0);
  const Plus = () => {
    setNumber((e) => e + 1);
  };
  const Minus = () => {
    setNumber((e) => e - 1);
    if (number === 0) {
      setNumber(0);
    }
  };
  return (
    <>
      <Navbar prodouctNumber={number} />
      <Main Plus={Plus} Minus={Minus} number={number} />
    </>
  );
}

export default App;
