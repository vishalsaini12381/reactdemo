import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './topproduct.css';
class Topproduct extends React.Component{
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
      <div className="container-fluid topproduct-fluid">
         <div className="container">
             <div className="headingpart">
                  <h2>Top Products</h2>
             </div>
              <Carousel responsive={responsive}>
                 <div className="mutlislider">
                   <div className="productimage">
                       <img src="./images/product/1.png" alt="product 1" />
                       <div className="viewproduct"><Link to=""><i className="fa fa-shopping-cart"></i> Add to Cart</Link> </div>
                    </div>
                    <h3>Polo T-shirt</h3>
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
                       <img src="./images/product/2.png" alt="product 2" />
                       <div className="viewproduct"><Link to=""><i className="fa fa-shopping-cart"></i> Add to Cart</Link> </div>
                    </div>
                  <h3>Red Tape T-shirt</h3>
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
                       <img src="./images/product/3.png" alt="product 3" />
                       <div className="viewproduct"><Link to=""><i className="fa fa-shopping-cart"></i> Add to Cart</Link> </div>
                    </div>
                    <h3>H&M T-shirt</h3>
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
                       <img src="./images/product/4.png" alt="product 4" />
                       <div className="viewproduct"><Link to=""><i className="fa fa-shopping-cart"></i> Add to Cart</Link> </div>
                    </div>
                    <h3>Puma T-shirt</h3>
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
                       <img src="./images/product/5.png" alt="product 5" />
                       <div className="viewproduct"><Link to=""><i className="fa fa-shopping-cart"></i> Add to Cart</Link> </div>
                    </div>
                   <h3>Levis T-shirt</h3>
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
                       <img src="./images/product/6.png" alt="product 6" />
                       <div className="viewproduct"><Link to=""><i className="fa fa-shopping-cart"></i> Add to Cart</Link> </div>
                    </div>
                   <h3>HRX by Hrithik</h3>
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
                       <img src="./images/product/7.png" alt="product 7" />
                       <div className="viewproduct"><Link to=""><i className="fa fa-shopping-cart"></i> Add to Cart</Link> </div>
                    </div>
                   <h3>Roadster T-shirt</h3>
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
                       <img src="./images/product/8.png" alt="product 8" />
                       <div className="viewproduct"><Link to=""><i className="fa fa-shopping-cart"></i> Add to Cart</Link> </div>
                    </div>
                   <h3>WROGN T-shirt</h3>
                   <h4><span>$30</span> $20</h4>
                   <div className="wishlist"><Link to="" title="wishlist"><i class="fa fa-heart"></i></Link></div>
                   <div className="size"> <span>Size: </span> <ul> <li>S</li> <li>M</li> <li>L</li> <li>XL</li> <li>XXL</li> </ul> </div>
                </div>
              </Carousel>
         </div>
      </div>
      )

  }
}


export default Topproduct;


