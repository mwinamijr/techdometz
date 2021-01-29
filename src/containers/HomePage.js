import React from "react";
import {  MDBCard  } from "mdbreact";
import Carousel from "../components/home/Carousel";
import Services from "../components/home/Features";
import Testmonials from "../components/home/Testmonials";

const Home = () =>{
    return(
        <MDBCard className="my-5 px-1 pb-5">
            <Carousel />
            <Services />
            <Testmonials />
        </MDBCard>
    )
}
export default Home;