import { motion } from "framer-motion";
import './styles.css';
import { AnimatedButton, Example1, Example2, Examples } from './Examples';
import React, { HTMLAttributes } from "react";
import { styled } from '@stitches/react';
import { Counter } from './template/Counter';



const style = {};
export default function App() {
  const [counter, increase,] = React.useReducer((counter) => counter + 1, 0);
  return (

    <div className="App">
      {/* <Counter /> */}
    
      <h2>클릭 해보셈 고고고고</h2>
      <AnimatedButton />
      <RefreshButton onClick={increase}>새로고침!</RefreshButton>
  
      <Examples _={counter} />
    </div>

  );
}

const RefreshButton = styled("button", {
  position: "fixed",
  top: "30px",
  right: "20px",
  background: "linear-gradient(90deg,#ffa0ae 0%,#ffffff 75%)",
  borderRadius: "10px",
  width: "200px",
  height: "100px",
  fontSize: "2rem"
});

