import React from "react";
import "./Rooms.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
const Rooms = () => {


const SliderButtons =()=>{
return(
    <div className="r-buttons">
        
    </div>
)
}


  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth rooms-container">
        <div className="rooms-head flexColStart">
          <span className="goldText">Best Choices</span>
          <span className="primaryText">Popular Rooms</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart room-card">
                <img src={card.image} alt="" />

                <span className="secondryText room-price">
                  <span style={{ color: "var(--gold)" }}>$</span>
                  <span className="goldText">{card.price}</span>
                </span>

                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.details}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Rooms;
