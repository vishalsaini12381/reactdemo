import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import './toppart.css';
class Toppart extends React.Component{
	render()
	{
		return(
			<div className="container-fluid topheader-fluid">
			   <div className="container">
			     <div className="mainsection">
			        <div className="row">
			        <div className="col-sm-6 col-12">
			           <div className="sectonpart">
				           <ul>
				             <li><Link to="mailto:info@website.com"><i className="fa fa-envelope"></i> info@website.com </Link></li>
				             <li><Link to="tel:1800-000-000"><i className="fa fa-phone"></i> 1800-000-000 </Link></li>
				           </ul>
			           </div>
			        </div>
			        <div className="col-sm-6 col-12">
			           <div className="accountpart">
				           <ul>
				             <li className="mydropdown"><Link to="/"> My Account <i className="fa fa-angle-down"></i></Link>
                                  <div className="droppart">
                                     <Link to="/"> <i className="fa fa-user"></i> My Profile </Link>
                                     <Link to="/"> <i className="fa fa-heart"></i> My Wishlist </Link>
                                     <Link to="/"> <i className="fa fa-shopping-cart"></i> My Cart </Link>
                                     <Link to="/"> <i className="fa fa-sign-in"></i> Login </Link>
                                     <Link to="/"> <i className="fa fa-user-plus"></i> Register </Link>
                                  </div>
				             </li>
				             <li className="mydropdown"><Link to="/"><img src="./images/flag/flag1.png"/> English <i className="fa fa-angle-down"></i></Link>
                                  <div className="droppart">
                                     <Link to="/"> <img src="./images/flag/flag1.png"/> English </Link>
                                     <Link to="/"> <img src="./images/flag/flag2.png"/> Arabic </Link>
                                  </div>
				             </li>
				           </ul>
			           </div>
			        </div>
			        </div>
			     </div>
			   </div>
			</div>
			)

	}
}

export default Toppart;


