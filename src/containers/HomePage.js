import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";

const Home = () =>{
    return(
        <MDBCard className="my-5 px-5 pb-5">
          <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
            <div className="col-md-5 p-lg-5 mx-auto my-5">
              <h1 className="display-4 font-weight-normal">Tech in your hands</h1>
              <p className="lead font-weight-normal">
                Tunakupa huduma na taarifa zote za kiteknolojia katika kiganja chako.
              </p>
              <a className="btn btn-outline-secondary" href="#">Ona zaidi</a>
            </div>
            <div className="product-device shadow-sm d-none d-md-block"></div>
            <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
          </div>

          <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
            <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
              <div className="my-3 py-3">
                <h2 className="display-5">Website design</h2>
                <p className="lead text-white p-1">Tovuti zinachukua nafasi kubwa katika maisha ya kisasa yanayoendana na teknolojia. </p>
                <p className="lead text-white">Kwa mahitaji ya tovuti ya kisasa inayofanya kazi katika kila kifaa cha kisasa, wasiliana nasi ili uweze kujipatia tovuti yako au ya biashara yako kwa gharama nafuu sasa. </p>
              </div>
            </div>
            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
              <div className="my-3 p-3">
                <h2 className="display-5">Graphics design</h2>
              </div>
              <div className="bg-dark shadow-sm mx-auto homepage">
              <p className="lead text-white p-2">Tunadesign logo, matangazo yeyote ya binafsi na ya kibiashara. huduma hii inapatikana popote Tanzania kwani kazi yote inafanyika ONLINE kisha unatumiwa popote ulipo. </p>
              <p className="lead text-white p-2">
                Pia tunafanya uhariri wa picha (Photoshop) kwa design nzuri.
              </p>
              </div>
            </div>
          </div>

          <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
              <div className="my-3 p-3">
                <h2 className="display-5">Video Editing</h2>
                <p className="lead">Tuna-edit videos mbalimbali katika level na quality ya hali juu kabisa. Tunatumia software zinazoendana na dunia ya sasa katika uhariri wa video zetu. </p>
                <ol className="lead text-left">
                  <li>Adobe Premeire Pro</li>
                  <li>Adobe After Effects</li>
                  <li>Adobe Premeire Pro</li>
                </ol>
              </div>
            </div>
            <div className="bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
              <div className="my-3 py-3">
                <h2 className="display-5">3D design, Animation na VFX</h2>
                <p className="lead">Tunadesign 3D models za ramani za nyumba, machine parts na vingine. Pia tunatengeneza video Animations za matangazo mbalimbali huku zikiwa zimewekwa visual effects (VFX) nzuri</p>
              </div>
            </div>
          </div>

        </MDBCard>
    )
}
export default Home;