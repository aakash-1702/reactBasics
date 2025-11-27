import React, { useState } from 'react';

const BgColor = () => {
  const [bgColor, setBgColor] = useState("white");

  const colorClasses: Record<string, string> = {
    red: "bg-red-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
    white: "bg-white",
  };

  return (
    <div className={`h-screen ${colorClasses[bgColor]}`}>
      <h1>Click a button to change background color</h1>

      <div className="flex gap-4 mt-4">
        <button onClick={() => setBgColor('red')}>Red</button>
        <button onClick={() => setBgColor('blue')}>Blue</button>
        <button onClick={() => setBgColor('green')}>Green</button>
      </div>
    </div>
  );
};
export default BgColor;