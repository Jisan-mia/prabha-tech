import React from "react";
import "../Components/Ui.css";
import { IoIosArrowForward } from "react-icons/io";
import Slider from "./Slider";


const Ui = () => {
  const data = [
    {
      id: 1,
      name: "Artificial Intelligence",
      img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/ai-ml-home-icon.svg",
    },
    {
      id: 2,
      name: "Mobile App Development",
      img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/Mobile-app.svg",
    },
    {
      id: 3,
      name: "Software Development",
      img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/Software-Development.svg",
    },
    {
      id: 4,
      name: "Data Science & Analytics",
      img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/Digital-Transformation.svg",
    },
    {
      id: 5,
      name: "Data Science & Analytics",
      img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/Data-Science-Analytics.svg",
    },
    {
      id: 6,
      name: "Cloud Services",
      img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/Cloud-Services.svg",
    },
    {
      id: 7,
      name: "Blockchain Services",
      img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/Blockchain-Services.svg",
    },
    {
      id: 8,
      name: "Ideation and Design Strategy",
      img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/ideation-design.svg",
    },
    {
      id: 9,
      name: "IT Consulting",
      img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/IT-Consulting.svg",
    },
    {
      id: 10,
      name: "Devops",
      img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/DevOps.svg",
    },
    {
      id: 11,
      name: "IoT App Development",
      img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/iot-app-dev.svg",
    },
    {
      id: 12,
      name: "Cloud Managed Services",
      img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/cloud-managed-services-icon.svg",
    },
    {
      id: 13,
      name: "AR VR App Development",
      img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/ar-vr-app-dev.svg",
    },
    {
      id: 14,
      name: "Business Intelligence",
      img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/business-intelligence-icon-home.svg",
    },
  ];

  const ImgData = [
    {
      id: 1,
      img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/ikea-logo-color.svg",
    },
    {
      id: 2,
      img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/google-logo-color.svg",
    },
    {
      id: 3,
      img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/bcc-logo-color.svg",
    },
    {
      id: 4,
      img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/kfc-logo-color.svg",
    },
    {
      id: 5,
      img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/friday-logo-color.svg",
    },
    {
      id: 6,
      img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/moo-logo-color.svg",
    },
    {
      id: 7,
      img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/kk-logo-color.svg",
    },
    {
      id: 8,
      img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/hardees-logo-color.svg",
    },
    {
      id: 9,
      img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/bajaj-allianz-logo-color.svg",
    },
    {
      id: 10,
      img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/domin-logo-color.svg",
    },
    {
      id: 11,
      img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/supershe-logo-color.svg",
    },
    {
      id: 12,
      img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/wimpy-logo-color.svg",
    },
    {
      id: 13,
      img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/empirehotels-logo-color.svg",
    },
    {
      od: 14,
      img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/jobget-lgo-color.svg",
    },
    {
      id: 15,
      img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/asian-bank.svg",
    },
  ];

  return (
    <>
      <div className="ui">
        <div className="uihed">
          <h1>
            We Create New Solutions and Transform Existing Ones with a
            Development Process That Beats Industry-Best Timelines
          </h1>

          <button>
            <span>Our Services</span>
            <span>
              <IoIosArrowForward />
            </span>
          </button>
        </div>

        <div className="uicards">
          {data.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.img} alt={item.name} />
              <h2>{item.name}</h2>
            </div>
          ))}
        </div>

        <div className="cpmpaney">
          <div className="comhed">
            <h1>
              Our Efforts Have Transformed How You Experience These Global
              Leaders
            </h1>
          </div>

          <div className="companeybox">
            {ImgData.map((item, index) => (
              <div className="comimg" key={index}>
                <img src={item.img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Slider/>
    </>
  );
};

export default Ui;
