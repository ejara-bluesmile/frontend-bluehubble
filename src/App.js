import React from "react";
import NavBar from "./components/navBar";
import Carrusel from "./components/carousel";
import Product from "./components/product";
import Gallery from "./components/gallery";
import Team from "./components/team";
import Contact from "./components/contact";
import Footer from "./components/footer";
import "./components/common.css";

function App() {
  return (
    <div className="">
      <NavBar />
      <Carrusel />
      <Product />
      <Gallery />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
