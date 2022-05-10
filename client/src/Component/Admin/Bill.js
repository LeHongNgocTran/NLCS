import React, { useEffect } from "react";
import MainAdmin from "./MainAdmin";
import axios from "axios";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { useStore, actions } from "../../Store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo,faCircleCheck,faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
function Bill() {
  const [state, dispatch] = useStore();
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/Bill")
      .then((results) => {
          dispatch(actions.setListBill(results.data.listBill));
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
            DANH SÁCH HÓA ĐƠN
          </h4>
          <div className="ms-3">
            <Button variant='success'>
            <FontAwesomeIcon icon={faCircleCheck} />&nbsp;
              Đơn hàng đã xác nhận</Button>
            <Button variant='danger'>
            <FontAwesomeIcon icon={faCircleExclamation} />&nbsp;
              Đơn hàng chờ xác nhận</Button>
          </div>
          <div className="">
            <Table striped bordered hover className="m-3 bg-white">
              <thead className="text-center">
                <tr>
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
                    <td>{bill.ma_hoa_don}</td>
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
                      <Button variant='danger'>
                        Chờ xác nhận
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="success" 
                        className="rounded-circle"
                        onClick={() => {
                          // console.log(bill);
                          dispatch(actions.getDetailsBill(bill));
                          navigate("/DetailsBill");
                        }}
                      >
                        <FontAwesomeIcon icon={faInfo} />
                      </Button>
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
