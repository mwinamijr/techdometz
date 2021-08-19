import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import Layout from './containers/Layout';
import BaseRouter from "./routes";

import SideBar from './screens/hisms/Sidebar'



function App() {
  

  return (
    <Router>
      <Header />
      <main className="py-3 lead">
        <Container>
          <Route path='/' component={HomeScreen} exact /> {}
          <Route path='/services' /> {}
          <Route path='/about' /> {}
          <Route path='/developers' /> {}
          <Route path='/contact' /> {}
        </Container>
      </main>
      <Footer />
    </Router


  );
}

export default App;
