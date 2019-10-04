import React from 'react';
import ReactDOM from 'react-dom';
import Footertop from './footer/footertop.js';
import Bottompart from './footer/bottompart.js';
import './footer.css';
class Footer extends React.Component{
	render()
	{
		return(
			             <div>
		                    <Footertop/>
		                    <Bottompart/>
		                  </div>
			)

	}
}

export default Footer;