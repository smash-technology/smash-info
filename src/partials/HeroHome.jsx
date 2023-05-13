import React from "react";

import TeamImage from "../images/team-image.png";
import { PrimaryPurple } from "./PrimaryPurple";
import ArrowEast from "./ArrowEast";
import styled from "styled-components";
import smash from "../images/logo_text.png";

function HeroHome() {
  return (
    <section className="relative mb-36">
      <div
        className="max-w-6xl mx-auto mb-8 px-4 sm:px-6"
        data-aos="zoom-y-out"
        data-aos-delay="300"
      >
        {/* Hero content */}
        <Heading className="pt-24 pb-32 md:pt-32 md:pb-20 flex items-center">
          {/* Section header */}
          <div>
            <h1>
              Building career pathways in tech through real-world project-based
              learning
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
          <img src={TeamImage} alt="2 people working together" />
        </Heading>
      </div>

      <div
        className="max-w-3xl mx-auto text-center py-30"
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
  h1 {
    font-size: 3.6rem;
    font-weight: 800;
    line-height: 4.4rem;
    margin-bottom: 4rem;
  }

  img {
    width: 560px;
    height: auto;
    margin: 0 -1rem 1rem 0;
  }
`;
