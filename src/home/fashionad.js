import React from 'react';
import ReactDOM from 'react-dom';
import './fashionad.css';
class Fashionad extends React.Component{

  render()
    {
    return(
      <div className="container-fluid fashionad-fluid">
         <div className="container">
            <div className="row">
             <div className="col-sm-12">
             <div className="addimage">
             <img src="./images/fashionad/2.jpg" alt="Fashion Ad"/>
             </div>
             </div>
            </div>

         </div>

      </div>
      )

  }
}


export default Fashionad;


