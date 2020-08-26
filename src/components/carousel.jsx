import React from "react";
import icon1 from "../resource/ISOTIPO.png";
import blue from "../resource/logo-transparente-1.png";
import iconman from "../resource/inge.png";
import "./common.css";

export default function Carrousel() {
  return (
    <div>
      <header class="masthead">
        <div class="container d-flex h-100 align-items-center">
          <div class="mx-auto text-center">
            <img className="" src={blue} alt="" />
            {/* <h1 class="mx-auto my-0 text-uppercase">BlueHubble</h1> */}
            <h2 class=" mx-auto mt-2 mb-5">Supervises - Predicts - Unifies</h2>
            <a class="btn btn-info js-scroll-trigger" href="#about">
              Get Started
            </a>
          </div>
        </div>
      </header>
      <div className="content-iconMan">
        <img className="img-fluid icon-man " src={iconman} alt="" />
      </div>

      <section class="about-section text-center" id="about">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto nosotros">
              <h2 class="text-white mb-4">Nosotros</h2>
              <p class="text-white">
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
          <img class="img-fluid img-why icon-index" src={icon1} alt="" />
        </div>
      </section>
    </div>
  );
}
