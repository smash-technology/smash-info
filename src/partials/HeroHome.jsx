import React, { useState, useRef, useEffect } from "react";

import TeamImage from "../images/team-image.png";

function HeroHome() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20 flex">
          {/* Section header */}
          <div className="pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-5.5xl font-extrabold leading-tighter mb-12"
              data-aos="zoom-y-out"
            >
              Building career pathways in tech through professional
              project-based learning
            </h1>
            <div className="max-w-6xl mx-auto">
              {/* <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Building career pathways in tech through professional project-based learning
              </p> */}
              <div
                className="max-w-6xl sm:max-w-none"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <a
                    className="btn text-white bg-indigo-500 hover:bg-indigo-400 rounded-full w-full mb-4 sm:w-auto sm:mb-0"
                    href="#0"
                  >
                    Visit our platform
                  </a>
                </div>
              </div>
            </div>
          </div>
          <img
            className="rounded-md max-w-xl h-1/2 object-cover ml-16"
            src={TeamImage}
            alt="5 members of the Super Smash Bros. capstone team"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
