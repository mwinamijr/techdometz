import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import Layout from './containers/Layout';
import BaseRouter from "./routes";

function App() {
  return (
  	<Router>
	    <div className="App">
	      <div className="container">
	        <Layout> 
	        	<BaseRouter />
	        </Layout>
	      </div>
	    </div>
	  </Router>
  );
}

export default App;
