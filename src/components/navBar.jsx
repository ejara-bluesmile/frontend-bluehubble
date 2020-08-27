import React, { useState } from "react";
import blue from "../resource/logo-transparente-1.png";

import "./common.css";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div>
      <nav
        className={
          navbar ? "navbar active navbar-expand-lg" : "navbar navbar-expand-lg"
        }
        id="mainNav"
      >
        <div className="container">
          <div className="logo-hubble"></div>
          <img className="img-navbar" src={blue} alt="" />

          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">
                  Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#projects">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#team">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#signup">
                  Contact
                </a>
              </li>
              <button
                type="button"
                class="btn btn-login"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Login
              </button>
              <br />
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Login
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="form-group row">
                          <label
                            for="staticEmail"
                            class="col-sm-2 col-form-label"
                          >
                            Email
                          </label>
                          <div class="col-sm-12">
                            <input
                              type="text"
                              class="form-control"
                              id="inputEmail"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <label
                            for="inputPassword"
                            class="col-sm-2 col-form-label"
                          >
                            Password
                          </label>
                          <div class="col-sm-12">
                            <input
                              type="password"
                              class="form-control"
                              id="inputPassword"
                              placeholder="Password"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-info"
                        data-dismiss="modal"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                class="btn  btn-register"
                data-toggle="modal"
                data-target="#register"
              >
                Create Account
              </button>

              <div
                class="modal fade"
                id="register"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Register
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="form-group row">
                          <label
                            for="staticEmail"
                            class="col-sm-2 col-form-label"
                          >
                            Name
                          </label>
                          <div class="col-sm-12">
                            <input
                              type="text"
                              class="form-control"
                              id="inputName"
                              placeholder="Name"
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <label
                            for="staticEmail"
                            class="col-sm-2 col-form-label"
                          >
                            Email
                          </label>
                          <div class="col-sm-12">
                            <input
                              type="text"
                              class="form-control"
                              id="inputEmail"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <label
                            for="inputPassword"
                            class="col-sm-2 col-form-label"
                          >
                            Password
                          </label>
                          <div class="col-sm-12">
                            <input
                              type="password"
                              class="form-control"
                              id="inputPassword"
                              placeholder="Password"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-info"
                        data-dismiss="modal"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
