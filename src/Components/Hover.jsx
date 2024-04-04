import React, { useState } from "react";
import { motion } from "framer-motion";
import "../Components/Hover.css";
import Ui from "./Ui";

const Hover = () => {
  const data = [
    {
      title: "35+",
      link: "Industries Mastered",
      content:
        "Delivering exceptional digital products for almost a decade has enabled us to develop a sharp and focused understanding of every major industry.",
      name: "Heding name",
    },
    {
      title: "35+",
      link: "Industries Mastered",
      content:
        "Delivering exceptional digital products for almost a decade has enabled us to develop a sharp and focused understanding of every major industry.",
      name: "Heding name",
    },
    {
      title: "35+",
      link: "Industries Mastered",
      content:
        "Delivering exceptional digital products for almost a decade has enabled us to develop a sharp and focused understanding of every major industry.",
      name: "Heding name",
    },
    {
      title: "35+",
      link: "Industries Mastered",
      content:
        "Delivering exceptional digital products for almost a decade has enabled us to develop a sharp and focused understanding of every major industry.",
      name: "Heding name",
    },
    {
      title: "35+",
      link: "Industries Mastered",
      content:
        "Delivering exceptional digital products for almost a decade has enabled us to develop a sharp and focused understanding of every major industry.",
      name: "Heding name",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleHover = (index) => {
    if (index === 0) {
      setExpandedIndex(index);
    } else {
      setExpandedIndex(index === expandedIndex ? null : index);
    }
  };

  const images = [
    "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/industries-mastered-bg.webp",
    "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/tech-evangelists-bg.webp",
    "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/solutions-designed-bg.webp",
    "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/legacy-processes-transformed-bg.webp",
    "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/strategic-federal-partnership-bg.webp",
  ];

  return (
    <>
      <div className="hover">
        <div className="hoverhed">
          {data.map((item, index) => (
            <motion.div
              key={index}
              className={`hoverbox ${
                index === expandedIndex ? "expanded" : ""
              }`}
              onMouseEnter={() => handleHover(index)}
              initial={{ width: "10vw", height: "55vh" }}
              animate={{ width: index === expandedIndex ? "42vw" : "10vw" }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="img"
                style={{
                  backgroundImage: `url(${images[index]})`, // Set background image
                }}
              >
                <div
                  className="con"
                  style={{
                    display: index === expandedIndex ? "flex" : "none",
                  }}
                >
                  <h1>{item.title}</h1>
                  <a href="">{item.link}</a>
                  <p>{item.content}</p>
                </div>
              </div>
              <p className="btext">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <Ui />
    </>
  );
};

export default Hover;
