import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

import About from './containers/AboutPage';
import Developers from './containers/Developers';
import Services from './containers/Services';
import Home from './containers/HomePage';
import Contact from './components/ContactForm';
import Header from './components/Navbar';
import Footer from './components/Footer';

function App() {
  

  return (
    <Router>
      <Header />
      <main className="py-3 lead">
        <Container>
          <Route path='/' component={Home} exact /> {}
          <Route path='/services' component={Services} /> {}
          <Route path='/about' component={About} /> {}
          <Route path='/developers' component={Developers} /> {}
          <Route path='/contact' component={Contact} /> {}
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
