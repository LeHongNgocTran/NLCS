import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "react-bootstrap";
import MainAdmin from "./MainAdmin";
import "./AdminCss/AddProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function AddProduct() {
  let navigate = useNavigate();
  const [formValues, setFormValues] = useState({});
  const HandleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const path = "../Images/";
  const [file, setFile] = useState(null);
  const onImageChange = (event) => {
    const fd = new FormData();
    setFile(path.concat(event.target.files[0].name));
  };
  const handleSubmit = (e) => {
    axios
      .post("http://localhost:3001/api/addProduct", {
        maSP: formValues.masanpham,
        maLSP: formValues.maloaisanpham,
        tenSP: formValues.tensanpham,
        giaSP: formValues.giatien,
        image: file,
        chatlieu: formValues.chatlieu,
        mausac: formValues.color,
        kichthuoc: formValues.size,
      })
      .catch((err) => {
        console.log(err);
      });
    alert("Thêm sản phẩm thành công");
    navigate("/Dashboard/AdminProduct");
  };

  return (
    <Container fluid className=" mx-0 px-0 ">
      <Row className="px-0 mx-0">
        <Col lg={12} className="mx-0 px-0 cot2">
          <h4 className="p-4 fw-bold p-3 m-3 border rounded-2 bg-white text-center">
            TẠO SẢN PHẨM MỚI
          </h4>
          <div className="ms-3 mb-5 px-0">
            <Button variant="success">
              <FontAwesomeIcon icon={faPlus} /> Thêm nhà cung cấp
            </Button>
            <Button variant="success">
              <FontAwesomeIcon icon={faPlus} /> Thêm danh mục
            </Button>
            <Button variant="success">
              <FontAwesomeIcon icon={faPlus} /> Thêm tình trạng
            </Button>
          </div>
          <Form>
            <Container fluid className="mx-0">
              <Row className="mx-0 px-0 mb-5">
                <Col lg={3}>
                  <FormGroup>
                    <Form.Label className="fw-bold">Mã sản phẩm</Form.Label>
                    <Form.Control
                      name="masanpham"
                      placeholder="Nhập mã sản phẩm"
                      onChange={HandleChange}
                    ></Form.Control>
                  </FormGroup>
                </Col>
                <Col lg={3}>
                  <FormGroup>
                    <Form.Label className="fw-bold">Tên sản phẩm</Form.Label>
                    <Form.Control
                      name="tensanpham"
                      placeholder="Nhập tên sản phẩm"
                      onChange={HandleChange}
                    ></Form.Control>
                  </FormGroup>
                </Col>
                <Col lg={3}>
                  <FormGroup>
                    <Form.Label className="fw-bold">
                      Số lượng sản phẩm
                    </Form.Label>
                    <Form.Control
                      type="number"
                      name="sluong"
                      placeholder="Nhập số lượng sản phẩm"
                      onChange={HandleChange}
                    ></Form.Control>
                  </FormGroup>
                </Col>
                <Col lg={3}>
                  <FormGroup>
                    <Form.Label className="fw-bold">
                      Tình trạng sản phẩm
                    </Form.Label>
                    <Form.Select name="date" onChange={HandleChange}>
                      <option value="Còn hàng">Còn hàng</option>
                      <option value="Hết hàng">Hết hàng</option>
                    </Form.Select>
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mx-0 px-0 mb-5">
                <Col lg={3}>
                  <FormGroup>
                    <Form.Label className="fw-bold">Danh mục</Form.Label>
                    <Form.Select
                      name="maloaisanpham"
                      values={formValues.maloaisanpham}
                      onChange={HandleChange}
                    >
                      <option value="Dress">Dress</option>
                      <option value="Shirt">Shirt</option>
                      <option value="Skirt">Skirt</option>
                      <option value="Jeans">Jeans</option>
                      <option value="Cadigan">Cadigan</option>
                      <option value="Gile">Gile</option>
                    </Form.Select>
                  </FormGroup>
                </Col>
                <Col lg={3}>
                  <FormGroup>
                    <Form.Label className="fw-bold">Nhà cung cấp</Form.Label>
                    <Form.Select name="cungcap" onChange={HandleChange}>
                      <option value="Chine">Trung Quốc</option>
                      <option value="VNXK">VNXK</option>
                    </Form.Select>
                  </FormGroup>
                </Col>
                <Col lg={3}>
                  <FormGroup>
                    <Form.Label className="fw-bold">Giá tiền</Form.Label>
                    <Form.Control
                      name="giatien"
                      placeholder="Nhập giá tiền sản phẩm"
                      onChange={HandleChange}
                    ></Form.Control>
                  </FormGroup>
                </Col>
                <Col lg={3}>
                  <FormGroup>
                    <Form.Label className="fw-bold">Giá vốn</Form.Label>
                    <Form.Control
                      name="giatienvon"
                      placeholder="Nhập giá vốn sản phẩm"
                      onChange={HandleChange}
                    ></Form.Control>
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mx-0 px-0 mb-5">
                <Col lg={3}>
                  <FormGroup>
                    <Form.Label className="fw-bold">Kích thước</Form.Label>
                    <Form.Control
                      name="size"
                      placeholder="Nhập kích thước sản phẩm"
                      onChange={HandleChange}
                    ></Form.Control>
                  </FormGroup>
                </Col>
                <Col lg={3}>
                  <FormGroup>
                    <Form.Label className="fw-bold">Màu sản phẩm</Form.Label>
                    <Form.Control
                      name="color"
                      placeholder="Nhập màu sắc sản phẩm"
                      onChange={HandleChange}
                    ></Form.Control>
                  </FormGroup>
                </Col>
                <Col lg={3}>
                  <FormGroup>
                    <Form.Label className="fw-bold">
                      Chất liệu sản phẩm
                    </Form.Label>
                    <Form.Control
                      name="chatlieu"
                      placeholder="Nhập chất liệu sản phẩm"
                      onChange={HandleChange}
                    ></Form.Control>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <FormGroup>
                  <Form.Label className="fw-bold ms-3">Ảnh sản phầm</Form.Label>
                  <br></br>
                  <input
                    type="file"
                    name="imageproduct"
                    className="custom-file-input ms-3"
                    onChange={onImageChange}
                  />
                </FormGroup>
              </Row>
              <Row>
                <FormGroup className="mt-5">
                  <Button
                    variant="success"
                    onClick={handleSubmit}
                    className="ms-3"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                    &nbsp;Thêm sản phẩm
                  </Button>
                </FormGroup>
              </Row>
            </Container>
          </Form>
          <p
            style={{cursor:"pointer",}}
            className="ms-3 mt-4 fs-6"
            onClick={() => navigate("/Dashboard/AdminProduct")}
          >
            <FontAwesomeIcon
              // size="2x"

              icon={faArrowLeft}
            />{" "}
            Quay lại trang trước
          </p>
        </Col>
      </Row>
    </Container>
  );
}
export default AddProduct;
