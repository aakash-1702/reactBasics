import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card.jsx";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        {" "}
        Tailwind with Vite
      </h1>
      <Card userName="Akash" />
      <Card userName="Amber" />
      <Card userName="Rana Bhai" />
      <Footer />
    </>
  );
}

export default App;
