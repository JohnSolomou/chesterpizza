import "../css/globals.css";
// import "../css/Featured.module.css";
import Carousel from "react-bootstrap/Carousel";
import featured1 from "../img/burgerfriessoda.png";
import featured2 from "../img/special2.png";
import featured3 from "../img/special3.png";

function Featured() {
  return (
    <div className="slidercontainer">
      <div className="container ">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className=" container d-block w-100"
              src={featured1}
              alt="First slide"
            />
            <Carousel.Caption className="slide1title">
              {/* <h3>First slide label</h3> */}
              {/* <h3>Good to the last slice.</h3> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100 container"
              src={featured2}
              alt="Second slide"
            />
            <Carousel.Caption className="slide2title">
              {/* <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 container"
              src={featured3}
              alt="Third slide"
            />
            <Carousel.Caption className="slide2title">
              {/* <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
              {/* </p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Featured;
