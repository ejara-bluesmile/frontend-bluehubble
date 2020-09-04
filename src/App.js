import React from "react";
import NavBar from "./components/navBar";
import Carrusel from "./components/carousel";
import Product from "./components/product";
import Gallery from "./components/gallery";
import Galeria from "./components/galeria";
import Team from "./components/team";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="">
      <NavBar />
      <Carrusel />
      <Product />
      {/* <Gallery /> */}
      <Galeria />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
