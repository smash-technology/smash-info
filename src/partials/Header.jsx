import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo_text.png";
import { PrimaryPurple } from "./PrimaryPurple";
import ArrowEast from "./ArrowEast";

function Header() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="smash">
              <img className="w-36" src={Logo} alt="Smash logo" />
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <PrimaryPurple
                  href={"https://smash-technology.vercel.app/"}
                  target="_blank"
                  role="button"
                >
                  Visit our website
                  <ArrowEast width={18} position={-3.5} stroke={2} />
                </PrimaryPurple>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
