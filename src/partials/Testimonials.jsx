import React from "react";
import Alaska from "../images/alaska.png";
import Amazon from "../images/amazon.png";
import Boeing from "../images/boeing.png";
import Microsoft from "../images/msft.png";
import Nike from "../images/nike.png";
import NYTimes from "../images/nyt.png";
import Starbucks from "../images/starbucks.png";
import Tableau from "../images/tableau.png";
import Tmobile from "../images/tmobile.jpg";

function Testimonials() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-40">
          {/* Section header */}
          <div
            className="max-w-3xl mx-auto text-center pb-12 md:pb-14"
            data-aos="zoom-y-out"
            data-aos-delay="300"
          >
            <h2 className="text-bold h2 mb-4">
              Partnered with top tech companies all over the U.S.
            </h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out"></p>
          </div>

          {/* Items */}
          <div
            className="max-w-sm md:max-w-4xl mx-auto flex flex-wrap space-x-8 justify-between"
            data-aos="zoom-y-out"
            data-aos-delay="300"
          >
            <img
              className="h-12 w-auto aspect-auto mb-12"
              src={Alaska}
              alt="alaska airlines logo"
            />
            <img
              className="h-12 w-auto aspect-auto mr-18 mb-12"
              src={Amazon}
              alt="amazon logo"
            />
            <img
              className="h-12 w-auto aspect-auto mr-18 mb-12"
              src={Boeing}
              alt="boeing logo"
            />
            <img
              className="h-12 w-auto aspect-auto mr-18 mb-12"
              src={Microsoft}
              alt="microsoft logo"
            />
            <img
              className="h-12 w-auto aspect-auto mr-18 mb-12"
              src={Nike}
              alt="nike logo"
            />
            <img
              className="h-12 w-auto aspect-auto mr-18 mb-12"
              src={NYTimes}
              alt="ny times logo"
            />
            <img
              className="h-12 w-auto aspect-auto mr-18 mb-12"
              src={Starbucks}
              alt="starbucks logo"
            />
            <img
              className="h-12 w-auto aspect-auto mr-18 mb-12"
              src={Tableau}
              alt="tableau logo"
            />
            <img
              className="h-12 w-auto aspect-auto mr-18 mb-12"
              src={Tmobile}
              alt="t-mobile logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
