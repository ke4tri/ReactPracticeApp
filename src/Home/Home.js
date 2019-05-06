import React from 'react';
import './Home.scss';
import HomeLogo from '../HomeLogo/HomeLogo';
import HomeBackImage from '../HomeBackImage/HomeBackImage'

const home = (props) => {
  return (
    <div className="containerDiv">
   
    <HomeBackImage />
    <HomeLogo />
      <img className="backgroundImage" src='https://tse4.mm.bing.net/th?id=OIP.mMDYYNczFB-bVf9rGMWsdwE8DF'/>
    </div>
  )
}

export default home;