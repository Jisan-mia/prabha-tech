import React from "react";
import "../Pages/Hero.css";
import videp from "../assets/images/home-video-new.mp4";
import { IoIosArrowForward } from "react-icons/io";
import logo from "../assets/logo/logo.svg";
import logo1 from "../assets/logo/logo1.svg";
import logo2 from "../assets/logo/logo2.svg";
import logo3 from "../assets/logo/logo3.svg";
import Hover from "../Components/Hover";

const Hero = () => {
  const handleBtn = () => {
    alert("Link Page");
  };

  return (
    <>
      <div className="hero">
        <video autoPlay loop muted playsInline>
          <source src={videp} type="video/mp4" />
        </video>

        <div className="content">
          <div className="hedline">
            <h1>Meet the Digital Drivers of Global Disruptors</h1>
            <p>
              We catalyze business growth by reimagining digital experiences
              that <br />
              conquer complex challenges through innovation and agility.
            </p>
            <div className="btn">
              <button onClick={handleBtn}>
                <span>Consult Our Experts</span>
                <span>
                  <IoIosArrowForward />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* hero bar  */}
      <div className="bar">
        <div className="barhed">
          <div className="box">
            <img src={logo} alt="" />
          </div>
          <div className="box">
            <img src={logo1} alt="" />
          </div>
          <div className="box">
            <img src={logo2} alt="" />
          </div>
          <div className="box">
            <img src={logo3} alt="" />
          </div>
        </div>

        <div className="barcenter">
          <div className="barcenterl">
            <h2>
              Transforming Businesses with Technology That Transcends
              Geographies and Platforms
            </h2>
          </div>

          <div className="barcenterr">
            <p>
              Appinventiv is one of the world’s largest IT services provider
              helping companies redefine their digital possibilities for nearly
              a decade now. With our team of 1500+ tech evangelists, we are
              building the digital infrastructure of our clients positioning
              them to be the market leaders of their respective industries.
            </p>
          </div>
        </div>



        <section>

        </section>
      </div>


      <Hover/>
    </>
  );
};

export default Hero;
