import React from "react";
import { Card, Button } from "react-bootstrap";
import iconCard from "../resource/card.jpg";
import prod1 from "../resource/product5.jpg";
import prod2 from "../resource/dash.jpg";
import prod3 from "../resource/dash2.jpg";

export default function Product() {
  return (
    <div>
      <section class="projects-section bg-light" id="projects">
        <div class="container product">
          <h2>Productos</h2>
          <div class="row align-items-center no-gutters mb-4 mb-lg-5">
            <div class="col-xl-5 col-lg-7">
              <img class="img-fluid mb-3 mb-lg-0" src={prod1} alt="" />
            </div>
            <div class="col-xl-7 col-lg-5">
              <div class="featured-text text-center text-lg-left">
                <h4>Hubble Records</h4>
                <p class=" mb-0">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatibus vel rem similique inventore, velit iste impedit
                  tempore exercitationem. Praesentium explicabo illum error
                  perspiciatis iusto delectus inventore deleniti hic adipisci
                  facilis?
                </p>
              </div>
            </div>
          </div>
          <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
            <div class="col-lg-6">
              <img class="img-fluid" src={prod2} alt="" />
            </div>
            <div class="col-lg-6">
              <div class="product-text1 text-center project">
                <div class="d-flex">
                  <div class="project-text  my-auto text-center text-lg-left">
                    <h4 class="text-white">BlueHubble Live</h4>
                    <p class="mb-0 text-white-50">
                      Uno de los mayores retos para BlueHubble era hacer mas
                      amigable y simplificar el estado actual y futuro de la
                      red. BlueHubble Live permite en un dashbord en 4k observar
                      las métricas de las últimas 24 horas, métricas actuales y
                      métricas futuras en los enlaces de red. Este proceso es
                      realizado a través de técnicas de Big Data y Machine
                      Learning que permiten organizar la información o datos
                      extraídos para detectar problemas incluso antes de que
                      estos afecten el desempeño de su red.
                    </p>
                    <hr class="d-none d-lg-block mb-0 ml-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center no-gutters">
            <div class="col-lg-6">
              <img class="img-fluid h-100" src={prod3} alt="" />
            </div>
            <div class="col-lg-6 order-lg-first">
              <div class="product-text2 text-center h-100  project">
                <div class="d-flex ">
                  <div class="project-text h-100 my-auto text-center text-lg-right">
                    <h4 class="text-white">Hubble Analitics</h4>
                    <p class="mb-0 text-white-50">
                      Another example of a project with its respective
                      description. These sections work well responsively as
                      well, try this theme on a small screen!
                    </p>
                    <hr class="d-none d-lg-block mb-0 mr-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
