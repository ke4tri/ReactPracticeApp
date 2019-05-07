import React from 'react';
import './ModuleTwo.scss'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
//import { directive } from '@babel/types';

class ModuleTwo extends React.Component {
 
render() {

  return(
    <div className="newWrapper">
    <Carousel className="carouselWrapper clip-polygon"showArrows={false} showStatus={false} showThumbs={false} autoPlay infiniteLoop>
    <div>
        <img src="https://www.wonolo.com/wp-content/uploads/2019/01/warehouse-operations.jpg" />
        <p className="legend">TDelivery Driver</p>
    </div>
    <div>
        <img src="https://www.wonolo.com/wp-content/uploads/2019/01/delivery-drivers.jpg" />
        <p className=".imgNote"></p>
    </div>
    <div>
        <img src="https://www.wonolo.com/wp-content/uploads/2019/01/general-labor.jpg" />
        <p className=".imgNote"></p>
    </div>
    <div>
        <img src="https://www.wonolo.com/wp-content/uploads/2018/07/Homepage_Merchandising-1.jpg" />
        <p className=".imgNote"></p>
    </div>
    <div>
        <img src="https://www.wonolo.com/wp-content/uploads/2018/05/Home_EventStaffing2_Placeholder.jpg" />
        <p className=".imgNote"></p>
    </div>
</Carousel>

</div>
   );
  }

};

export default ModuleTwo;

