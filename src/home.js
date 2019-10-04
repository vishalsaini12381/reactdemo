import React from 'react';
import ReactDOM from 'react-dom';
import Header from './include/header.js';
import Footer from './include/footer.js';
import Casualslider from './home/casualslider.js';
import Topcategoty from './home/topcategoty.js';
import Topproduct from './home/topproduct.js';
import Fashionad from './home/fashionad.js';
import Newproduct from './home/newproduct.js';
import Topbrands from './home/topbrands.js';
import Datatable from './home/datatable.js';

class Home extends React.Component
          {
	        render()
	              {
		             return(
		             	  <div>
		                    <Header/>
		                    <Casualslider/>
		                    <Topcategoty/>
		                    <Topproduct/>
		                    <Fashionad/>
		                    <Newproduct/>
		                    <Topbrands/>
		                    <Footer/>
							<Datatable/>
		                  </div>

			);
	}
}
export default Home;
