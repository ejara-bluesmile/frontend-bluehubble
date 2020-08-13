import React from "react";
import blue from "../resource/bluehubble.png";

import "./common.css";

export default function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div class="container">
          <img src={blue} alt="" />

          <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#about">
                  Product
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#projects">
                  Team
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#signup">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#signup">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
