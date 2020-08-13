import React from "react";
import carrusel1 from "../resource/carrusel.jpg";
import carrusel2 from "../resource/carrusel2.jpg";
import carrusel3 from "../resource/carrusel3.jpg";
import { Carousel } from "react-bootstrap";
import icon1 from "../resource/content1.png";
import "./common.css";

export default function Carrousel() {
  return (
    <div>
      <header class="masthead">
        <div class="container d-flex h-100 align-items-center">
          <div class="mx-auto text-center">
            <h1 class="mx-auto my-0 text-uppercase">BlueHubble</h1>
            <h2 class="text-white-50 mx-auto mt-2 mb-5"></h2>
            <a class="btn btn-info js-scroll-trigger" href="#about">
              Get Started
            </a>
          </div>
        </div>
      </header>
      <section class="about-section text-center" id="about">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <h2 class="text-white mb-4">Nosotros</h2>
              <p class="text-white-50">
                BlueHubble® está desarrollado bajo un modelo, vista y
                controlador que permite integrar en una única plataforma miles
                de elementos de red, independiente de la capa o fabricante. La
                geolocalización de los distintos elementos de red permite
                identificar rápidamente la causa de los problemas, asimilar la
                topología de red integrada simplificando la relación entre los
                enlaces DWDM y la capa IP de datos.
              </p>
            </div>
          </div>
          <img class="img-fluid img-why" src={icon1} alt="" />
        </div>
      </section>
    </div>
  );
}
