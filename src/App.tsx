import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Flowers from "./features/flowers/Flowers";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{ backgroundColor: "#f2f2f2" }}>
        <Flowers />
      </div>
    </div>
  );
}

export default App;
