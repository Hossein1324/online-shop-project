import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  const [number, setNumber] = useState(0);
  const [card, setCard] = useState(false);
  const [prodouctNumber, setProdouctNumber] = useState(0);
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
  const Prodouct = () => {
    if (number === 0) {
      alert("داداش یه چیزی بخر");
    }
    setProdouctNumber(prodouctNumber + number);
  };
  const Remove = () => {
    setProdouctNumber(0);
  };
  return (
    <>
      <Navbar prodouctNumber={prodouctNumber} showCared={ShowCard} />
      <Main
        Plus={Plus}
        Minus={Minus}
        number={number}
        card={card}
        addCard={Prodouct}
        cardNumber={prodouctNumber}
        RemoveProducts={Remove}
      />
    </>
  );
}

export default App;
