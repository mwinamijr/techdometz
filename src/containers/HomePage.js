import React from "react";
import Carousel from "../components/home/Carousel";
import Services from "../components/home/Services";
import About from "../components/home/About";
import Team from "../components/home/Team";
import Testmonials from "../components/home/Testmonials";

const Home = () =>{
    return(
        <div>
            <Carousel />
            <Services />
            <About />
            <Team />
            <Testmonials />
        </div>
    )
}
export default Home;