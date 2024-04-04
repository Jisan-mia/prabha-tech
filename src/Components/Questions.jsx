import React, { useState } from "react";
import "../Components/Questions.css";
import { LuMoveDown, LuMoveUp } from "react-icons/lu";
import { motion } from "framer-motion";
import Brand from "./Brand";

const Questions = () => {
  const faqsData = [
    {
      question: "What mobile app development services do you offer?",
      answer:
        "As a leading mobile application development company, we offer a comprehensive array of services, including: Our client-centric approach allows us to assist our clients all the way from the initial idea validation to execution and post maintenance. This involves rigorous planning, design, development, testing, and deployment, ensuring that the mobile app is not only technologically robust but also aligns with the client's business vision and user expectations.",
    },
    {
      question: "What mobile app development services do you offer?",
      answer:
        "As a leading mobile application development company, we offer a comprehensive array of services, including: Our client-centric approach allows us to assist our clients all the way from the initial idea validation to execution and post maintenance. This involves rigorous planning, design, development, testing, and deployment, ensuring that the mobile app is not only technologically robust but also aligns with the client's business vision and user expectations.",
    },
    {
      question: "What mobile app development services do you offer?",
      answer:
        "As a leading mobile application development company, we offer a comprehensive array of services, including: Our client-centric approach allows us to assist our clients all the way from the initial idea validation to execution and post maintenance. This involves rigorous planning, design, development, testing, and deployment, ensuring that the mobile app is not only technologically robust but also aligns with the client's business vision and user expectations.",
    },
    {
      question: "What mobile app development services do you offer?",
      answer:
        "As a leading mobile application development company, we offer a comprehensive array of services, including: Our client-centric approach allows us to assist our clients all the way from the initial idea validation to execution and post maintenance. This involves rigorous planning, design, development, testing, and deployment, ensuring that the mobile app is not only technologically robust but also aligns with the client's business vision and user expectations.",
    },
    {
      question: "What mobile app development services do you offer?",
      answer:
        "As a leading mobile application development company, we offer a comprehensive array of services, including: Our client-centric approach allows us to assist our clients all the way from the initial idea validation to execution and post maintenance. This involves rigorous planning, design, development, testing, and deployment, ensuring that the mobile app is not only technologically robust but also aligns with the client's business vision and user expectations.",
    },
    {
      question: "What mobile app development services do you offer?",
      answer:
        "As a leading mobile application development company, we offer a comprehensive array of services, including: Our client-centric approach allows us to assist our clients all the way from the initial idea validation to execution and post maintenance. This involves rigorous planning, design, development, testing, and deployment, ensuring that the mobile app is not only technologically robust but also aligns with the client's business vision and user expectations.",
    },

    {
      question: "What mobile app development services do you offer?",
      answer:
        "As a leading mobile application development company, we offer a comprehensive array of services, including: Our client-centric approach allows us to assist our clients all the way from the initial idea validation to execution and post maintenance. This involves rigorous planning, design, development, testing, and deployment, ensuring that the mobile app is not only technologically robust but also aligns with the client's business vision and user expectations.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="questions">
        <div className="quhed">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-container">
          <div className="faqs">
            {faqsData.map((faq, index) => (
              <div className="faq" key={index} onClick={() => toggleFAQ(index)}>
                <div className="faq-question">
                  <h2>{faq.question}</h2>
                  {openIndex === index ? (
                    <span>
                      <LuMoveUp />
                    </span>
                  ) : (
                    <span>
                      <LuMoveDown />
                    </span>
                  )}
                </div>
                {openIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: openIndex === index ? 1 : 0,
                      height: openIndex === index ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Brand/>
    </>
  );
};

export default Questions;
