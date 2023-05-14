import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";

import Static from "../images/static.png";
import Survey from "../images/survey.png";
import Dashboard from "../images/dashboard.png";
import Resume from "../images/resume.png";
import Projects from "../images/projects.png";

function Features() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
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

          <p>HELLO</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
