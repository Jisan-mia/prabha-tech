import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Components/Slider.css";
import { GrNext, GrPrevious } from "react-icons/gr";
import img from "../assets/images/companeyimg.png";
import Carousel from "./Carousel";

const MySlider = () => {
  const sliderRef = useRef();

  const slideData = [
    {
      id: 1,
      sal: "2020",
      img: img,
      name: "App Development Companey of The Year"
    },
    {
      id: 2,
      sal: "2021",
      img: img,
      name: "App Development Companey of The Year"
    },
    {
      id: 3,
      sal: "2022",
      img: img,
      name: "App Development Companey of The Year"
    },
    {
      id: 4,
      sal: "2023",
      img: img,
      name: "App Development Companey of The Year"
    },
    {
      id: 5,
      sal: "2024",
      img: img,
      name: "App Development Companey of The Year"
    },
    {
      id: 6,
      sal: "2023",
      img: img,
      name: "App Development Companey of The Year"
    },
    {
      id: 7,
      sal: "2021",
      img: img,
      name: "App Development Companey of The Year"
    },
    {
      id: 8,
      sal: "2020",
      img: img,
      name: "App Development Companey of The Year"
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-out",
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
   <>
     <div className="slider">
      <div className="sliderhed">
        <h1>
          Our Growth Journey as a Mobile App Development Company Has Bagged a
          Few Reputed Accolades as Well
        </h1>
      </div>

      <div className="sliderbox">
        <Slider ref={sliderRef} {...settings}>
          {slideData.map((item, index) => (
            <div className="slibox" key={index}>
              <div className="conslider">
                <img src={item.img} alt={item.sal} />
                <div className="ctext">
                <p>{item.sal}</p>
                <h2>{item.name}</h2>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="cbtn">
          <button onClick={previousSlide}>
            <GrPrevious />
          </button>
          <button onClick={nextSlide}>
            <GrNext />
          </button>
        </div>
      </div>

    </div>
    <Carousel />
   </>
  );
};

export default MySlider;
