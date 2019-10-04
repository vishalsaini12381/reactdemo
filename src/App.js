import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from 'react-router-dom'
import Home from './home.js';

function App() {
  return (
               <Router>
                     <Route exact path = "/" component = {Home} />
                 </Router>
  );
}

export default App;
