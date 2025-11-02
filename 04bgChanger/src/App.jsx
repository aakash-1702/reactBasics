import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
    
      <div className="w-full h-screen flex flex-col items-center justify-center" style = {{backgroundColor : color}}>
        <h1>Color changer </h1>
        <button onClick={() => setColor("red")}>Red</button>
        <button onClick = {() => setColor("green")}>Green</button>
        <button onClick = {()=> setColor("olive")}>Reset Color</button>
        
      </div>
    </>
  );
}

export default App;
