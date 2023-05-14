import React from "react";

import styled from "styled-components";
import Dashboard from "../images/dashboard.png";
import Projects from "../images/projects.png";
import Resume from "../images/resume.png";
import Static from "../images/static.png";
import Survey from "../images/survey.png";
import blob from "../images/blob.svg";

function Features() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">What Smash does</h1>
            <p className="text-xl text-gray-600">
              Our platform features center around facilitating the learner's
              growth. Smash helps learners gain real-world skills and connects
              them with well-established employers in the tech industry.
            </p>
          </div>

          <FeatureStyles>
            <img className="blob" src={blob} />
            <div className="section__details">
              <h2>Informational pages</h2>
              <p>
                Prospective learners and partners can learn about Smash and how
                to get started through the Home, About Us, Student Guide, and
                more.{" "}
              </p>
            </div>
            <img src={Static} alt="ipad screens with Smash static pages" />
          </FeatureStyles>
          <FeatureStyles className="reverse__column">
            <img className="blob" src={blob} />
            <div className="section__details">
              <h2>Onboarding + Surveys</h2>
              <p>
                To sign up, users can easily register and create an account to
                start their Smash journey.
                <br />
                <br />
                With every log in, users are welcomed with short surveys that
                are used to update their information and personalize their
                experience.
              </p>
            </div>
            <img src={Survey} alt="ipad screens with Smash static pages" />
          </FeatureStyles>
          <FeatureStyles>
            <img className="blob" src={blob} />
            <div className="section__details">
              <h2>Dashboard</h2>
              <p>
                To track learning progress and achievements, the dashboard is an
                engaging way for users to view their performance.
              </p>
            </div>
            <img src={Dashboard} alt="ipad screens with Smash static pages" />
          </FeatureStyles>
          <FeatureStyles className="reverse__column">
            <img className="blob" src={blob} />
            <div className="section__details">
              <h2>Resume</h2>
              <p>
                Users can record their accomplishments and apply to projects
                with the auto-filled resume that retrieves information from
                surveys.
              </p>
            </div>
            <img src={Resume} alt="ipad screens with Smash static pages" />
          </FeatureStyles>
          <FeatureStyles>
            <img className="blob" src={blob} />
            <div className="section__details">
              <h2>Projects</h2>
              <p>
                Users can browse and filter through new static and live
                projects. Applying is made simple by sending the user’s resume
                straight to the project sponsor.
              </p>
            </div>
            <img src={Projects} alt="ipad screens with Smash static pages" />
          </FeatureStyles>
        </div>
      </div>
    </section>
  );
}

export default Features;

const FeatureStyles = styled.article`
  margin: 0 0 98px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .section__details {
    max-width: 448px;

    h2 {
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 2.8rem;
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 1.4rem;
    }
  }

  img {
    max-width: 600px;
    width: 96%;
    height: auto;
    margin-left: 64px;
    z-index: 1;
  }

  .blob {
    position: absolute;
    top: -10rem;
    right: 15%;
    width: 1200px;
    /* z-index: -1; */
  }

  &.reverse__column {
    flex-direction: row-reverse;

    .blob {
      position: absolute;
      top: 4rem;
      left: 20%;
      width: 1200px;
      /* z-index: -1; */
    }

    img {
      margin-left: 0;
      margin-right: 64px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column !important;

    /* &.reverse__column {
      flex-direction: column;
    } */

    img {
      margin: 64px auto !important;
    }
  }
`;
