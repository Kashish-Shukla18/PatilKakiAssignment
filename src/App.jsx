import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Features from "./Components/Features";
import Timer from "./Components/Timer";
import Action from "./Components/Action";
import Form from "./Components/Form";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
          <NavBar/>
          <Hero/>
          <About />
          <Features />
          <Timer />
          <Action />
          <Form />
          <Footer />
    </Router>
  );
}

export default App;
