import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBagShopping } from "@fortawesome/free-solid-svg-icons";
function Home() {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container fluid className="home me-0 pe-0">
      <Row className='me-0'>
      <video
                  autoPlay
                  loop
                  muted
                  width="100%"
                  height="100%"
                  className="d-block w-100"
                  style={{padding: 0}}
                >
                  <source src="../Images/GUCCI.mp4" type="video/mp4" />
                </video>
      </Row>
      <Row
        className="me-0 pe-0 home__row--second"
        style={{ backgroundImage: `url("../Images/Slide2.webp")` }}
      >
        <Col className="text-center my-auto">
          <h4>
            <Link to="/">DISCOVER MORE CREATIONS</Link>
          </h4>
          <h4>
            <Link to="/">DRESS</Link>
          </h4>
          <h4>
            <Link to="/">CADIGAN</Link>
          </h4>
          <h4>
            <Link to="/">DRESS</Link>
          </h4>
          <h4>
            <Link to="/">JEANS</Link>
          </h4>
          <h4>
            <Link to="/">SKIRT</Link>
          </h4>
          <h4>
            <Link to="/">SHIRT</Link>
          </h4>
        </Col>
      </Row>
      <h3 className='text-center fw-bold mb-5'>OUR PRODUCT</h3>
      <Row className="w-100 me-0 slider">
        <Slider {...settings} style={{ width: "50%" }} className='m-auto'>
          <div className="detail__product">
            <div className="detail__product--child">
              <div className="product__top d-block">
                <Link to="/">
                  <img
                    src="../Images/ao6.jpg"
                    className="product__top--img img-fluid"
                  ></img>
                </Link>
                <p className="buy__now">BUY NOW</p>
              </div>
              <p className="items__name">ÁO JENBIE</p>
              <div className="main__sp--price">
                <p>300.000 VNĐ</p>
                <div>
                  <FontAwesomeIcon icon={faHeart} />
                  <FontAwesomeIcon icon={faBagShopping} />
                </div>
              </div>
            </div>
          </div>

          <div className="detail__product">
            <div className="detail__product--child">
              <div className="product__top d-block">
                <Link to="/">
                  <img
                    src="../Images/ao2.jpg"
                    className="product__top--img img-fluid"
                  ></img>
                </Link>
                <p className="buy__now">BUY NOW</p>
              </div>
              <p className="items__name">ÁO </p>
              <div className="main__sp--price">
                <p>300.000 VNĐ</p>
                <div>
                  <FontAwesomeIcon icon={faHeart} />
                  <FontAwesomeIcon icon={faBagShopping} />
                </div>
              </div>
            </div>
          </div>

          <div className="detail__product">
            <div className="detail__product--child">
              <div className="product__top d-block">
                <Link to="/">
                  <img
                    src="../Images/ao3.jpg"
                    className="product__top--img img-fluid"
                  ></img>
                </Link>
                <p className="buy__now">BUY NOW</p>
              </div>
              <p className="items__name">ÁO JENBIE</p>
              <div className="main__sp--price">
                <p>300.000 VNĐ</p>
                <div>
                  <FontAwesomeIcon icon={faHeart} />
                  <FontAwesomeIcon icon={faBagShopping} />
                </div>
              </div>
            </div>
          </div>

          <div className="detail__product">
            <div className="detail__product--child">
              <div className="product__top d-block">
                <Link to="/">
                  <img
                    src="../Images/ao4.jpg"
                    className="product__top--img img-fluid"
                  ></img>
                </Link>
                <p className="buy__now">BUY NOW</p>
              </div>
              <p className="items__name">ÁO JENBIE</p>
              <div className="main__sp--price">
                <p>300.000 VNĐ</p>
                <div>
                  <FontAwesomeIcon icon={faHeart} />
                  <FontAwesomeIcon icon={faBagShopping} />
                </div>
              </div>
            </div>
          </div>

          <div className="detail__product">
            <div className="detail__product--child">
              <div className="product__top d-block">
                <Link to="/">
                  <img
                    src="../Images/ao5.jpg"
                    className="product__top--img img-fluid"
                  ></img>
                </Link>
                <p className="buy__now">BUY NOW</p>
              </div>
              <p className="items__name">ÁO JENBIE</p>
              <div className="main__sp--price">
                <p>300.000 VNĐ</p>
                <div>
                  <FontAwesomeIcon icon={faHeart} />
                  <FontAwesomeIcon icon={faBagShopping} />
                </div>
              </div>
            </div>
          </div>

          <div className="detail__product">
            <div className="detail__product--child">
              <div className="product__top d-block">
                <Link to="/">
                  <img
                    src="../Images/ao1.jpg"
                    className="product__top--img img-fluid"
                  ></img>
                </Link>
                <p className="buy__now">BUY NOW</p>
              </div>
              <p className="items__name">ÁO JENBIE</p>
              <div className="main__sp--price">
                <p>300.000 VNĐ</p>
                <div>
                  <FontAwesomeIcon icon={faHeart} />
                  <FontAwesomeIcon icon={faBagShopping} />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </Row>
      <h3 className='text-center fw-bold mb-5'>COLLECTION</h3>
      <Row
        className="home__row--third me-0 pe-0 py-5 justify-content-center "
        style={{ backgroundColor: "black" }}
      >
        <Col xs={5}>
          <img className="img-fluid d-block" src="../Images/p1.webp"></img>
        </Col>
        <Col xs={5}>
          <img className="img-fluid d-block py-5" src="../Images/p2.webp"></img>
        </Col>
      </Row>
      <Row
        style={{ backgroundColor: "black" }}
        className="home__row--third me-0 pe-0 py-5 justify-content-center "
      >
        <Col xs={5}>
          <img className="img-fluid d-block" src="../Images/p3.webp"></img>
        </Col>
        <Col xs={5}>
          <img className="img-fluid d-block py-5" src="../Images/p4.webp"></img>
        </Col>
      </Row>
      <Row
        className="home__row--last p-0 m-0"
        style={{ backgroundImage: `url("../Images/mainf.webp")` }}
      >
        <Col xs={6} className="d-flex justify-content-end">
          <img
            className="img-fluid m-0 p-0 d-block"
            src="../Images/mainf.webp"
          ></img>
        </Col>
        <Col xs={6} className="d-flex align-items-center col-last">
          <div className="text-center">
            <p>DISCOVER THE COLLECTION IN BOUTIQUES</p>
            <p>
              Discover more of the Spring-Summer 2022 pre-collection in CHANEL
              boutiques
            </p>
            <Link className="text-decoration-none p-2 fw-bold" to="/Spring2022">
              FIND A BOUTIQUE
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
