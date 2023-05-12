import styled from "styled-components";
import Vianne from "../images/DSC_0051.jpg";
import Bianca from "../images/DSC_0043.jpg";
import Saranya from "../images/DSC_0058.jpg";
import Chloe from "../images/DSC_0034.jpg";
import Audrey from "../images/DSC_0046.jpg";
import Linkedin from "../images/logo-linkedin.png";
import Web from "../images/globe-outline.png";

function Team() {
  return (
    <section className="max-w-6xl mx-auto mt-40 px-4 sm:px-6">
      <h2 className="text-bold h2 mb-6 text-center">Meet the team</h2>
      <div
        className="flex flex-wrap justify-around"
        data-aos="zoom-y-out"
        data-aos-delay="300"
      >
        <TeamMember>
          <img src={Vianne} alt="vianne" />
          <h3>Vianne Bui Nguyen</h3>
          <small>Project Manager</small>
          <div className="links-container">
            <a href="https://www.linkedin.com/in/vianneb/" target="_blank">
              <img src={Linkedin} alt="linkedin logo" />
            </a>
          </div>
        </TeamMember>
        <TeamMember>
          <img src={Bianca} alt="bianca" />
          <h3>Yu Wen (Bianca) Su</h3>
          <small>Project Manager</small>
          <div className="links-container">
            <a
              href="https://www.linkedin.com/in/bianca-yu-wen-su/"
              target="_blank"
            >
              <img src={Linkedin} alt="linkedin logo" />
            </a>
          </div>
        </TeamMember>
        <TeamMember>
          <img src={Saranya} alt="saranya" />
          <h3>Saranya Gores</h3>
          <small>Designer</small>
          <div className="links-container">
            <a
              href="https://www.linkedin.com/in/saranya-gores/"
              target="_blank"
            >
              <img src={Linkedin} alt="linkedin logo" />
            </a>
            <a href="/" target="_blank">
              <img src={Web} alt="globe logo" />
            </a>
          </div>
        </TeamMember>
        <TeamMember>
          <img src={Chloe} alt="vianne" />
          <h3>Chloe Hu</h3>
          <small>Developer</small>
          <div className="links-container">
            <a
              href="https://www.linkedin.com/in/chloe-hu-a08353198/"
              target="_blank"
            >
              <img src={Linkedin} alt="linkedin logo" />
            </a>
          </div>
        </TeamMember>
        <TeamMember>
          <img src={Audrey} alt="vianne" />
          <h3>Audrey Kho</h3>
          <small>Developer</small>
          <div className="links-container">
            <a href="https://www.linkedin.com/in/audrey-kho/" target="_blank">
              <img src={Linkedin} alt="linkedin logo" />
            </a>
            <a href="https://audrey-kho.github.io" target="_blank">
              <img src={Web} alt="globe logo" />
            </a>
          </div>
        </TeamMember>
      </div>
    </section>
  );
}

export default Team;

const TeamMember = styled.div`
  margin-bottom: 3rem;

  &:not(:first-child) {
    margin-left: 26px;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 800;
    margin: 18px 0 0;
    line-height: 1.85rem;
  }

  img {
    border-radius: 6px;
    max-width: 280px;
  }

  small {
    display: block;
    margin-bottom: 0.45rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.85rem;
    font-weight: 600;
  }

  .link-container {
    display: flex;
  }

  a {
    margin-right: 12px;
  }

  a img {
    display: inline;
    width: 26px;
  }
`;
