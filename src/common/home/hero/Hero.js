import React from "react";
import "./hero.css";
import Heading from "../../heading/Heading";



export const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
          <Heading subtitle="Welcome to Smart Learning Network" title="Best Learning & Practice Network"/>
            <p>
            At Learning Network, we believe in the transformative power of technology education. In an era where innovation is constant and digital skills are essential, our platform strives to empower individuals with the knowledge and expertise needed to thrive in the digital landscape.
            </p>
            <div className="button">
            <button className="primary-btn">
            Get Started Now <i className="fa fa-long-arrow-alt-right"></i>
            </button>
            <button className="primary-btn">
            View Course <i className="fa fa-long-arrow-alt-right"></i>
            </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin">
      </div>
    </>
  );
};
