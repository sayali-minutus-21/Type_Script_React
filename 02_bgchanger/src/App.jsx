import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div style={{ backgroundColor:color, height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <h1>Click a button to change background color</h1>
      <div>
        <button style={{ backgroundColor: "red", color: "white", margin: "5px", padding: "10px" }} onClick={() => setColor("red")}>
          Red
        </button>
        <button style={{ backgroundColor: "yellow", margin: "5px", padding: "10px" }} onClick={() => setColor("yellow")}>
          Yellow
        </button>
        <button style={{ backgroundColor: "blue", color: "white", margin: "5px", padding: "10px" }} onClick={() => setColor("blue")}>
          Blue
        </button>
      </div>
    </div>
  );
}

export default App;