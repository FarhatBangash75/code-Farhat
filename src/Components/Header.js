import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import cooking from './Photo/cooking.png';
import { useNavigate } from 'react-router-dom';
import btn from './Photo/btn.webp';
import bikedli from './Photo/bikedeli.png';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder';
import pickup from './Photo/pickup.47bb874f83ea6acb5a47.png'

function Header() {
  const [show, setShow] = useState(false); 
  const [showingDelivery, setShowingDelivery] = useState(false); 
  const [showingLogin, setShowingLogin] = useState(false); 

  const mapRef = useRef(null);
  const navigate = useNavigate();

 
  const toggleSidebar = () => {
    setShow(prev => !prev);
  };


  const handleNavigation = (nav) => {
    navigate(nav);
    setShow(false);
  };


  const openDelivery = () => {
    setShowingDelivery(true);
  };

  
  const closeDelivery = () => {
    setShowingDelivery(false);
    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current = null;
    }
  };


  const openLogin = () => {
    setShowingLogin(true);
    setShow(false); 
  };


  const closeLogin = () => {
    setShowingLogin(false);
  };

 
  useEffect(() => {
    if (showingDelivery && !mapRef.current) {
      const map = L.map('map').setView([20.5937, 78.9629], 5);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map);

      L.Control.geocoder({
        defaultMarkGeocode: true,
      }).addTo(map);

      mapRef.current = map;
    }
  }, [showingDelivery]);

  return (
    <div className={`Heder-dev ${showingDelivery || showingLogin ? 'blur-active' : ''}`}>

      <div className='delivery-dev' onClick={openDelivery}>
        <img src={bikedli} alt='menu' className='bike-dev' />
        <p className='delivery-text'>Delivery</p>
      </div>


      <div className={`main-header-content ${show ? 'blurred' : ''}`}>
        <div className='header-dev' />
       
        <h1 className="text">Cheeze-bite</h1>
        <button className='header-btn' onClick={openLogin}>   🔐 Login</button>
        <img src={pickup} alt='logo' className='pickup-pic'></img>

      </div>
<div className="option" onClick={toggleSidebar}>
  ☰
</div>



      {show && (
        <>
          <div className="sider-dev-one">
            <div className="sider-dev">
              <button className='btn-login' onClick={openLogin}>🔐 Login</button>
              <p>________________________________</p>
              <ul>
                <li onClick={() => handleNavigation('/')}>Home</li>
                <li onClick={() => handleNavigation('/About')}>About Us</li>
                <li onClick={() => handleNavigation('/Blog')}>Feedback</li>
                <li onClick={() => handleNavigation('/Service')}>Service</li>
                <li onClick={() => handleNavigation('/Contacts')}>Contacts Us</li>
              </ul>
            </div>
          </div>
          <div className="overlay" onClick={toggleSidebar}></div>
        </>
      )}

     
      {showingDelivery && (
        <>
          <div className="delivery-popup">
            <h2 style={{ margin: '0 0 16px', fontSize: '24px', color: '#333' }}>
              📍 Select Your Delivery Location
            </h2>
            <div id="map" className="map-container"></div>
            <button className="close-delivery" onClick={closeDelivery}>Close</button>
          </div>
          <div className="overlay" onClick={closeDelivery}></div>
        </>
      )}

    
      {showingLogin && (
        <>
          <div className="login-popup">
            <h2 style={{ marginBottom: '16px', fontSize: '24px', color: '#333' }}>
              🔐 Login
            </h2>
            <input type="text" placeholder="Username" className="login-input" />
            <input type="password" placeholder="Password" className="login-input" />
            <button className='submit-btn'>Submit</button>
            <button className="close-login" onClick={closeLogin}>Close</button>
          </div>
          <div className="overlay" onClick={closeLogin}></div>
        </>
      )}
    </div>
  );
}

export default Header;
