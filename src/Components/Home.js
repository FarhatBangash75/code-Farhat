// HomePage.js
import React, { useState, useEffect } from "react";
import "./Home.css";

import chken from './Photo/chken.jpg';
import piza from './Photo/piza.jpeg';
import burger from './Photo/burger1.jpeg';
import cafetariapic from './Photo/cafetariapic.jpeg';
import pepsi from './Photo/pepsi.jpeg';
import pepsi2 from './Photo/pepsi2.jpeg';
import pepsi3 from './Photo/pepsi3.jpeg';
import food from './Photo/food.jpeg';
import food2 from './Photo/food2.jpeg';
import burger1 from './Photo/burger1.jpeg';
import cafefood3 from './Photo/cafefood3.jpeg';
import cafefood4 from './Photo/cafefood4.jpeg';
import cafefoo5 from './Photo/cafeefood5.jpeg';
import cfeefood6 from './Photo/cfeefood6.jpeg';
import twitter from './Photo/twitter.png';
import facebook from './Photo/facebook1.jpeg';
import youtube from './Photo/youtube.png';
import appstore from './Photo/appstore.png';
import googlepic from './Photo/googlepic.png';
import background1 from './Photo/background1.jpg';
import background2 from './Photo/background2.jpg';
import background4 from './Photo/background4.jpg';
import burger3 from './Photo/burger3.png';
import burger4 from './Photo/burger4.png';
import burger5 from './Photo/burger5.png';
import burger6 from './Photo/burger6.png';
import burger10 from './Photo/burger10.png';
import burger11 from './Photo/burger11.png';
import burger13 from './Photo/burger13.png';
import burgerr12 from './Photo/burgerr12.png';
function HomePage({ isSidebarOpen }) {
  const images = [background1, background2, background4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showingDelivery, setShowingDelivery] = useState(false);

  const openDelivery = () => {
    setShowingDelivery(true);
  };

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Manual arrows
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div className="main-pic-dev">
        <button className="arrow left-arrow" onClick={goToPrevious}>
          &#10094;
        </button>

        <img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="chken-pic fade"
        />

        <button className="arrow right-arrow" onClick={goToNext}>
          &#10095;
        </button>
      </div>

      <div className="dev-three">
        <div className="div-one-three">
          <h2 className="crunch-b">Crunch burger</h2>
        <h1 className="bur-price">Rs:310</h1>
          <img src={burger3} alt="describtion" className="pepsi-pic" />
          
        </div>
        <div className="dev-two-three">
          <h2 className="chps">Chiken & chips</h2>
                 <h1 className="burger4-price">Rs:620</h1>
          <img src={burger4} alt="describtion" className="burger4-pics"/> 

         
        </div>
        <div className="dev-three-three">
          <h2 className="hots">Wings & Bucket</h2>
          <h1 className="burger5-price">Rs:670</h1>
          <img src={burger5} alt="describtion" className="burger5-pics" />
        
          
        
        </div>
        <div className="dev-four-three">
          <h2 className="chiken">Chiken & Burger</h2>
          <h1 className="burger6-price">Rs:260</h1>
          <img src={burger6} alt="describtion" className="burger6-pic" />
         
       

          
        </div>
        
      </div>

      <div className="dev-six">
        <div className="sex-one">
          <h1 className="Family">Family fesitival 3</h1>
          <h1 className="burger10-price">Rs:2590</h1>
          <img src={burger10} alt="describtion" className="Burger10-pic" />
     
         
        </div>
        <div className="sex-two">
          <h1 className="xtrame">Xtream Duo </h1>
          <h1 className="burger11-price">Rs:1560</h1>
          <img src={burger11} alt="describtion" className="burger11-pic" />
         
     
        </div>
        <div className="sex-three">
          <h1 className="mighty">Mighty Zinger</h1>
          <h1 className="burger13-price">Rs:770</h1>
          <img src={burger13} alt="describtion" className="burger13-pic" />
          
        </div>
        <div className="sex-four">

          <h1 className="singnat">Singnat-box</h1>
          <h1 className="burger12-price">Rs:1200</h1>
          <img src={burgerr12} alt="describtion" className="burger12-pic" />
     
        </div>
        
      </div>

      <div className="Seven-dev">
        <h1 className="Seven-h1">Cheeze-bite</h1>
        <img src={twitter} alt="description" className="twiter-pic" />
        <img src={facebook} alt="description" className="facebook-pic" />
        <img src={youtube} alt="description" className="youtube-pic" />
      </div>

      <div className="routes">
        <li>
          <ul>Home</ul>
          <ul>About</ul>
          <ul>Service</ul>
          <ul>Contacts</ul>
        </li>
        <div className="li-dev">
          <li>
            <ul>Carreer</ul>
            <ul>Store Locator</ul>
            <ul>Track Locator</ul>
            <ul>Term & Conditions</ul>
          </li>
        </div>
        <p
          style={{
            marginLeft: "40px",
            marginTop: "40px",
            fontSize: "15px",
            fontWeight: "bold",
            color: "#777",
          }}
        >
          © 2025 Cheeze. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
