import React from "react";

import TeamImage from "../images/team-image.png";
import { PrimaryPurple } from "./PrimaryPurple";
import ArrowEast from "./ArrowEast";
import styled from "styled-components";
import smash from "../images/logo_text.png";
import { PrimaryWhite } from "./PrimaryWhite";

function HeroHome() {
  return (
    <section
      className="relative mt-20 mb-56"
      data-aos="zoom-y-out"
      data-aos-delay="300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <Heading className="md:pt-12 flex items-center">
          {/* Section header */}
          <div className="max-w-2xl">
            <h1>
              Building career pathways in tech through real-world project-based
              learning
            </h1>
            <div className="max-w-6xl mx-auto">
              <div className="max-w-6xl sm:max-w-none">
                <div>
                  <PrimaryPurple href={"/"} role="button">
                    Visit website
                    <ArrowEast width={18} position={-3.5} stroke={2} />
                  </PrimaryPurple>
                  <PrimaryWhite href={"/"} role="button">
                    View prototype
                    <ArrowEast width={18} position={-3.5} stroke={2} />
                  </PrimaryWhite>
                </div>
              </div>
            </div>
          </div>
          <img src={TeamImage} alt="people building together" />
        </Heading>
      </div>

      <div
        className="max-w-3xl mx-auto text-center mt-48"
        data-aos="zoom-y-out"
        data-aos-delay="300"
      >
        <h2 className="text-bold h2 mb-5">Project sponsor</h2>
        <img className="w-64 mx-auto" src={smash} alt="logo" />
        <p className="text-lg mt-3 leading-7">
          &quot;Smash provides in-demand technology skills to a range of
          learners before they have completed formal schooling, thus enabling
          them to embark into industry and earn professional wages immediately
          upon completion.&quot;
        </p>
      </div>
    </section>
  );
}

export default HeroHome;

const Heading = styled.div`
  position: relative;
  margin-bottom: 26rem;

  h1 {
    font-size: 3.4rem;
    font-weight: 700;
    line-height: 4.4rem;
    margin-bottom: 3rem;
  }

  img {
    position: absolute;
    top: 9rem;
    right: -0.85rem;
    width: 820px;
    height: auto;
    margin: 0 auto;
    z-index: -1;
  }

  @media (max-width: 768px) {
    flex-direction: column !important;
    margin-bottom: 0;

    h1 {
      font-size: 2.8rem;
      line-height: 3.6rem;
      /* text-align: center; */
    }

    a {
      margin: 0 auto;
    }

    img {
      position: static;
      /* top: 22rem;
      left: 50%;
      transform: translateX(-50%); */
    }
  }
`;
