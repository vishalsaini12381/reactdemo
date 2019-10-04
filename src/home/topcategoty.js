import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './topcategoty.css';
class Topcategoty extends React.Component{
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
      <div className="container-fluid topcategory-fluid">
         <div className="container">
             <div className="headingpart">
                  <h2>Top Category</h2>
             </div>
              <Carousel responsive={responsive}>
                 <div className="mutlislider">
                   <div className="productimage">
                       <img src="./images/categories/1.png" alt="product 1" />
                       <div className="viewproduct"><Link to=""><i className="fa fa-eye"></i> View Product</Link> </div>
                    </div>
                    <h3>Women Fashion</h3>
                 </div>
                <div className="mutlislider" >
                   <div className="productimage">
                       <img src="./images/categories/2.png" alt="product 2" />
                       <div className="viewproduct"><Link to=""><i className="fa fa-eye"></i> View Product</Link> </div>
                    </div>
                  <h3>Men Fashion</h3>
                </div>
                <div className="mutlislider">
                   <div className="productimage">
                       <img src="./images/categories/3.png" alt="product 3" />
                       <div className="viewproduct"><Link to=""><i className="fa fa-eye"></i> View Product</Link> </div>
                    </div>
                    <h3>Baby Fashion</h3>
                </div>
                <div className="mutlislider">
                   <div className="productimage">
                       <img src="./images/categories/4.png" alt="product 4" />
                       <div className="viewproduct"><Link to=""><i className="fa fa-eye"></i> View Product</Link> </div>
                    </div>
                    <h3>Home Applience</h3>
                </div>
                <div className="mutlislider">
                   <div className="productimage">
                       <img src="./images/categories/5.png" alt="product 5" />
                       <div className="viewproduct"><Link to=""><i className="fa fa-eye"></i> View Product</Link> </div>
                    </div>
                   <h3>Electronics</h3>
                </div>
                <div className="mutlislider">
                   <div className="productimage">
                       <img src="./images/categories/6.png" alt="product 6" />
                       <div className="viewproduct"><Link to=""><i className="fa fa-eye"></i> View Product</Link> </div>
                    </div>
                   <h3>Games Accessories</h3>
                </div>
                <div className="mutlislider">
                   <div className="productimage">
                       <img src="./images/categories/7.png" alt="product 7" />
                       <div className="viewproduct"><Link to=""><i className="fa fa-eye"></i> View Product</Link> </div>
                    </div>
                   <h3>Furniture</h3>
                </div>
              </Carousel>
         </div>
      </div>
      )

  }
}


export default Topcategoty;


