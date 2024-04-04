import React from "react";
import "../Components/Brand.css";
import Footer from "./Footer";

const Brand = () => {

  const data = [
    {
      id: 1,
      img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/hq-india.svg",
      titel: "HQ INDIA",
      line1: "B-25, Sector 58,",
      line2: "Noida- 201301,",
      line3: " Delhi - NCR, India",
    },
    {
      id: 2,
      img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/hq-usa.svg",
      titel: "USA",
      line1: "79, Madison Ave",
      line2: "Manhattan, NY 10001,",
      line3: "USA",
    },
    {
      id: 3,
      img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/hq-aus-new.svg",
      titel: "Australia",
      line1: " Appinventiv Australia,",
      line2: "   East Brisbane",
      line3: " QLD 4169, Australia",
    },
    {
      id: 4,
      img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/hq-uae.svg",
      titel: "UAE",
      line1: " Tiger Al Yarmook Building,",
      line2: "13th floor B-block",
      line3: " Al Nahda St - Sharjah",
    },
    {
      id: 5,
      img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/hq-canada.svg",
      titel: "CANADA",
      line1: "Suite 3810, Bankers Hall West,",
      line2: "888 - 3rd Street Sw",
      line3: "Calgary Alberta",
    },
  ];

  return (
    <>
      <div className="brand">
        <div className="brandhed">
          <div className="logo">
            <h1>Prabha-Technologies</h1>
          </div>
          <div className="logotext">
            <h2>Most trusted Mobile App Consulting Company on Clutch</h2>
          </div>
        </div>

        <div className="brandicon">
          {data.map((item, index) => (
            <div className="brandbox" key={index}>
              <div className="bimg">
                <img src={item.img} alt="" />
              </div>
              <div className="bborder"></div>
              <div className="btitel">
                <h4>{item.titel}</h4>
              </div>
              <div className="bname">
                <p>{item.line1}</p>
                <p>{item.line2}</p>
                <p>{item.line3}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Brand;
