import React from 'react';
import NavbarPage from '../components/Navbar';
import FooterPage from '../components/Footer';


const Layout = (props) =>{
    return(
        <div className="mt-4">
            <NavbarPage />
            { props.children }
            <FooterPage />
        </div>
    )
}
export default Layout;