import React from "react";
import "../Components/Contact.css";
import Questions from "./Questions";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="formhed">
          <h1>
            Our Subject Mattern <br />
            Experts Are Change <br />
            Catalysts
          </h1>
          <p>Book Your First Presentation with Our Experts Today.</p>
        </div>
        <div className="from">
          <form action="">
            <div className="name">
              <input type="text" placeholder="Full Name" />
            </div>
            <div className="email">
              <input type="email" placeholder="E-mail ID*" />
            </div>
            <div className="number">
              <input type="number" placeholder="Contact Number" />
            </div>
            <div className="Budget">
              <select>
                <option value="">Between $10K to $ 50K</option>
                <option value="">Between $50K to $ 100K</option>
                <option value="">More then $100K</option>
              </select>
            </div>
            <div className="projectd">
              <input type="text" placeholder="Project Discription*" />
            </div>

            <div className="math">
              <div className="rduse">
                <input type="radio"/>
                <p>Include Copy of a Non-Disclosure Agreement</p>
              </div>

              <div className="calmath">
                <div className="mathp">
                <p>4 + 2 = </p> 
                </div>
               <div className="inp">
               <input type="number" />
               </div>
              </div>
             
            </div>

            <div className="mathbnt">
              <button>Request Proposal</button>
            </div>
          </form>
        </div>
      </div>
      <Questions/>
    </>
  );
};

export default Contact;
