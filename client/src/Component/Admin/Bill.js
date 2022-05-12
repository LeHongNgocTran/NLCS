import React, { useEffect } from "react";
import MainAdmin from "./MainAdmin";
import axios from "axios";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { useStore, actions } from "../../Store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faCircleCheck,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
function Bill() {
  const [state, dispatch] = useStore();
  let navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3001/api/Bill").then((results) => {
      dispatch(actions.setListBill(results.data.listBill));
    });
  }, []);
  return (
    <Container fluid className="adminuser mx-0 px-0 ">
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
            <p className="me-4 p-3 rounded text-white text-uppercase fw-bold" style={{backgroundColor: 'black'}} onClick={() => navigate("/Dashboard/BillAccept")}>
              <FontAwesomeIcon icon={faCircleCheck} />
              &nbsp; Đơn hàng đã xác nhận
            </p>
            <p className="me-4 p-3 rounded text-white text-uppercase fw-bold" style={{backgroundColor: 'black'}}onClick={() => navigate("/Dashboard/BillWait")}>
              <FontAwesomeIcon
                icon={faCircleExclamation}
                
              />
              &nbsp; Đơn hàng chờ xác nhận
            </p>
            <p className="me-5 p-3 rounded text-white text-uppercase fw-bold" style={{backgroundColor: 'black'}}onClick={() => navigate("/Dashboard/BillCancel")}>
              <FontAwesomeIcon
                icon={faCircleExclamation}
              />
              &nbsp; Đơn hàng đã hủy
            </p>
          </div>
          <div className="">
            <Table striped hover className="m-3 bg-white">
              <thead className="text-center">
                <tr  className='fw-bold text-uppercase'>
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
                {state.listBill.map((bill) => (
                  <tr key={bill.ma_hoa_don}>
                    <td className='fw-bold'>{bill.ma_hoa_don}</td>
                    <td>{bill.hoten_nguoi_dung}</td>
                    <td>{bill.sdt_nd}</td>
                    <td>{bill.email}</td>
                    <td>
                      {new Intl.NumberFormat("it-IT", {
                        style: "currency",
                        currency: "VND",
                      }).format(bill.tong_tien)}
                    </td>
                    <td style={{ width: "20%" }}>{bill.diachigiaohang}</td>
                    <td>
                      {(bill.trangthai === "Chưa xác nhận" && (
                        <p className="text-white fw-bold rounded-pill py-1" style={{backgroundColor:"#9c0b1c"}}>
                          {bill.trangthai}
                        </p>
                      )) ||
                        (bill.trangthai === "Đã xác nhận" && (
                          <p className="text-white fw-bold rounded-pill mx-2 py-1" style={{backgroundColor:"#166e2d"}} >
                            {bill.trangthai}
                          </p>
                        )) ||
                        (bill.trangthai === "Hủy đơn hàng" && (
                          <p className="text-white fw-bold rounded-pill mx-2 py-1" style={{backgroundColor:"black"}} >
                            {bill.trangthai}
                          </p>
                        ))}
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
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Bill;
