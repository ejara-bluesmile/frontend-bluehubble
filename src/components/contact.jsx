import React from "react";
import imgpareja from "../resource/hombremujer.png";

export default function contact() {
  return (
    <div>
      <section class="contact-section" id="signup">
        <div class="container">
          <h1 className="text-center">Any Question?</h1>
          <i class="far fa-paper-plane fa-2x mb-2 text-white font-contact"></i>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div class="row">
            <div class="col-md-10 col-lg-8 mx-auto text-center">
              <form class="form-inline d-flex">
                <input
                  class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                  id="inputName"
                  type="Name"
                  placeholder="Enter Name..."
                />
                <input
                  class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                  id="inputEmail"
                  type="email"
                  placeholder="Enter email address..."
                />
              </form>
            </div>
          </div>
          <div className="col-md-10 col-lg-8 mx-auto text-center">
            <textarea
              className="w-100"
              name=""
              id=""
              cols="auto"
              rows="10"
            ></textarea>
          </div>
          <div>
            <button class="btn btn-info mx-auto" type="submit">
              Send
            </button>
          </div>
        </div>
        <div className="content-imgPareja">
          <img className="img-pareja img-fluid  " src={imgpareja} alt="" />
        </div>
      </section>
    </div>
  );
}
