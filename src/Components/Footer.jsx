import React from 'react';
import "../Components/Footer.css";
import Subfooter from './Subfooter';

const Footer = () => {
  return (
    <>
        <div className="footer">

            <div className="footeritem">
                <div className="footerabout gap">
                    <div className="hedline">
                        <h2>About</h2>
                    </div>
                    <div className="listitem">
                        <a href="/">Our company</a>
                        <a href="/">Core Team</a>
                        <a href="/">Career</a>
                        <a href="/">CSR</a>
                        <a href="/">How We Work</a>
                    </div>
                </div>
                <div className="footerServices gap">
                    <div className="hedline">
                        <h2>Services</h2>
                    </div>
                    <div className="listitem">
                        <a href="/">iOS App Development</a>
                        <a href="/">Android App Development</a>
                        <a href="/">Software Development</a>
                        <a href="/">Ideation & Design</a>
                        <a href="/">Product Growth</a>
                        <a href="/">Research & Innovation</a>
                        <a href="/">Digital Transformation</a>
                        <a href="/">More...</a>
                    </div>
                </div>
                <div className="footerTech gap">
                    <div className="hedline">
                        <h2>Technologies</h2>
                    </div>
                    <div className="listitem">
                        <a href="/">Blockchain</a>
                        <a href="/">Artificial Intelligence</a>
                        <a href="/">AR and VR</a>
                        <a href="/">Cloud Computing</a>
                        <a href="/">Internet of Things</a>
                        <a href="/">Metaverse Development</a>
                        <a href="/">NFT Development</a>
                        <a href="/">more...</a>
                    </div>
                </div>
                <div className="footerindustries gap">
                    <div className="hedline">
                        <h2>Industries</h2>
                    </div>
                    <div className="listitem">
                        <a href="/">Healthcare</a>
                        <a href="/">Education</a>
                        <a href="/">SaaS</a>
                        <a href="/">Finance</a>
                        <a href="/">On-Demand</a>
                        <a href="/">eCommerce</a>
                        <a href="/">Logistics</a>
                        <a href="/">More...</a>
                    </div>
                </div>
                <div className="footerportfolio gap">
                    <div className="hedline">
                        <h2>Portfolio</h2>
                    </div>
                    <div className="listitem">
                        <a href="/">KFC</a>
                        <a href="/">Adidas</a>
                        <a href="/">IKEA</a>
                        <a href="/">Hukoomi</a>
                        <a href="/">Domino's</a>
                        <a href="/">Pizza Hut</a>
                        <a href="/">YouCOMM</a>
                        <a href="/">More...</a>
                    </div>
                </div>
                <div className="footerresources gap">
                    <div className="hedline">
                        <h2>Resources</h2>
                    </div>
                    <div className="listitem">
                        <a href="/">Blog</a>
                        <a href="/">Press Release</a>
                        <a href="/">Guides</a>
                        <a href="/">Ebooks</a>
                    </div>
                </div>
            </div>


        </div>
        <Subfooter/>
    </>
  )
}

export default Footer