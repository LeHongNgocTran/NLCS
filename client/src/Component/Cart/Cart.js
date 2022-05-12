import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  Container,
  Row,
  Col,
  Modal,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { actions, useStore } from "../../Store";
import axios from "axios";

import "./Css/Cart.css";
function Cart() {
  const [state, dispatch] = useStore();
  const [sum, setSum] = useState(0);
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [address, setAddress] = useState("");

  const handleSubmit = () => {
    if (state.statusLogin) {
      if (address === "") {
        alert("Vui lòng nhập địa chỉ");
      } else {
        axios
          .post("http://localhost:3001/api/hoadon", {
            maKH: state.userLogin.ma_nguoi_dung,
            maGH: state.carts[0].ma_gio_hang,
            total: sum,
            diachinguoidung: address,
            trangthai: "Chưa xác nhận"
          })
          .then(
            handleClose(),
            setSum(0),
            dispatch(actions.setUpdateCart()),
            alert("Cám ơn quý khách đã mua hàng"),
            navigate("/Product")
          );
      }
    } else {
      alert("Bạn cần phải đăng nhập");
      navigate("/SignIn");
    }
  };
  useLayoutEffect(() => {
    axios
      .post("http://localhost:3001/api/getCart", {
        maKH: state.userLogin.ma_nguoi_dung,
      })
      .then((results) => {
        setSum(0);
        dispatch(actions.getCarts(results.data.carts));
        results.data.carts.forEach((cart) => {
          setSum((prev) => prev + cart.gia_sp * cart.soluong);
        });
      });
      // console.log("re-rende1r");
  }, [state.updateCart]);

  return (
    <div fluid className="chitietgiohang">
      <h3 className="text-center py-3 ">GIỎ HÀNG CỦA TÔI</h3>
      <Container>
        <Row className="chitietgiohang__noidung">
          <Col lg={8} sm={12} xs={12} className="chitietgiohang__noidung--main">
            {state.carts.map((product) => (
              <Row key={product.ma_sp} className="mb-5">
                <Col lg={2} sm={5} xs={5} className="noidung__hinhanh">
                  <img src={product.image}></img>
                </Col>
                <Col lg={7} sm={7} xs={5} className="noidung__chitiet">
                  <h6>{product.ten_sp}</h6>
                  <p className="noidung__chitiet--gia">
                    Giá:
                    {new Intl.NumberFormat("it-IT", {
                      style: "currency",
                      currency: "VND",
                    }).format(product.gia_sp)}
                  </p>
                  <div className="option d-flex flex-row flex-wrap">
                    <div className="d-flex flex-row mb-4">
                      <p className="me-3 my-1">Size:</p>
                      <select className="me-3">
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                      </select>
                    </div>
                    <div className="d-flex flex-row">
                      <p className="me-3 my-1 ">Số lượng:</p>
                      <input type="number" value={product.soluong}></input>
                    </div>
                  </div>
                </Col>
                <Col lg={3} sm={12} xs={12} className="delete__chitiet">
                  <div className="d-flex flex-column">
                    <h6>
                      {new Intl.NumberFormat("it-IT", {
                        style: "currency",
                        currency: "VND",
                      }).format(product.gia_sp)}
                    </h6>
                    <div className="delete__chitiet--button">
                      <button className="heart me-4">
                        <FontAwesomeIcon icon={faHeart} />
                      </button>
                      <button
                        className="trash"
                        onClick={() => {
                          axios.post(
                            "http://localhost:3001/api/deleteProduct",
                            {
                              maSP: product.ma_sp,
                              maGH: product.ma_gio_hang,
                            }
                          );
                          dispatch(actions.setUpdateCart());
                         
                        }}
                      >
                        <FontAwesomeIcon
                          color="white"
                          className="trash-child"
                          icon={faTrashCan}
                        />
                      </button>
                    </div>
                  </div>
                </Col>
              </Row>
            ))}
            <div className="chitietgiohang__noidung--button d-flex ">
              <button className="flex-start flex-fill me-5">XÓA HẾT</button>
              <button className="flex-end flex-fill">
                <Link className="text-decoration-none text-white" to="/Product">
                  QUAY LẠI MUA HÀNG
                </Link>
              </button>
            </div>
          </Col>
          <Col lg={4} sm={12} xs={12} className="donhang mb-5">
            <h4 className="text-uppercase">Đơn hàng</h4>
            <h6>NHẬP MÃ KHUYẾN MÃI</h6>
            <div className="khuyenmai d-flex flex-row w-100 my-3">
              <input type="text"></input>
              <p>Áp dụng</p>
            </div>
            <div className="d-flex flex-row my-2">
              <p className="fw-bold">Đơn hàng</p>
              <p className="flex-fill text-end fw-bold">Tổng tiền</p>
            </div>
            <div className="d-flex flex-row my-3">
              <p className="fw-bold">Giảm</p>
              <p className="flex-fill text-end">0 VND</p>
            </div>
            <div className="d-flex flex-row my-3">
              <p className="fw-bold">Tạm tính</p>
              <p className="flex-fill text-end fw-bold">
                {new Intl.NumberFormat("it-IT", {
                  style: "currency",
                  currency: "VND",
                }).format(sum)}
              </p>
            </div>
            <div className="thanhtoan">
              <Button variant="primary" onClick={handleShow}>
                THANH TOÁN
              </Button>
              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Vui lòng nhập địa chỉ</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <InputGroup className="mb-3">
                    <InputGroup.Text
                      id="inputGroup-sizing-default"
                      bg="primary"
                    >
                      Địa chỉ
                    </InputGroup.Text>
                    <FormControl
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleSubmit}>
                    Đặt hàng
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Cart;
