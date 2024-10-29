import React from 'react';
import './HomeHeader.css';
import InnerImage from '../../assets/header/inner-image.jpg';

const HomeHeader = () => {
  return (
    <div className='headerContainer'>
      <div className='headerContent'>
        <div className='headerImage'>
          <img src={InnerImage} alt='Inner' />
        </div>
        <div className='headerText'>
          <h1>Eventure</h1>
          <h3>Let's go on an Eventure!</h3>
          <p>Find your next event</p>
          <p>Host your own event</p>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;