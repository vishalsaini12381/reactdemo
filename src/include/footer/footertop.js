import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import './footertop.css';
class Footertop extends React.Component{
	render()
	{
		return(
			<div className="container-fluid footertop-fluid">
			   <div className="container">
			     <div className="mainsection">
			       <div className="row">
			          <div className="col-sm-2">
			            <div className="footerlink">
			            <h3>About</h3>
			             <ul>
			                <li><Link to="">About Us</Link></li>
			                <li><Link to="">Contact Us</Link></li>
			                <li><Link to="">My Store</Link></li>
			                <li><Link to="">Careers</Link></li>
			             </ul>
			            </div>
			          </div>
			          <div className="col-sm-2">
			            <div className="footerlink">
			            <h3>Help</h3>
			             <ul>
			                <li><Link to="">Payments</Link></li>
			                <li><Link to="">Shipping</Link></li>
			                <li><Link to="">Cancellation & Returns</Link></li>
			                <li><Link to="">FAQ</Link></li>
			             </ul>
			            </div>
			          </div>
			          <div className="col-sm-2">
			            <div className="footerlink">
			            <h3>Policy</h3>
			             <ul>
			                <li><Link to="">Return Policy</Link></li>
			                <li><Link to="">Terms Of Use</Link></li>
			                <li><Link to="">Privacy Policy</Link></li>
			                <li><Link to="">Sitemap</Link></li>
			             </ul>
			            </div>
			          </div>
			          <div className="col-sm-2">
			            <div className="footerlink">
			            <h3>Social</h3>
			             <ul>
			                <li><Link to="">Facebook</Link></li>
			                <li><Link to="">Linkedin</Link></li>
			                <li><Link to="">Twitter</Link></li>
			                <li><Link to="">Youtube</Link></li>
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

export default Footertop;


