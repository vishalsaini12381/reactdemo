import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import './bottompart.css';
class Bottompart extends React.Component{
	render()
	{
		return(
			<div className="container-fluid bottompart-fluid">
			   <div className="container">
			     <div className="mainsection">
			      <p>Copyright © 2019, Website Private Limited . All Rights Reserved</p>
			     </div>
			   </div>
			</div>
			)

	}
}

export default Bottompart;


