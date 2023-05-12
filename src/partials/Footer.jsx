import React from "react";
import { Link } from "react-router-dom";
import Figma from "../images/logo-figma.png";
import Github from "../images/logo-github.png";
import styled from "styled-components";

function Footer() {
  return (
    <FooterStyles>
      <div className="max-w-6xl mx-auto px-4 my-10 sm:px-6">
        <div className="md:flex md:items-center md:justify-between border-t border-gray-200">
          <div className="link-container mt-4">
            <Link
              to="#"
              className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
              aria-label="Figma prototype"
            >
              <img src={Figma} alt="figma logo" />
            </Link>
            <Link
              to="https://github.com/smash-technology"
              className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
              aria-label="Github"
            >
              <img src={Github} alt="github logo" />
            </Link>
          </div>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4 mt-4">
            Copyright &copy; 2023 Super Smash Bros.
          </div>
        </div>
      </div>
    </FooterStyles>
  );
}

export default Footer;

const FooterStyles = styled.footer`
  img {
    width: 24px;
    height: auto;
    margin: 5px;
  }

  a {
    margin-left: 18px;
  }

  .link-container {
    display: flex;
    order: 1;
  }
`;
