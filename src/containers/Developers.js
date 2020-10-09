import React from "react";
import { MDBCard, MDBCardBody } from "mdbreact";

import Team from "../components/home/Team";

const TeamPage = () => {
  return (
    <MDBCard className="my-5 px-1 pb-5 text-center">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5">
            Our amazing team
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
          
          <Team />
        </MDBCardBody>
      </MDBCard>
  );
}

export default TeamPage;