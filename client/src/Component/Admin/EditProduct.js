import React, { useState} from "react";
import MainAdmin from "./MainAdmin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Button, Form, FormGroup } from "react-bootstrap";
import { useStore, actions } from "../../Store";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import "./AdminCss/AddProduct.css";
function EditProduct() {
  let navigate = useNavigate();
  const [state, dispatch] = useStore();
  const [formValues, setFormValues] = useState(state.detailsProduct);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const path = "../Images/";
  const [file, setFile] = useState(null);

  const onImageChange = (event) => {
    setFile(path.concat(event.target.files[0].name));
  };
  const handleSubmit = () => {
    axios.post("http://localhost:3001/api/editProduct", {
      tenSP: formValues.ten_sp,
      giaSP: formValues.gia_sp,
      image: file,
      chatlieu: formValues.chatlieu,
      maLSP: formValues.malsp,
      mausac: formValues.mausac,
      kichthuoc: formValues.kichthuoc,
      maSP: formValues.ma_sp,
    })
    alert("Cập nhật thành công");
    navigate("/Dashboard/AdminProduct");
  };
  return (
    <Container fluid className=" mx-0 px-0 ">
      <Row className="px-0 mx-0">
        <Col lg={12} className="mx-0 px-0 cot2 ">
          <h4 className="p-4 fw-bold p-3 m-3 border rounded-2 bg-white">
            CHỈNH SỬA THÔNG TIN SẢN PHẨM
          </h4>
          <Form>
            <Container fluid className="mx-0 ">
              <Row className="mx-0 px-0 mb-5">
                <Col lg={3}>
                  <FormGroup>
                    <Form.Label className="fw-bold">Mã sản phẩm</Form.Label>
                    <Form.Control
                      name="ma_sp"
                      defaultValue={state.detailsProduct.ma_sp}
                      onChange={handleChange}
                    ></Form.Control>
                  </FormGroup>
                </Col>
                <Col lg={3}>
                  <FormGroup>
                    <Form.Label className="fw-bold">Tên sản phẩm</Form.Label>
                    <Form.Control
                      name="ten_sp"
                      defaultValue={state.detailsProduct.ten_sp}
                      onChange={handleChange}
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
                      value="9"
                      onChange={handleChange}
                    ></Form.Control>
                  </FormGroup>
                </Col>
                <Col lg={3}>
                  <FormGroup>
                    <Form.Label className="fw-bold">
                      Tình trạng sản phẩm
                    </Form.Label>
                    <Form.Select name="date" onChange={handleChange}>
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
                      name="malsp"
                      defaultValue={state.detailsProduct.malsp}
                      onChange={handleChange}
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
                    <Form.Select name="cungcap" onChange={handleChange}>
                      <option value="Chine">Trung Quốc</option>
                      <option value="VNXK">VNXK</option>
                    </Form.Select>
                  </FormGroup>
                </Col>
                <Col lg={3}>
                  <FormGroup>
                    <Form.Label className="fw-bold">Giá tiền</Form.Label>
                    <Form.Control
                      name="gia_sp"
                      defaultValue={state.detailsProduct.gia_sp}
                      onChange={handleChange}
                    ></Form.Control>
                  </FormGroup>
                </Col>
                <Col lg={3}>
                  <FormGroup>
                    <Form.Label className="fw-bold">Giá vốn</Form.Label>
                    <Form.Control
                      name="giatienvon"
                      value="450000"
                      onChange={handleChange}
                    ></Form.Control>
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mx-0 px-0 mb-5">
                <Col lg={3}>
                  <FormGroup>
                    <Form.Label className="fw-bold">Kích thước</Form.Label>
                    <Form.Control
                      name="kichthuoc"
                      defaultValue={state.detailsProduct.kichthuoc}
                      onChange={handleChange}
                    ></Form.Control>
                  </FormGroup>
                </Col>
                <Col lg={3}>
                  <FormGroup>
                    <Form.Label className="fw-bold">Màu sản phẩm</Form.Label>
                    <Form.Control
                      name="mausac"
                      defaultValue={state.detailsProduct.mausac}
                      onChange={handleChange}
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
                      defaultValue={state.detailsProduct.chatlieu}
                      onChange={handleChange}
                    ></Form.Control>
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Form.Label className="fw-bold ms-3">Ảnh sản phẩm</Form.Label>
                <br></br>
                <input
                  type="file"
                  name="image"
                  className="custom-file-input ms-3"
                  onChange={onImageChange}
                />
              </FormGroup>
              <Row className="mx-0 px-0 mb-5">
                <FormGroup className=" mt-5">
                  <Button variant="success" onClick={handleSubmit}>
                    <FontAwesomeIcon icon={faPlus} />
                    &nbsp;Cập nhật sản phẩm
                  </Button>
                </FormGroup>
              </Row>
            </Container>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
export default EditProduct;
