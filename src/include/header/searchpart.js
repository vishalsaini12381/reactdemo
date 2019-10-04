import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import './searchpart.css';
class Searchpart extends React.Component{
	render()
	{
		return(
			<div className="container-fluid search-fluid">
			   <div className="container">
			     <div className="mainsection">
			        <div className="row">
				        <div className="col-sm-3">
				          <div className="mylogo">
				            <Link to=""><img src="./images/logo/logo.png" alt="logo"/></Link>
				          </div>
				        </div>
				        <div className="col-sm-6">
				          <div className="searchbox">
				              <form className="form-inline">
								   <input className="form-control mr-sm-2" type="search" placeholder="Search Here...." aria-label="Search"/>
								   <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="fa fa-search"></i></button>
							  </form>
				          </div>
				        </div>
				        <div className="col-sm-3">
				          <div className="mycart">
				            <Link to=""><i className="fa fa-shopping-cart"></i> My Cart</Link>
				            <span>3</span>
				          </div>
				        </div>
			        </div>
			     </div>
			   </div>
			</div>
			)

	}
}

export default Searchpart;


