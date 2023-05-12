import React, { useState, useRef, useEffect } from "react";

import TeamImage from "../images/team-image.png";
import { PrimaryPurple } from "./PrimaryPurple";
import ArrowEast from "./ArrowEast";

function HeroHome() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-24 pb-12 md:pt-40 md:pb-20 flex items-center">
          {/* Section header */}
          <div>
            <h1
              className="mb-16 text-5.5xl md:text-5xl font-extrabold leading-tighter"
              data-aos="zoom-y-out"
            >
              Building career pathways in tech through real-world
              project-based learning
            </h1>
            <div className="max-w-6xl mx-auto">
              <div
                className="max-w-6xl sm:max-w-none"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <PrimaryPurple href={"/"} role="button">
                    Visit our website
                    <ArrowEast width={18} position={-3.5} stroke={2} />
                  </PrimaryPurple>
                </div>
              </div>
            </div>
          </div>
          <img
            className="rounded-xl max-w-lg h-1/2 object-cover ml-16 pb-8"
            src={TeamImage}
            alt="2 people working together"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
