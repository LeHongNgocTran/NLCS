import React, { useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleExclamation,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import "./Css/BillUser.css";
import { useStore, actions } from "../../Store";
import axios from "axios";
function BillUser() {
  let navigate = useNavigate();
  const [state, dispatch] = useStore();
  useEffect(() => {
    axios
      .post("http://localhost:3001/api/BillUser", {
        maKH: state.userLogin.ma_nguoi_dung,
      })
      .then((results) => {
        dispatch(actions.getDetailBillUser(results.data.listBillUser));
      });
  }, []);
  return (
    <Container>
      <Row className="px-0 mx-0">
        <Col
          lg={12}
          className="mx-0 px-0 cot2"
          style={{ backgroundColor: "white" }}
        >
          <h4 className="p-4 fw-bold p-4 m-3 border rounded-2 bg-white text-center">
            DANH SÁCH HÓA ĐƠN
          </h4>
          <div className="ms-3 d-flex">
            <p
              className="me-4 p-3 rounded text-white text-uppercase fw-bold"
              style={{ backgroundColor: "black" }}
            >
              <FontAwesomeIcon icon={faCircleCheck} />
              &nbsp; Đơn hàng đã mua
            </p>
            <p
              className="me-4 p-3 rounded text-white text-uppercase fw-bold"
              style={{ backgroundColor: "black" }}
            >
              <FontAwesomeIcon icon={faCircleExclamation} />
              &nbsp; Đơn hàng chờ xác nhận
            </p>
            <p
              className="me-5 p-3 rounded text-white text-uppercase fw-bold"
              style={{ backgroundColor: "black" }}
            >
              <FontAwesomeIcon icon={faCircleExclamation} />
              &nbsp; Đơn hàng đã hủy
            </p>
          </div>
          <div className="">
            <Table striped hover className="m-3 bg-white">
              <thead className="text-center">
                <tr className="fw-bold text-uppercase">
                  <th>Ngày đặt hàng</th>
                  <th>Tên khách hàng</th>
                  <th>Số điện thoại</th>
                  <th>Tổng tiền</th>
                  <th>Địa chỉ giao hàng</th>
                  <th>Trạng thái</th>
                  <th>Xem chi tiết </th>
                </tr>
              </thead>
              <tbody className="text-center">
                {state.listBillUser.map((bill) => (
                  <tr key={bill.ma_hoa_don}>
                    <td className="fw-bold">
                      {bill.ngaydathang.replace("T", " ").replace(".000Z", " ")}
                    </td>
                    <td>{bill.hoten_nguoi_dung}</td>
                    <td>{bill.sdt_nd}</td>

                    <td>
                      {new Intl.NumberFormat("it-IT", {
                        style: "currency",
                        currency: "VND",
                      }).format(bill.tong_tien)}
                    </td>
                    <td style={{ width: "20%" }}>{bill.diachigiaohang}</td>
                    <td>
                      {(bill.trangthai === "Chưa xác nhận" && (
                        <p
                          className="text-white fw-bold rounded-pill py-1"
                          style={{ backgroundColor: "#9c0b1c" }}
                        >
                          {bill.trangthai}
                        </p>
                      )) ||
                        (bill.trangthai === "Đã xác nhận" && (
                          <p
                            className="text-white fw-bold rounded-pill mx-2 py-1"
                            style={{ backgroundColor: "#166e2d" }}
                          >
                            {bill.trangthai}
                          </p>
                        )) ||
                        (bill.trangthai === "Hủy đơn hàng" && (
                          <p
                            className="text-white fw-bold rounded-pill mx-2 py-1"
                            style={{ backgroundColor: "black" }}
                          >
                            {bill.trangthai}
                          </p>
                        ))}
                    </td>
                    <td>
                      <FontAwesomeIcon
                        onClick={() => {
                          dispatch(actions.getDetailsBill(bill));
                          navigate("/DetailBillUser");
                        }}
                        icon={faCircleInfo}
                        color="black"
                        size="2x"
                        cursor="pointer"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default BillUser;
