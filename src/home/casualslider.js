import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './casualslider.css';
class Casualslider extends React.Component{
  render()
  {
    return(
      <div className="container-fluid casualslider-fluid">
           <Carousel>
                <div>
                    <img src="./images/slider/slider1.png" alt="slider 1" />
                </div>
                <div>
                    <img src="./images/slider/slider1.png" alt="slider 2" />
                </div>
                <div>
                    <img src="./images/slider/slider1.png" alt="slider 3" />
                </div>
            </Carousel>
      </div>
      )

  }
}


export default Casualslider;


