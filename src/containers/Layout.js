import React from 'react';
import NavbarPage from '../components/Navbar';
import FooterPage from '../components/Footer';
import Home from './HomePage';


const Layout = () =>{
    return(
        <div className="mt-4">
            <NavbarPage />
            <Home />
            <FooterPage />
        </div>
    )
}
export default Layout;