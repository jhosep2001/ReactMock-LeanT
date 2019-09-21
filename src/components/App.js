import React from 'react';
import '../styles/App.scss';
import NavBar from "../components/NavBar";
import Home from "./Home";

function App() {
  return (
    <div className="app-container">
        <NavBar />
        <Home />
    </div>
  );
}

export default App;
