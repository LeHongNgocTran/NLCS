import React, { useEffect, useState } from "react";
import MainAdmin from "./MainAdmin";
import axios from "axios";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { useStore, actions } from "../../Store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint, faFilePdf,faCircleCheck,faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
function DetailsProduct() {
  const [state, dispatch] = useStore();

  useEffect(() => {
    axios
      .post("http://localhost:3001/api/detailsBill", {
        maHD: state.detailsBill.ma_hoa_don,
      })
      .then((res) => {
        dispatch(actions.getDetailBill(res.data.detailBill));
      });
  }, []);
  return (
    <Container fluid className="adminuser mx-0 px-0 ">
      <Row className="px-0 mx-0">
        <Col lg={3} className="px-0 mx-0 cot1">
          <MainAdmin className="my-5" />
        </Col>
        <Col lg={9} className="mx-0 px-0 cot2 ">
          <h4 className="fw-bold p-3 m-3 border rounded-2 bg-white">
            CHI TIẾT HÓA ĐƠN
          </h4>

          <div className="">
            <h4 className="fw-bold p-3 mt-3">
              Mã hóa đơn: {state.detailsBill.ma_hoa_don}
            </h4>
            <h4 className="fw-bold p-3">
              Địa chỉ giao hàng: {state.detailsBill.diachigiaohang}
            </h4>
            <Table striped bordered hover className="m-3 bg-white">
              <thead className="text-center">
                <tr>
                  <th>Mã sản phẩm</th>
                  <th>Tên sản phẩm</th>
                  <th>Hình ảnh sản phẩm</th>
                  <th>Giá sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Kích thước</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {state.detailBill &&
                  state.detailBill.map((bill) => (
                    <tr key={bill.ma_sp}>
                      <td>{bill.ma_sp}</td>
                      <td  style={{ width: "20%" }}>
                        {" "}
                        <img src={bill.image}></img>
                      </td>
                      <td>{bill.ten_sp}</td>
                      <td>
                        {" "}
                        {new Intl.NumberFormat("it-IT", {
                          style: "currency",
                          currency: "VND",
                        }).format(bill.gia_sp)}
                      </td>
                      <td>{bill.soluong}</td>
                      <td>{bill.kichthuoc}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
          <h4 className="fw-bold p-3 m-3">
            Tổng tiền:{" "}
            {new Intl.NumberFormat("it-IT", {
              style: "currency",
              currency: "VND",
            }).format(state.detailsBill.tong_tien)}
          </h4>
          <h4 className="fw-bold p-3 m-3">
            Ngày đặt hàng:{" "}
            {state.detailsBill.ngaydathang
              .replace("T", " ")
              .replace(".000Z", " ")}
          </h4>
          <div className="ms-3 d-flex flex-row-reverse">
            <Button variant="success">
            <FontAwesomeIcon icon={faCircleCheck} />&nbsp;
              Xác nhận đơn hàng</Button>
            <Button variant="dark ">
            <FontAwesomeIcon icon={faCircleExclamation}/>&nbsp;
              Hủy đơn hàng</Button>
            <Button variant="danger">
              <FontAwesomeIcon icon={faFilePdf} /> Xuất PDF
            </Button>
            <Button variant="success">
              <FontAwesomeIcon icon={faPrint} /> In hóa đơn
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default DetailsProduct;
