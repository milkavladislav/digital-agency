import React from "react";
import Blog from "./components/blog/Blog";
import Clients from "./components/clients/Clients";
import ContactUs from "./components/contact-us/ContactUs";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import OurTeam from "./components/our-team/OurTeam";
import Promotion from "./components/promotion/Promotion";
import Services from "./components/services/Services";
import Testimony from "./components/testimony/Testimony";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Promotion />
      <Blog />
      <OurTeam />
      <Testimony />
      <Clients />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
