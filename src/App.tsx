import React from "react";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Gallery />
    </>
  );
}

export default App;
