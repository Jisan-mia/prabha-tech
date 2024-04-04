import React from "react";
import "../Components/Vision.css";
import { IoIosHeartEmpty } from "react-icons/io";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import Contact from "./Contact";

const Vision = () => {
  const data = [
    {
      id: 1,
      name: "Healthcare",
      icon: <IoIosHeartEmpty />,
    },
    {
      id: 2,
      name: "Finance",
      icon: <RiMoneyDollarCircleLine />,
    },
    {
      id: 3,
      name: "Restaurant",
      icon: <MdOutlineRestaurantMenu />,
    },

    {
      id: 4,
      name: "Healthcare",
      icon: <IoIosHeartEmpty />,
    },
    {
      id: 5,
      name: "Finance",
      icon: <RiMoneyDollarCircleLine />,
    },
    {
      id: 6,
      name: "Restaurant",
      icon: <MdOutlineRestaurantMenu />,
    },
    {
      id: 7,
      name: "Healthcare",
      icon: <IoIosHeartEmpty />,
    },
    {
      id: 8,
      name: "Finance",
      icon: <RiMoneyDollarCircleLine />,
    },
    {
      id: 9,
      name: "Restaurant",
      icon: <MdOutlineRestaurantMenu />,
    },
    {
      id: 10,
      name: "Healthcare",
      icon: <IoIosHeartEmpty />,
    },
    {
      id: 11,
      name: "Finance",
      icon: <RiMoneyDollarCircleLine />,
    },
    {
      id: 12,
      name: "Restaurant",
      icon: <MdOutlineRestaurantMenu />,
    },
    {
      id: 13,
      name: "Healthcare",
      icon: <IoIosHeartEmpty />,
    },
    {
      id: 14,
      name: "Finance",
      icon: <RiMoneyDollarCircleLine />,
    },
    {
      id: 15,
      name: "Restaurant",
      icon: <MdOutlineRestaurantMenu />,
    },
  ];
  return (
    <>
      <div className="vision">
        <div className="visoonhed">
          <h1>
            A Unified Vision That Caters <br />
            to Diverse Industry Demands
          </h1>
        </div>

        <div className="visionbox">
          {data.map((item, index) => (
            <>
              <div className="boxvision">
                <div className="iconbox">{item.icon}</div>
                <h4>{item.name}</h4>
              </div>
            </>
          ))}
        </div>
      </div>

     
            <div className="combox">
              <div className="comboxleft">
                <h1>Strategic Partnerships to <br /> Unlock Greater Business <br /> Value</h1>
              </div>
              <div className="comboxright">
                <div className="comboxrightbox">
                  <img src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/aws-partner.svg" alt="" />
                </div>
                <div className="comboxrightbox">
                  <img src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/mongodb-partner.svg" alt="" />
                </div>
                <div className="comboxrightbox">
                  <img src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/google-cloud-partner.svg" alt="" />
                </div>
                <div className="comboxrightbox">
                  <img src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/cloudinary-partner.svg" alt="" />
                </div>
              </div>
            </div>

            <Contact/>

    </>
  );
};

export default Vision;
