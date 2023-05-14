import React from "react";
import { Link } from "react-router-dom";
import iSchool from "../images/ischool-logo.png";
import styled from "styled-components";

function Footer() {
  return (
    <FooterStyles>
      <div className="max-w-6xl mx-auto px-4 my-10 sm:px-6">
        <div className="md:flex md:items-center md:justify-between border-t border-gray-200">
          <div className="link-container mt-4">
            <img src={iSchool} alt="uw ischool logo" />
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
    max-width: 220px;
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
