import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Nav, Navbar, NavDropdown, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faCircleChevronUp,
  faBagShopping,
  faUser,
  faRightFromBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useStore, actions } from "../../Store";
function Header({ showHeader }) {
  const [state, dispatch] = useStore();
  const [show, setShow] = useState(true);
  let navigate = useNavigate();
  const handleSubmit = () => {
    if (state.searchProduct) navigate(`/Search/${state.searchProduct}`);
  };

  return (
    <>
      <Container fluid className="m-0">
        <Row className="headeer__nav--infor">
          <Col lg={12} sm={12} xs={12}>
            <Nav className="flex-end signin">
              <Nav.Item className="flex-fill text-end">
                <Nav.Link>
                  <Link to="/" className=" text-decoration-none fw-bold">
                    <FontAwesomeIcon icon={faUser} />
                    &nbsp;Xin chào&nbsp;{state.userLogin.username}
                  </Link>
                  {(state.statusLogin === "success" && (
                    <>
                      <Link
                        to="/"
                        className="text-decoration-none fw-bold nav-link"
                        onClick={() => {
                          dispatch(actions.setStatusLogin(""));
                          dispatch(actions.setUserLogin(""));
                        }}
                      >
                        <FontAwesomeIcon icon={faRightFromBracket} />
                        Log out
                      </Link>
                    </>
                  )) || (
                    <>
                      <Link
                        to="/SignIn"
                        className="text-decoration-none fw-bold ms-3"
                      >
                        <FontAwesomeIcon icon={faUserPlus} /> Đăng Nhập
                      </Link>
                    </>
                  )}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="/Cart" className="text-dark text-decoration-none ">
                    <FontAwesomeIcon icon={faBagShopping} />
                  </Link>
                  &nbsp;
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
      {show && (
        <div className="header__nav">
          <Container className="">
            <Row>
              <Col lg={3} sm={3} xs={3}></Col>
              <Col lg={6} sm={6} xs={6} className="navbar-brand m-0">
                <Nav.Item className="text-center">
                  <Link
                    to="/"
                    className="text-uppercase text-decoration-none text-dark"
                  >
                    <h1>jenbie</h1>
                  </Link>
                </Nav.Item>
              </Col>
            </Row>
            <Row className="content__header">
              <Col lg={10} sm={6} xs={6} className="task">
                <Navbar expand="lg" className="main_nav">
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar">
                      <Nav.Item>
                        <Nav.Link>
                          <Link to="/">Trang chủ</Link>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link>
                          <Link to="/Product">Sản Phẩm</Link>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <NavDropdown title="Bộ Sưu Tập" id="basic-nav-dropdown">
                          <NavDropdown.Item>
                            <Link to="/Spring2022">Xuân 2022</Link>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <Link to="/">Ready to wear</Link>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <Link to="/">Hạ 2022</Link>
                          </NavDropdown.Item>
                        </NavDropdown>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link>
                          <Link to="/Contact">Liên Hệ</Link>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link>
                          <Link to="/About">Về chúng tôi</Link>
                        </Nav.Link>
                      </Nav.Item>
                      {state.statusLogin === "success" &&
                        state.userLogin.ma_nguoi_dung === 1 && (
                          <Nav.Item>
                            <Nav.Link>
                              <Link to="/AdminProduct">Quản Lý</Link>
                            </Nav.Link>
                          </Nav.Item>
                        )}
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </Col>
              <Col lg={2} sm={6} xs={6} className="">
                <Nav.Item className="find">
                  <div className="search-form">
                    <label>
                      <input
                        type="search"
                        className="search-field"
                        placeholder="What are you looking for ? "
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            dispatch(actions.setSearch(e.target.value));
                            handleSubmit();
                          }
                        }}
                      />
                    </label>
                    <input type="submit" className="search-submit" />
                  </div>
                </Nav.Item>
              </Col>
            </Row>
            {showHeader && (
              <div
                onClick={() => {
                  document.documentElement.scrollTop = 0;
                }}
                style={{
                  position: "fixed",
                  right: "20px",
                  bottom: "40px",
                  zIndex: "1000",
                  cursor: "pointer",
                }}
              >
                <FontAwesomeIcon
                  icon={faCircleChevronUp}
                  color="gray"
                  size="3x"
                />
              </div>
            )}
          </Container>
        </div>
      )}
    </>
  );
}

export default Header;
