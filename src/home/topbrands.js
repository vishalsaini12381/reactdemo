import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './topbrands.css';
class Topbrands extends React.Component{
  render()
  {
    const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
    return(
      <div className="container-fluid topbrands-fluid">
         <div className="container">
              <Carousel responsive={responsive}>
                 <div className="mutlislider">
                   <div className="productimage">
                       <img src="./images/brand/1.png" alt="brand 1" />
                    </div>
                 </div>
                <div className="mutlislider" >
                   <div className="productimage">
                       <img src="./images/brand/2.png" alt="brand 2" />
                    </div>
                </div>
                <div className="mutlislider">
                   <div className="productimage">
                       <img src="./images/brand/3.png" alt="brand 3" />
                    </div>
                </div>
                <div className="mutlislider">
                   <div className="productimage">
                       <img src="./images/brand/4.png" alt="brand 4" />
                    </div>
                </div>
                <div className="mutlislider">
                   <div className="productimage">
                       <img src="./images/brand/5.png" alt="brand 5" />
                    </div>
                </div>
                <div className="mutlislider">
                   <div className="productimage">
                       <img src="./images/brand/6.png" alt="brand 6" />
                    </div>
                </div>
              </Carousel>
         </div>
      </div>
      )

  }
}


export default Topbrands;


