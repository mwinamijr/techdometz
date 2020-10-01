import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './containers/Layout';
import Home from './containers/HomePage';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Layout> 
        	<Home />
        </Layout>
      </div>
    </div>
  );
}

export default App;
