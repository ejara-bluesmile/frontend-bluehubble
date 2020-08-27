import React from "react";
import Icon from "../resource/6.jpg";
import Icon2 from "../resource/2.jpg";

import Icon3 from "../resource/1.jpg";
import blue from "../resource/bluesmile-icon.png";

export default function Team() {
  return (
    <div>
      <section class="team-section" id="team">
        <div class="container team">
          {/* <h1>Developed by:</h1> */}
          <img className="team-img" src={blue} alt="" />
          <div class="row">
            <div class="col-md-4 mb-3 mb-md-0">
              <img className="team-icon" src={Icon} alt="" />
              <div class="card ">
                <div class="card-body text-center">
                  <i class="fa fa-user-tie text-primary mb-2"></i>
                  <h4 class="text-uppercase m-0">Diego Quintana</h4>
                  <hr class="my-4" />
                  <div class="small">
                    unde veritatis dignissimos, eos labore alias repellat quam
                    dolore.
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3 mb-md-0">
              <img className="team-icon" src={Icon3} alt="" />
              <div class="card ">
                <div class="card-body text-center">
                  <i class="fa fa-user-tie text-primary mb-2"></i>
                  <h4 class="text-uppercase m-0">Sebastian Henao</h4>
                  <hr class="my-4" />
                  <div class="small ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3 mb-md-0">
              <img className="team-icon" src={Icon2} alt="" />
              <div class="card ">
                <div class="card-body text-center">
                  <i class="fa fa-user-tie text-primary mb-2"></i>
                  <h4 class="text-uppercase m-0">Cristian Robles</h4>
                  <hr class="my-4" />
                  <div class="small ">
                    Quod, expedita. Explicabo perferendis reprehenderit a
                    perspiciatis{" "}
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
