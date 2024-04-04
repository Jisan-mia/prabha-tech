import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

import "./Testimonial.css";
import { allTestimonials } from "./data";
const IndustriesTestimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials__wrapper">
        <div className="testimonials__content container">
          {/* titles */}
          <div className="testimonials__titles">
            <h2>
              Industry Leaders Have Something
              <br />
              &nbsp; to Say about Us
            </h2>
            <p>
              It is not just us, it is the pioneers across industries that give
              us the confidence and the
              <br />
              &nbsp; motivation to be an industry leader ourselves.
            </p>
          </div>

          {/* testimonial carousel */}
          <div className="testimonials__carousel">
            <TesimonailCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesTestimonials;

const TesimonailCarousel = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {allTestimonials.map((item) => {
          return (
            <>
              <SwiperSlide>
                <TextimonialItem testimonial={item} />
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
};

const TextimonialItem = ({ testimonial }) => {
  const { name, title, image, message } = testimonial;
  return (
    <div className="testimonial__item">
      <div className="testimonial__item-info">
        <img src={image} alt="" />
        <h3>{name}</h3>
        <p>{title}</p>
      </div>
      <p className="testimonial__item-message">{message}</p>
    </div>
  );
};
