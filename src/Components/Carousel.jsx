import React, { useState } from "react";
import "../Components/Carousel.css";
import { GrNext, GrPrevious } from "react-icons/gr";
import Vision from "./Vision";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1)); // Assuming you have 3 cbox cards
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1)); // Assuming you have 3 cbox cards
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
          <div
            className="cbox"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {/* Assuming you have 3 cbox cards */}
            <div className="context">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam a,
                placeat nesciunt, voluptatum sapiente corrupti distinctio itaque
                consequatur velit recusandae laudantium officiis optio
                exercitationem! Omnis necessitatibus nostrum provident beatae ut
                quae voluptatem ullam architecto, rem at quasi quia iste hic ab
                debitis numquam fugiat, praesentium molestiae reprehenderit
                voluptas molestias perspiciatis.
              </p>
            </div>

            <div className="border"></div>

            <div className="userd">
              <div className="useimg">
                <img
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <div className="userboi">
                  <h4>Neeraj Tiwari</h4>
                  <h4>Director- Digital Engineering</h4>
                  <h4>Americana Group (Kuwait Food Co.)</h4>
                </div>
              </div>
              <div className="usercom">
                <img
                  src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/friday-logo-color.svg"
                  alt=""
                />
              </div>
            </div>


          </div>

          <div className="carobtn">
            <button onClick={prevSlide}>
              <GrPrevious />
            </button>
            <button onClick={nextSlide}>
              <GrNext />
            </button>
          </div>
        </div>
      </div>

      <Vision/>
    </>
  );
};

export default Carousel;
