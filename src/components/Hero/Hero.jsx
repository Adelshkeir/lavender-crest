import React from "react";
import "./Hero.css";
import CountUp from "react-countup";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="purple-circle" />
            <h1>
              Discover <br />
              Most Suitable <br />
              Room
            </h1>
          </div>

          <div className="flexColStart hero-description">
            <span className="secondaryText">Find a variety of suitable rooms that suit you easily</span>
            <span className="secondaryText">Forget all difficulties in finding the perfect room</span>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={400} end={550} duration={4} className="hero-counter-numbers"/>
                <span className="stats-plus-sign">+</span>
                <br />
                <span className="secondaryText">Premium Products</span>
              </span>
            </div>


            <div className="flexColCenter stat">
              <span>
                <CountUp start={5000} end={25000} duration={4} className="hero-counter-numbers"/>
                <span className="stats-plus-sign">+</span>
                <br />
                <span className="secondaryText">Satisfied Customers</span>
              </span>
            </div>


            <div className="flexColCenter stat">
              <span>
                <CountUp  end={5} duration={4} className="hero-counter-numbers"/>
                <span className="stats-plus-sign">+</span>
                <br />
                <span className="secondaryText">Awards Won</span>
              </span>
            </div>



          </div>





        </div>

        <div className="flexColStart hero-right">
          <div className="image-container">
            <img src="./hotel-hero.jpg" alt="hero image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
