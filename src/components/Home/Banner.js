import React from 'react';

const Banner = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">
          {appName.toLowerCase()}
        </h1>
        <div style={{display: 'flex', justifyContent:'space-between', marginTop: 30, marginBottom: 30}}>
        <i class="fa fa-address-card"></i>
        <i class="fa fa-address-card"></i>
        <i class="fa fa-solid fa-user"></i>
        <i class="fa fa-solid fa-phone"></i>
        <i class="fa fa-solid fa-plane"></i>
        <i class="fa fa-solid fa-print"></i>
        <i class="fa fa-solid fa-wifi"></i>
        </div>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
  );
};

export default Banner;
