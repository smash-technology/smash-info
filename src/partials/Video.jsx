import React, { useState, useRef, useEffect } from "react";

import Modal from "../utils/Modal";
import HeroImage from "../images/hero-image.png";

function Video() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const video = useRef(null);

  useEffect(() => {
    videoModalOpen ? video.current.play() : video.current.pause();
  }, [videoModalOpen]);

  return (
    <div className="mt-32 mb-8">
      <div
        className="relative flex justify-center mb-8"
        data-aos="zoom-y-out"
        data-aos-delay="450"
      >
        <div className="flex flex-col justify-center">
          <img
            className="mx-auto shadow-lg rounded-xl"
            src={HeroImage}
            width="768"
            height="432"
            alt="Hero"
          />
        </div>
        <button
          className="absolute top-full flex items-center transform -translate-y-1/2 bg-indigo-500 rounded-full font-medium text-white group p-4 shadow-lg"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setVideoModalOpen(true);
          }}
          aria-controls="modal"
        >
          <svg
            className="w-6 h-6 fill-current text-white group-hover:text-gray-400 flex-shrink-0"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
            <path d="M10 17l6-5-6-5z" />
          </svg>
          <span className="ml-3">Watch our demo video (1 min)</span>
        </button>
      </div>

      {/* Modal */}
      <Modal
        id="modal"
        ariaLabel="modal-headline"
        show={videoModalOpen}
        handleClose={() => setVideoModalOpen(false)}
      >
        <div className="relative pb-9/16">
          <video
            ref={video}
            className="absolute w-full h-full"
            width="1920"
            height="1080"
            loop
            autoPlay
            controls
          >
            <source src="/videos/demo-sp.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Modal>
    </div>
  );
}

export default Video;
