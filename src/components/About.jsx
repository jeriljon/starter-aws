import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="mobile.png"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <p>
              Design & development studio turning ideas into reality. 
              <ul>
                <li>Wireframes and Prototypes</li>
                <li>UI & UX Design</li>
                <li>Mobile Apps</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
