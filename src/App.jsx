import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  const [number, setNumber] = useState(0);
  const [card, setCard] = useState(false);
  const ShowCard = () => {
    setCard(!card);
  };
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
      <Navbar prodouctNumber={number} showCared={ShowCard} />
      <Main Plus={Plus} Minus={Minus} number={number} card={card} />
    </>
  );
}

export default App;
