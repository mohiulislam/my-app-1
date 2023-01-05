import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
function App() {
  return (
    <div className="App">
      <Nav />
      <div className="content">
        <Intro />
        <AboutMe />
      </div>
    </div>
  );
}
export default App;
