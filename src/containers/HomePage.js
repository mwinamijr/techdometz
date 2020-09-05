import React from "react";
import Carousel from "../components/home/Carousel";
import Services from "../components/home/Services";
import About from "../components/home/About";
import Team from "../components/home/Team";

const Home = () =>{
    return(
        <div>
            <Carousel />
            <Services />
            <About />
            <Team />
        </div>
    )
}
export default Home;