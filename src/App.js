import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./styles/global.css";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="container mx-auto p-6 min-h-screen flex flex-col justify-between">
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

