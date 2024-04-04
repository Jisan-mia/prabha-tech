import React from "react";
import "../Pages/About.css";
import { useState } from "react";
import Gallery from "../Components/Gallery";

const About = () => {
  const [activeYear, setActiveYear] = useState(2015);

  const historyContent = {
    2015: {
      year: "2015",
      description: "Appinventiv is founded",
      text: "We started with just 10 employees working passionately with a vision to grow. With utmost dedication, we bagged our first brand project within a month of our incorporation. Set the grounds for success and unprecedented opportunities.",
      imageUrl:
        "https://appinventiv.com/wp-content/themes/twentynineteen-child/images/ai-founded.webp",
    },
    2016: {
      year: "2016",
      text: "We touched a 100+ project milestone mark and strengthened our workforce by hiring 150+ employees from across locations, all of this in just a year. Ramped up all our processes to incorporate a smooth flow of work.",
      imageUrl:
        "https://appinventiv.com/wp-content/themes/twentynineteen-child/images/img2017.webp",
    },
    2017: {
      year: "2017",
      text: "We received industry and world wide recognition as tech experts and thought leaders. Our employee strength grew into a community of tech lovers building a powerful culture that was bound to see only growth ahead.",
      imageUrl:
        "https://appinventiv.com/wp-content/themes/twentynineteen-child/images/img2018.webp",
    },
    2018: {
      year: "2018",
      text: "With a year on year growth of 250%, we moved into a new office to accommodate our enormous strength of 1000+ employees. And went on to expand across the globe with 6 new branches.",
      imageUrl:
        "https://appinventiv.com/wp-content/themes/twentynineteen-child/images/img2019.webp",
    },
    2019: {
      year: "2018",
      text: "We delivered to 1000+ happy clients and celebrated this achievement in our very own newly built terrace cafe. We also started a charitable initiative, Daan Sewa, to help uplift the less fortunate in our locality.",
      imageUrl:
        "https://appinventiv.com/wp-content/themes/twentynineteen-child/images/img2019-nw.webp",
    },
    2020: {
      year: "2020",
      text: "We bagged multiple long-term state and central government contracts worth millions of dollars. Set the record for biggest number of hirings done during the pandemic. Under the mentorship of our Director Mr Saurabh Singh, we won the award for App Development Company of The Year & wrapped up 2020 with a revenue of 14 million dollars.",
      imageUrl:
        "https://appinventiv.com/wp-content/themes/twentynineteen-child/images/img2020.webp",
    },
  };

  const handleButtonClick = (year) => {
    setActiveYear(year);
  };

  const lifeData = [
    {
      id: 1,
      text: "Learnin & Development",
      img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/images/learning-dev.jpg",
    },
    {
      id: 2,
      text: "Mindful Personal Guidance",
      img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/images/Mindful-Personal-Guidance.jpg",
    },
    {
      id: 3,
      text: "Constructive Feedback",
      img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/images/Constructive-Feedback.jpg",
    },
    {
        id: 4,
        text: "Inclusive & Open-Culture",
        img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/images/Inclusive-Open-Culture.jpg",
      },
      {
        id: 5,
        text: "Innovation & Quality First",
        img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/images/Innovation-Quality-First.jpg",
      },
      {
        id: 6,
        text: "Proactive Implementation",
        img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/images/Proactive-Implementation.jpg",
      },
      {
        id: 7,
        text: " Best & Global Opportunities",
        img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/images/Best-Global-Opportunities.jpg",
      },
      {
        id: 8,
        text: "Work with Latest Technology",
        img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/images/Work-with-Latest-Technology.jpg",
      },
  ];

  return (
    <>
      <div className="about">
        <div className="abouthed">
          <h1>
            Transforming Businesses <br /> With Innovation
          </h1>
        </div>

        <div className="textabout">
          <div className="textfrist">
            <h1>Who We Are???</h1>
            <p>
              We are believers of change! A change driven by technology and
              innovation. We help businesses and individuals in adapting as well
              as adopting digital transformation. Our aim is to change people’s
              lives and improve businesses with our progressive and innovative
              technology solutions.
            </p>
          </div>

          <div className="textlast">
            <h1>What We Do Best</h1>
            <p>
              We start by listening to the issues, requirements, challenges and
              objectives. The process continues with an effort to understand the
              business, market sector and competitors to develop information
              which is combined with our technical knowledge, expertise and
              research in order to provide the best solution at the lowest cost.
            </p>
          </div>
        </div>

        <div className="histor">
          <div className="historhed">
            <h4>Our History</h4>
            <h1>HISTOR</h1>
          </div>

          <div className="list">
            <div className="items">
              {/* Render only the item corresponding to the active year */}
              <div className="yesr">
                <p>{historyContent[activeYear].year}</p>
                <p>{historyContent[activeYear].description}</p>
                <h5>{historyContent[activeYear].text}</h5>
              </div>
              <div className="yearimg">
                <img src={historyContent[activeYear].imageUrl} alt="" />
              </div>
            </div>

            <div className="itemborder"></div>
            <div className="itembtn">
              {/* Button to switch active year */}
              {Object.keys(historyContent).map((year) => (
                <button
                  key={year}
                  onClick={() => handleButtonClick(parseInt(year))}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="worklife">
          <div className="worklifehed">
            <h1>Work Life</h1>
            <h1>
              At Its <span>Best</span>
            </h1>
          </div>

          <div className="worklifeheditem">
            {lifeData.map((item, index) => (
              <div className="boxitems" key={index}>
                <div className="boximg">
                  <img src={item.img} alt=""
                  />
                </div>
                <div className="boxtext">
                  <p>
                    {item.text}
                  </p>
                </div>
                <div className="boxborder"></div>
              </div>
            ))}
          </div>
        </div>

<Gallery/>
      </div>
    </>
  );
};

export default About;
