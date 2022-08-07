import "../css/globals.css";
import "../css/Featured.module.css";
import Carousel from "react-bootstrap/Carousel";
import featured5 from "../img/featured5.jpg";
import featured2 from "../img/featured2.jpg";
import featured3 from "../img/featured3.jpg";

function Featured() {
  return (
    <div className="slidercontainer">
      <div className="container ">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 container"
              src={featured5}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100 container"
              src={featured2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 container"
              src={featured3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Featured;
