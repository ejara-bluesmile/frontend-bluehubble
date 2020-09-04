import React from "react";
import "./gallery.css";
import p1 from "../resource/galery/2.1.png";
import p2 from "../resource/galery/2.2.png";
import p3 from "../resource/galery/3.1.png";
import p4 from "../resource/galery/3.2.png";
import p5 from "../resource/galery/4.1.png";
import p6 from "../resource/galery/4.2.png";
import p7 from "../resource/galery/8.1.png";
import p8 from "../resource/galery/8.2.png";

export default function gallery() {
  return (
    <div class="container gallery">
      <h1>Gallery</h1>

      <hr class="mt-2 mb-5" />

      <div class="row text-center text-lg-left">
        <div class="col-lg-3 col-md-4 col-6">
          <a href="#" class="d-block mb-1 h-100">
            <img class="img-fluid img-gallery" src={p1} alt="" />
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <a href="#" class="d-block mb-1 h-100">
            <img class="img-fluid img-gallery " src={p2} alt="" />
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <a href="#" class="d-block mb-1 h-100 a-img">
            <img class="img-fluid img-gallery " src={p3} alt="" />
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <a href="#" class="d-block mb-1 h-100">
            <img class="img-fluid img-gallery " src={p4} alt="" />
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <a href="#" class="d-block mb-1 h-100">
            <img class="img-fluid img-gallery " src={p5} alt="" />
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <a href="#" class="d-block mb-1 h-100">
            <img class="img-fluid img-gallery " src={p6} alt="" />
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <a href="#" class="d-block mb-1 h-100">
            <img class="img-fluid img-gallery " src={p7} alt="" />
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <a href="#" class="d-block mb-1 h-100">
            <img class="img-fluid img-gallery " src={p8} alt="" />
          </a>
        </div>
      </div>
    </div>
    /* <div className="container-fluid">
      <div class="gallery" id="gallery">
        <div class="pics animation all 2">
          <div className="row ">
            <div className="col">
              <img class="img-fluid img-gallery" src={p1} alt="Card image cap" />
            </div>
            <div className="col">
              <img class="img-fluid img-gallery" src={p2} alt="Card image cap" />
            </div>
            <div className="col">
              <img class="img-fluid img-gallery" src={p3} alt="Card image cap" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img class="img-fluid img-gallery" src={p4} alt="Card image cap" />
            </div>
            <div className="col">
              <img class="img-fluid img-gallery" src={p5} alt="Card image cap" />
            </div>
            <div className="col">
              <img class="img-fluid img-gallery" src={p6} alt="Card image cap" />
            </div>
            <div className="col">
              <img class="img-fluid img-gallery" src={p7} alt="Card image cap" />
            </div>
          </div>
        </div>
      </div>
    </div> */
  );
}
