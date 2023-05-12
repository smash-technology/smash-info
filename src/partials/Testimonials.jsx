import React from "react";
import Alaska from "../images/alaska.png";
import Amazon from "../images/amazon.png";
import Boeing from "../images/boeing.png";
import Microsoft from "../images/msft.png";
import NYTimes from "../images/nyt.png";
import Starbucks from "../images/starbucks.png";
import Tableau from "../images/tableau.png";
import Tmobile from "../images/tmobile.jpg";
import smash from "../images/logo_text.png";

function Testimonials() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:pt-8 md:pb-32">
          {/* Section header */}
          <div
            className="max-w-3xl mx-auto text-center pb-36"
            data-aos="zoom-y-out"
            data-aos-delay="300"
          >
            <h2 className="text-bold h2 mb-4">Project sponsor</h2>
            <img className="w-60 mx-auto" src={smash} alt="logo" />
            <p className="text-lg mt-3 leading-7">
              &quot;Smash provides in-demand technology skills to a range of
              learners before they have completed formal schooling, thus
              enabling them to embark into industry and earn professional wages
              immediately upon completion.&quot;
            </p>
          </div>
          <div
            className="max-w-3xl mx-auto text-center pb-12 md:pb-16"
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
            className="max-w-sm md:max-w-4xl mx-auto flex flex-wrap space-x-8 justify-around"
            data-aos="zoom-y-out"
            data-aos-delay="300"
          >
            <img
              className="h-12 w-auto aspect-auto mb-12"
              src={Alaska}
              alt="microsoft logo"
            />
            <img
              className="h-12 w-auto aspect-auto mr-18 mb-12"
              src={Amazon}
              alt="microsoft logo"
            />
            <img
              className="h-12 w-auto aspect-auto mr-18 mb-12"
              src={Boeing}
              alt="microsoft logo"
            />
            <img
              className="h-12 w-auto aspect-auto mr-18 mb-12"
              src={Microsoft}
              alt="microsoft logo"
            />
            <img
              className="h-12 w-auto aspect-auto mr-18 mb-12"
              src={NYTimes}
              alt="microsoft logo"
            />
            <img
              className="h-12 w-auto aspect-auto mr-18 mb-12"
              src={Starbucks}
              alt="microsoft logo"
            />
            <img
              className="h-12 w-auto aspect-auto mr-18 mb-12"
              src={Tableau}
              alt="microsoft logo"
            />
            <img
              className="h-12 w-auto aspect-auto mr-18 mb-12"
              src={Tmobile}
              alt="microsoft logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
