import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import Layout from './containers/Layout';
import BaseRouter from "./routes";

function App() {
  return (
  	<Router>
	    <div className="App">
	      <div className="pl-5 pr-5">
	        <Layout> 
	        	<BaseRouter />
	        </Layout>
	      </div>
	    </div>
	  </Router>
  );
}

export default App;
