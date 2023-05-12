import React from "react";

import TeamImage from "../images/team-image.png";
import { PrimaryPurple } from "./PrimaryPurple";
import ArrowEast from "./ArrowEast";
import styled from "styled-components";

function HeroHome() {
  return (
    <section className="relative">
      <div
        className="max-w-6xl mx-auto px-4 sm:px-6"
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
