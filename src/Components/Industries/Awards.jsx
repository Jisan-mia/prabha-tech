import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
// import required modules
import { Autoplay } from "swiper/modules";

import "./Awards.css";
import { allAwards } from "./data";
import IndustriesPageCTA from "./IndustriesPageCTA";

const Awards = () => {
  const ctaText = (
    <>
      You’re one step away from transforming your
      <br />
      business growth trajectory
    </>
  );
  return (
    <div className="awards">
      <div className="awards__content container">
        <div className="awards-titles">
          <h2>
            We Have Bagged
            <br />
            &nbsp; Industry-Leading Awards
          </h2>
          <p>
            We have been recognized as a thought leader in the technology
            industry year-on-year.
          </p>
        </div>

        {/* carousel section */}
        <AwardsCarousel />

        {/* cta */}
        <IndustriesPageCTA ctaText={ctaText} style={{background: 'transparent', padding: 0, paddingTop: '50px'}} />
      </div>
    </div>
  );
};

export default Awards;

const AwardsCarousel = () => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      {allAwards.map((item) => (
        <>
          <SwiperSlide>
            <div className="award-img-item">
              <img src={item.awardImg} alt="" />
            </div>
          </SwiperSlide>
        </>
      ))}
    </Swiper>
  );
};
