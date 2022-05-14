import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "react-bootstrap";
import MainAdmin from "./MainAdmin";
import "./AdminCss/MainAdmin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faUser,faCircleExclamation,faEnvelopesBulk } from "@fortawesome/free-solid-svg-icons";
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useStore, actions } from "../../Store";
function Dashboard() {
  let navigate = useNavigate();
  const [state, dispatch] = useStore();
  return (
    <Container fluid className="admin mx-0 px-0 ">
      <Row className="px-0 mx-0">
        <Col lg={3} className="px-0 mx-0 cot1">
          <MainAdmin className="my-5" />
        </Col>
        <Col lg={9} className="mx-0 px-0 cot2">
          <h1 className="text-center py-4">JENBIE</h1>
          <div className="admin-log">
            <Link
              to="/"
              className="text-decoration-none fw-bold text-dark fs-5"
            >
              <FontAwesomeIcon icon={faUser} />
              &nbsp;Xin chào&nbsp;{state.userLogin.username}
            </Link>
            {state.statusLogin === "success" && (
              <p className="text-dark">
                <Link
                  to="/"
                  className="float-end text-decoration-none fw-bold nav-link text-dark fs-5 p-0"
                  onClick={() => {
                    dispatch(actions.setStatusLogin(""));
                    dispatch(actions.setUserLogin(""));
                    navigate("/");
                  }}
                >
                  <FontAwesomeIcon icon={faRightFromBracket} />
                  Log out
                </Link>
              </p>
            )}
          </div>
          <h4 className="p-4 fw-bold p-3 m-3 border rounded-2 bg-white">
            TỔNG QUAN
          </h4>
          <Container fluid className=" mx-0">
            <Row className="px-0 mx-0">
              <Col
                lg={3}
                className="d-flex border rounded align-middle flex-start p-0 "
              >
                <p style={{ backgroundColor: "#4287f5" }} className="my-auto">
                  <FontAwesomeIcon size="3x p-4" icon={faProductHunt} />
                </p>
                <div className='ms-2'>
                  <p className="fw-bold text-danger mt-3">
                    TỔNG SẢN PHẨM
                    <br></br>
                  </p>
                  <p className='fw-bold '> 58 sản phẩm</p>
                </div>
              </Col>
              <Col
                lg={3}
                className="d-flex border rounded align-middle flex-start p-0 "
              >
                <p style={{ backgroundColor: "#32a852" }} className="my-auto">
                  <FontAwesomeIcon size="3x p-4" icon={faUser} />
                </p>
                <div className='ms-2'>
                  <p className="fw-bold text-danger mt-3">
                    TỔNG KHÁCH HÀNG
                    <br></br>
                  </p>
                  <p className='fw-bold '> 128 khách hàng</p>
                </div>
              </Col>
              <Col
                lg={3}
                className="d-flex border rounded align-middle flex-start p-0"
              >
                <p style={{ backgroundColor: "#ff4f4f" }} className="my-auto">
                  <FontAwesomeIcon size="3x p-4" icon={faCircleExclamation}/>
                </p>
                <div className='ms-2'>
                  <p className="fw-bold text-danger mt-3">
                    SẮP HẾT HÀNG
                    <br></br>
                  </p>
                  <p className='fw-bold '> 58 sản phẩm</p>
                </div>
              </Col>
               <Col
                lg={3}
                className="d-flex border rounded align-middle flex-start p-0 "
              >
                <p style={{ backgroundColor: "#fcba03" }} className="my-auto">
                  <FontAwesomeIcon size="3x p-4" icon={faEnvelopesBulk} />
                </p>
                <div className='ms-2'>
                  <p className="fw-bold text-danger mt-3">
                    TỔNG ĐƠN HÀNG
                    <br></br>
                  </p>
                  <p className='fw-bold '> 1000 đơn hàng</p>
                </div>
              </Col>
            </Row>
          </Container>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}
export default Dashboard;
