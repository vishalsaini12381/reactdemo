import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './newproduct.css';
class Newproduct extends React.Component{
  render()
  {
    const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
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
      <div className="container-fluid newproduct-fluid">
         <div className="container">
             <div className="headingpart">
                  <h2>New  Products</h2>
             </div>
              <Carousel responsive={responsive}>
                 <div className="mutlislider">
                   <div className="productimage">
                       <img src="./images/newproduct/1.png" alt="product 1" />
                       <div className="viewproduct"><Link to=""><i className="fa fa-shopping-cart"></i> Add to Cart</Link> </div>
                    </div>
                    <h3>Plato Fashion</h3>
                    <h4><span>$30</span> $20</h4>
                   <div className="wishlist"><Link to="" title="wishlist"><i class="fa fa-heart"></i></Link></div>
                   <div className="size">
                     <span>Size: </span>
                     <ul>
                        <li>S</li>
                        <li>M</li>
                        <li>L</li>
                        <li>XL</li>
                        <li>XXL</li>
                     </ul>
                   </div>
                 </div>
                <div className="mutlislider" >
                   <div className="productimage">
                       <img src="./images/newproduct/2.png" alt="product 2" />
                       <div className="viewproduct"><Link to=""><i className="fa fa-shopping-cart"></i> Add to Cart</Link> </div>
                    </div>
                  <h3>Red Scor Suit</h3>
                   <div className="wishlist"><Link to="" title="wishlist"><i class="fa fa-heart"></i></Link></div>
                  <h4><span>$30</span> $25</h4>
                   <div className="size">
                     <span>Size: </span>
                     <ul>
                        <li>S</li>
                        <li>M</li>
                        <li>L</li>
                        <li>XL</li>
                        <li>XXL</li>
                     </ul>
                   </div>
                </div>
                <div className="mutlislider">
                   <div className="productimage">
                       <img src="./images/newproduct/3.png" alt="product 3" />
                       <div className="viewproduct"><Link to=""><i className="fa fa-shopping-cart"></i> Add to Cart</Link> </div>
                    </div>
                    <h3>H&M Plajo</h3>
                    <h4><span>$30</span> $20</h4>
                   <div className="wishlist"><Link to="" title="wishlist"><i class="fa fa-heart"></i></Link></div>
                   <div className="size">
                     <span>Size: </span>
                     <ul>
                        <li>S</li>
                        <li>M</li>
                        <li>L</li>
                        <li>XL</li>
                        <li>XXL</li>
                     </ul>
                   </div>
                </div>
                <div className="mutlislider">
                   <div className="productimage">
                       <img src="./images/newproduct/4.png" alt="product 4" />
                       <div className="viewproduct"><Link to=""><i className="fa fa-shopping-cart"></i> Add to Cart</Link> </div>
                    </div>
                    <h3>Newy Way</h3>
                    <h4><span>$30</span> $20</h4>
                   <div className="wishlist"><Link to="" title="wishlist"><i class="fa fa-heart"></i></Link></div>
                   <div className="size">
                     <span>Size: </span>
                     <ul>
                        <li>S</li>
                        <li>M</li>
                        <li>L</li>
                        <li>XL</li>
                        <li>XXL</li>
                     </ul>
                   </div>
                </div>
                <div className="mutlislider">
                   <div className="productimage">
                       <img src="./images/newproduct/5.png" alt="product 5" />
                       <div className="viewproduct"><Link to=""><i className="fa fa-shopping-cart"></i> Add to Cart</Link> </div>
                    </div>
                   <h3>Moranto Fashion</h3>
                   <h4><span>$30</span> $20</h4>
                   <div className="wishlist"><Link to="" title="wishlist"><i class="fa fa-heart"></i></Link></div>
                   <div className="size">
                     <span>Size: </span>
                     <ul>
                        <li>S</li>
                        <li>M</li>
                        <li>L</li>
                        <li>XL</li>
                        <li>XXL</li>
                     </ul>
                   </div>
                </div>
                <div className="mutlislider">
                   <div className="productimage">
                       <img src="./images/newproduct/6.png" alt="product 6" />
                       <div className="viewproduct"><Link to=""><i className="fa fa-shopping-cart"></i> Add to Cart</Link> </div>
                    </div>
                   <h3>Delmin Style</h3>
                   <h4><span>$30</span> $20</h4>
                   <div className="wishlist"><Link to="" title="wishlist"><i class="fa fa-heart"></i></Link></div>
                   <div className="size">
                     <span>Size: </span>
                     <ul>
                        <li>S</li>
                        <li>M</li>
                        <li>L</li>
                        <li>XL</li>
                        <li>XXL</li>
                     </ul>
                   </div>
                </div>
              </Carousel>
         </div>
      </div>
      )

  }
}


export default Newproduct;


