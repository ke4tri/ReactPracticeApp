import React from 'react';
import './Home.scss';
import HomeLogo from '../HomeLogo/HomeLogo';
import HomeBackImage from '../HomeBackImage/HomeBackImage';
import ModuleOne from '../ModuleOne/ModuleOne';

const home = (props) => {
  return (
    <div className="containerDiv">
   
    <HomeBackImage />
    <HomeLogo />
    <ModuleOne />
      <img className="backgroundImage" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHUC01PwShpuXtVZ_eTz_hRWhklrPR67746_q53TXRoCL6XD-gOQ'/>
    </div>
  )
}

export default home;