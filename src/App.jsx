import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/experience";
import Contact from "./components/Contact";
import Projects from "./components/Projects";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Projects" element={<Projects />}></Route>
      <Route path="/Experience" element={<Experience />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
    </Routes>
  );
}

export default App;
