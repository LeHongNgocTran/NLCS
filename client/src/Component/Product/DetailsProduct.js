import React, { useEffect, useState, memo, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faCircleMinus,
  faBagShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import "./ProductCss/DetailsProduct.css";
import Slider from "react-slick";
import { actions, useStore } from "../../Store";
function DetailsProduct() {
  let { productID } = useParams();
  const [count, setCount] = useState(1);
  const [detailsproduct, setDetailsproduct] = useState({});
  const [state, dispatch] = useStore();
  let navigate = useNavigate();
  const handleDecrease = () => {
    setCount((preState) => preState - 1);
    if (count <= 1) {
      setCount(1);
    }
  };

  const handleIncrease = () => {
    setCount((prevState) => prevState + 1);
  };

  useEffect(() => {
    axios
      .get("/api/sanpham")
      .then((res) => {
        state.allProduct.forEach((product) => {
          if (product.ma_sp === productID) {
            setDetailsproduct(product);
          }
        });
      })
      .catch((error) => console.log(error));
  }, [productID]);

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
  const handleAddProduct = () => {
    dispatch(actions.setUpdateCart());
    if (state.statusLogin) {
      axios
        .post("http://localhost:3001/api/addgiohang", {
          maSP: productID,
          maKH: state.userLogin.ma_nguoi_dung,
          soluong: count,
        })
        .then((res) => {console.log(state.statusLogin);})
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Vui lòng đăng nhập");
      navigate("/SignIn");
    }
  };
  // console.log(detailsproduct);
  // console.log(state.allProduct)
  return (
    <div className="detailsProduct">
      <div className="tensp d-flex justify-content-center">
        <Link className="text-decoration-none text-dark p-3" to="/">
          Home / {detailsproduct.ten_sp}
        </Link>
      </div>
      <Container className="chitietsanpham">
        <Row>
          <Col
            lg={6}
            sm={12}
            xs={12}
            className="details__left d-flex justify-content-center"
          >
            <div className="details__zoomin content">
              <img src={detailsproduct.image} alt={detailsproduct.ten_sp}></img>
            </div>
          </Col>
          <Col lg={6} sm={12} xs={12} className="details__right">
            <h4 className="my-3 text-dark fw-bolder">
              {detailsproduct.ten_sp}
            </h4>
            <h5 className="my-3 text-dark fw-bold">
              {new Intl.NumberFormat("it-IT", {
                style: "currency",
                currency: "VND",
              }).format(detailsproduct.gia_sp)}
            </h5>
            <div className="option d-flex flex-row mb-4">
              <p className="me-3 my-1">Size:</p>
              <select>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
              </select>
            </div>
            <div className="quantity d-flex flex-row">
              <p className="me-3 my-1">Số lượng: </p>
              <FontAwesomeIcon
                onClick={handleDecrease}
                className="me-3 mt-1"
                icon={faCircleMinus}
                size="2x"
                color="black"
              />
              <p className="me-3 text-dark">{count}</p>
              <FontAwesomeIcon
                onClick={handleIncrease}
                className="me-3 mt-1"
                icon={faCirclePlus}
                size="2x"
                color="black"
              />
            </div>
            <div className="my-4">
              <button onClick={handleAddProduct}>THÊM VÀO GIỎ HÀNG</button>
            </div>
            <p className="text1">
              Please be aware that the prices shown here do not include duties
              and taxes, which should be paid by the customer directly to the
              courier once the order arrives at the destination.
            </p>
            <p className="text2 dtext-dark fw-bolder text-secondary">
              Click here for more information:&nbsp;
              <Link to="/" className="text-dark">
                Shipping
              </Link>
              , &nbsp;
              <Link to="/" className="text-dark">
                Return & Refund Policy
              </Link>
            </p>
          </Col>
        </Row>

        <Row className="mt-5">
          <h5 className="text-dark">Mô tả sản phẩm</h5>
          <div className="mt-5">
            <ul>
              <li>Imitated acetate polyester</li>
              <li>TEAM WANG LOGO monogram design</li>
              <li>Gun black TEAM WANG EYELETS design</li>
              <li>Oversize fit</li>
            </ul>
            <br></br>
            <p className="text-uppercase">CHẤT LIỆU</p>
            <p>{detailsproduct.chatlieu}</p>
            <p>{detailsproduct.mausac}</p>
            <br></br>
            <p className="text-uppercase">WASHING INSTRUCTIONS:</p>
            <ul>
              <li>Hand wash with care (Water under 30°C)</li>
              <li> Do not bleach</li>
              <li> Professional dry cleaning</li>
              <li>Iron at a low temperature (Not exceeding 110°C)</li>
              <li>Line dry in the shade</li>
            </ul>
          </div>
        </Row>
      </Container>

      <Container fluid className="mb-5">
        <h3 className="text-uppercase ms-5 my-5">Sản phẩm cùng loại</h3>
        <div className="d-flex "></div>
        <Row className="w-100 m-0">
          <Slider {...settings} style={{ width: "98%" }}>
            {state.allProduct.map(
              (product) =>
                product.malsp === detailsproduct.malsp && (
                  <div className="detail__product">
                    <div key={product.ma_sp} className="detail__product--child">
                      <div className="product__top d-block">
                        <Link to={product.ma_sp}>
                          <img
                            src={product.image}
                            className="product__top--img img-fluid"
                          ></img>
                        </Link>
                        <p className="buy__now">BUY NOW</p>
                      </div>
                      <p className="items__name">{product.ten_sp}</p>
                      <div className="main__sp--price">
                        <p>
                          {new Intl.NumberFormat("it-IT", {
                            style: "currency",
                            currency: "VND",
                          }).format(product.gia_sp)}
                        </p>
                        <div>
                          <FontAwesomeIcon icon={faHeart} />
                          <FontAwesomeIcon icon={faBagShopping} />
                        </div>
                      </div>
                    </div>
                  </div>
                )
            )}
          </Slider>
        </Row>
      </Container>
    </div>
  );
}
export default DetailsProduct;
