import React from "react";
import axios from "axios";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView } from
"mdbreact";

class Carousel extends React.Component {
  state = {
    images: []
  };

  componentDidMount() {
		axios.get("http://127.0.0.1:8000/carousel/")
		.then(res => {
      this.setState({
        images: res.data
			});
			console.log(res.data)
		});
	}
	
  render() {
    return (
      <div>
      <hr />
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src={this.props}
                alt="First slide"
              />
            </MDBView>
            <MDBCarouselCaption>
            <h3 className="h3-responsive">Slight Mast</h3>
            <p>Third text</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"
                alt="Second slide"
              />
            </MDBView>
            <MDBCarouselCaption>
            <h3 className="h3-responsive">Slight Mast</h3>
            <p>Third text</p>
          </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                alt="Third slide"
              />
            </MDBView>
            <MDBCarouselCaption>
            <h3 className="h3-responsive">Slight Mast</h3>
            <p>Third text</p>
          </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
    );
  }
}


export default Carousel;