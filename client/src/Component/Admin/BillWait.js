import React, { useEffect } from "react";
import MainAdmin from "./MainAdmin";
import axios from "axios";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { useStore, actions } from "../../Store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
function BillWait() {
  const [state, dispatch] = useStore();
  let navigate = useNavigate();
  return (
    <Container fluid className="adminuser mx-0 px-0 ">
      <Row className="px-0 mx-0">
        <Col
          lg={12}
          className="mx-0 px-0 cot2"
          style={{ backgroundColor: "white" }}
        >
          <h4 className="p-4 fw-bold p-3 m-3 border rounded-2 bg-white text-center">
            DANH SÁCH ĐƠN HÀNG CHỜ XÁC NHẬN
          </h4>
          <Table striped hover className="m-3 bg-white">
            <thead className="text-center">
              <tr className="fw-bold text-uppercase">
                <th>Mã hóa đơn</th>
                <th>Tên khách hàng</th>
                <th>Số điện thoại</th>
                <th>Email</th>
                <th>Tổng tiền</th>
                <th>Địa chỉ giao hàng</th>
                <th>Trạng thái</th>
                <th>Xem chi tiết </th>
              </tr>
            </thead>
            <tbody className="text-center">
              {state.listBill.map(
                (bill) =>
                  bill.trangthai === "Chưa xác nhận" && (
                    <tr key={bill.ma_hoa_don}>
                      <td className="fw-bold">{bill.ma_hoa_don}</td>
                      <td>{bill.hoten_nguoi_dung}</td>
                      <td>{bill.sdt_nd}</td>
                      <td>{bill.email}</td>
                      <td>
                        {new Intl.NumberFormat("it-IT", {
                          style: "currency",
                          currency: "VND",
                        }).format(bill.tong_tien)}
                      </td>
                      <td>{bill.diachigiaohang}</td>
                      <td>
                        <p
                          className="text-white fw-bold rounded-pill mx-2 py-1"
                          style={{ backgroundColor: "#9c0b1c" }}
                        >
                          {bill.trangthai}
                        </p>
                      </td>
                      <td>
                        <FontAwesomeIcon
                          onClick={() => {
                            dispatch(actions.getDetailsBill(bill));
                            navigate("/Dashboard/DetailsBill");
                          }}
                          icon={faCircleInfo}
                          color="black"
                          size="2x"
                          cursor="pointer"
                        />
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </Table>
          <p
            style={{ cursor: "pointer" }}
            className="ms-3 mt-4 fs-6"
            onClick={() => navigate("/Dashboard/Bill")}
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
export default BillWait;
