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
          {this.state.images.map(image => (
            <MDBCarouselItem itemId={image.id}>
              <MDBView>
                <img
                  className="d-block w-100"
                  src={image.photo}
                  alt={image.title}
                />
              </MDBView>
              <MDBCarouselCaption>
              <h3 className="h3-responsive">{image.title}</h3>
              <p>{image.description}</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          ))}
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
    );
  }
}


export default Carousel;