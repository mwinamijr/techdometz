import React from "react";
import Carousel from "../components/home/Carousel";
import Services from "../components/home/Features";
import Testmonials from "../components/home/Testmonials";

const Home = () =>{
    return(
        <div>
            <Carousel />
            <Services />
            <Testmonials />
        </div>
    )
}
export default Home;