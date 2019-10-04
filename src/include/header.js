import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import './header.css';
import Toppart from './header/toppart.js';
import Searchpart from './header/searchpart.js';
import Menupart from './header/menupart.js';
class Header extends React.Component{
	render()
	{
		return(
			              <div>
		                    <Toppart/>
		                    <Searchpart/>
		                    <Menupart/>
		                  </div>
			)

	}
}

export default Header;


