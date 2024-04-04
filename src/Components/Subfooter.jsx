import React from "react";
import "../Components/Subfooter.css";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Subfooter = () => {
  return (
    <>
      <div className="subfooter">
        <div className="subtop">
          <div className="subimg">
            <img
              src="https://images.dmca.com/Badges/dmca-badge-w150-2x1-02.png?ID=243d6934-5044-462a-b87b-75eebc0294b7"
              alt=""
            />
          </div>
          <div className="subhed">
            <p>
              Full stack mobile (iOS, Android) and web app <br />
              design and development agency
            </p>
          </div>
        </div>

        <div className="dubborder"></div>

        <div className="subitem">
          <div className="subf">
            <a href="">Statutory legal information</a>
          </div>
          <div className="subc">
            <a href="">2024-2025 (c) Appinventiv</a>
            <a href=""> | SiteMap</a>
            <a href=""> | Privacy Policy</a>
          </div>
          <div className="ssocile">
            <a href="/">
              <ImFacebook2 />
            </a>
            <a href="/">
              <FaInstagram />
            </a>
            <a href="/">
              <AiOutlineTwitter />
            </a>
            <a href="/">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subfooter;
