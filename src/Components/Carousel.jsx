import React, { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "../Components/Carousel.css";
import { allHomeTestimonialData } from "./Industries/data";
import Vision from "./Vision";
// Import Swiper styles
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { A11y, FreeMode, Navigation, Pagination } from "swiper/modules";
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiper = useSwiper();

  const nextSlide = () => {
    // setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1)); // Assuming you have 3 cbox cards
  };

  const prevSlide = () => {
    // setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1)); // Assuming you have 3 cbox cards
  };

  return (
    <>
      <div className="slider-container">
        <div className="sidehed">
          <h1>
            First-Hand Opinions of Clients on <br />
            Their Partnership Experience
          </h1>
          <p>
            We are a software and mobile application development company that
            ensures its expertise extends <br />
            to offer a seamlessly productive and growth-oriented partnership to
            its clients.
          </p>
        </div>

        <div className="carobox">
          <Swiper
            loop={true}
            slidesPerView={'auto'}
            modules={[Pagination, FreeMode, A11y, Navigation]}
            centeredSlides={true}
            className="mySwiper"
            freeMode={true}
            spaceBetween={50}
             navigation={{
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  }}
          >
            {allHomeTestimonialData.map((item) => {
              return (
                <>
                  <SwiperSlide key={item.id}>
                    <CarouselItem item={item} />
                  </SwiperSlide>
                </>
              );
            })}
            <div className="carobtn">
              <button className="swiper-button-prev1" >
                <GrPrevious />
              </button>
              <button className="swiper-button-next1" >
                <GrNext />
              </button>
            </div>
          </Swiper>
        </div>
      </div>

      <Vision />
    </>
  );
};

export default Carousel;

const CarouselItem = ({ item, currentIndex }) => {
  return (
    <div
      className="cbox"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {/* Assuming you have 3 cbox cards */}
      <div className="context">
        <p>{item.detail}</p>
      </div>

      <div className="border"></div>

      <div className="userd">
        <div className="useimg">
          <img src={item.userImage} alt="" />
          <div className="userboi">
            <h4>{item.userName}</h4>
            <h4>{item.userTitle}</h4>
            <h4>{item.userCompany}</h4>
          </div>
        </div>
        <div className="usercom">
          <img src={item.userCompanyImage} alt="" />
        </div>
      </div>
    </div>
  );
};
