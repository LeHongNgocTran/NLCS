import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Container, Row, Col, Button, Table, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faFileText,
  faFilePdf,
  faFileExcel,
  faCircleMinus,
  faTrash,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import MainAdmin from "./MainAdmin";
import "./AdminCss/AdminProduct.css";
import { useStore, actions } from "../../Store";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminProduct() {
  let navigate = useNavigate();
  const [state, dispatch] = useStore();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    axios
      .get("/api/sanpham")
      .then((result) =>
        dispatch(actions.setAllProducts(result.data.allProduct))
      );
  });
  return (
    <Container fluid className="admin mx-0 px-0 ">
      <Row className="px-0 mx-0">
        <Col lg={12} className="mx-0 px-0 cot2 ">
          <h4 className="p-4 fw-bold p-3 m-3 border rounded-2 bg-white text-center">
            DANH SÁCH SẢN PHẨM
          </h4>
          <div className="ms-3">
            <Button
              variant="primary"
              onClick={() => {
                navigate("/Dashboard/AddProduct");
              }}
            >
              <FontAwesomeIcon icon={faPlus} /> Tạo mới sản phẩm
            </Button>
            <Button variant="warning">
              <FontAwesomeIcon icon={faFileText} /> Tải từ file
            </Button>
            <Button variant="danger">
              <FontAwesomeIcon icon={faFilePdf} /> Xuất PDF
            </Button>
            <Button variant="success">
              <FontAwesomeIcon icon={faFileExcel} /> Xuất Excel
            </Button>
            <Button variant="secondary">
              <FontAwesomeIcon icon={faCircleMinus} />
              &nbsp;Xóa tất cả
            </Button>
          </div>
          <div className="tableproduct ">
            <Table striped hover className="m-3 bg-white">
              <thead>
                <tr className="text-center text-uppercase">
                  <th>Mã sản phẩm</th>
                  <th>Tên sản phẩm</th>
                  <th>Ảnh</th>
                  <th>Chất liệu</th>
                  <th>Giá tiền</th>
                  <th>Danh mục</th>
                  <th>Tình trạng</th>
                  <th>Chức năng</th>
                </tr>
              </thead>
              <tbody className="text-center align-middle ">
                {state.allProduct.map((product) => (
                  <tr key={product.ma_sp}>
                    <td className="fw-bold" style={{ width: "10%" }}>
                      {product.ma_sp}
                    </td>
                    <td style={{ width: "10%" }}>{product.ten_sp}</td>
                    <td style={{ width: "20%" }}>
                      <img src={product.image}></img>
                    </td>
                    <td style={{ width: "10%" }}>{product.chatlieu}</td>
                    <td style={{ width: "10%" }}>
                      {new Intl.NumberFormat("it-IT", {
                        style: "currency",
                        currency: "VND",
                      }).format(product.gia_sp)}
                    </td>
                    <td style={{ width: "8%" }}>{product.malsp}</td>
                    <td style={{ width: "10%" }}>
                      <p className="text-white bg-success mt-4 mx-2 rounded-3 fw-bolder">
                        Còn hàng
                      </p>
                    </td>
                    <td style={{ width: "10%" }}>
                      <Button
                        variant="warning"
                        onClick={() => {
                          dispatch(actions.getDetailsProduct(product));
                          navigate("/Dashboard/EditProduct");
                          // console.log(product);
                        }}
                      >
                        <FontAwesomeIcon icon={faPen} color="white" />
                      </Button>
                      <Button
                        variant="dark"
                        onClick={() => {
                          axios
                            .post(
                              "http://localhost:3001/api/deleteProductAdmin",
                              {
                                maSP: product.ma_sp,
                              }
                            )
                            .catch((err) => console.log(err));
                          dispatch(actions.setUpdateListProduct());
                        }}
                      >
                        <FontAwesomeIcon icon={faTrash} color="white" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
        <Outlet />
      </Row>
    </Container>
  );
}
export default AdminProduct;
