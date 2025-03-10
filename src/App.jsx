import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Rooms from "./components/Rooms/Rooms";
import ExploreMore from "./components/Explore-more/Exploremore";
import Footer from "./components/footer/Footer";
const App = () => (
  <div className="App">
    <div>
      <div className="gold-gradient" />
      <Header />
      <Hero />
    </div>
    <Companies />
    <Rooms />
    <ExploreMore />

    <p className="explore-more-text">Discover new horizons and create unforgettable experiences &#187;</p>
<img src="./lastpicture.png" className="lastpicture" alt="" />



<Footer />

  </div>
);

export default App;
