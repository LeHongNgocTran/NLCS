import React, { useEffect } from "react";
import axios from "axios";
import { useStore, actions } from "../../Store";
import { Container, Row, Col, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom"
function DetailBillUser() {
  const [state, dispatch] = useStore();
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .post("http://localhost:3001/api/detailsBill", {
        maHD: state.detailsBill.ma_hoa_don,
      })
      .then((res) => {
        dispatch(actions.getDetailBill(res.data.detailBill));
      });
  }, [state.detailsBill.ma_hoa_don]);
  return (
    <Container>
      <Row>
        <h4 className="p-4 fw-bold p-3 m-3 border rounded-2 bg-white text-center">
          CHI TIẾT HÓA ĐƠN
        </h4>
        <Col lg={12} className="mx-0 px-0 cot2 ">
          <div>
            <div className="d-flex flex-row">
              <h4 className="fw-bold p-3 me-auto">
                Mã hóa đơn: {state.detailsBill.ma_hoa_don}
              </h4>
              <p className="fs-5 p-3">
                Tên khách hàng: {state.detailsBill.hoten_nguoi_dung}
              </p>
            </div>
            <div className="d-flex"></div>
            <div className="d-flex">
              <h4 className="me-auto fw-bold p-3">
                Địa chỉ giao hàng: {state.detailsBill.diachigiaohang}
              </h4>
              <p className="fs-5 p-3">
                Số điện thoại: {state.detailsBill.sdt_nd}
              </p>
            </div>
            <Table striped bordered hover className="m-3 bg-white align-middle">
              <thead className="text-center">
                <tr className="text-uppercase fw-bold">
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
                      <td style={{ width: "20%" }}>
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
          <div className="d-flex flex-start">
            <div className="d-flex m-4">
              <p className='py-1'>Trạng thái: &nbsp;</p>
              {(state.detailsBill.trangthai === "Chưa xác nhận" && (
                <p
                  className="text-white fw-bold rounded-pill p-2"
                  style={{ backgroundColor: "#9c0b1c" }}
                >
                   &nbsp;{state.detailsBill.trangthai}
                </p>
              )) ||
                (state.detailsBill.trangthai === "Đã xác nhận" && (
                  <p
                    className="text-white fw-bold rounded-pill p-2"
                    style={{ backgroundColor: "#166e2d" }}
                  >
                    {state.detailsBill.trangthai}
                  </p>
                )) ||
                (state.detailsBill.trangthai === "Hủy đơn hàng" && (
                  <p
                    className="text-white fw-bold rounded-pill mx-2 p-2"
                    style={{ backgroundColor: "black" }}
                  >
                    {state.detailsBill.trangthai}
                  </p>
                ))}
            </div>
            <h4 className="fw-bold p-3 m-3 text-end flex-fill">
              Tổng tiền:{" "}
              {new Intl.NumberFormat("it-IT", {
                style: "currency",
                currency: "VND",
              }).format(state.detailsBill.tong_tien)}
            </h4>
          </div>
          <h4 className="fw-bold p-3 m-3 text-end">
            Ngày đặt hàng:{" "}
            {state.detailsBill.ngaydathang
              .replace("T", " ")
              .replace(".000Z", " ")}
          </h4>
          <p
            style={{ cursor: "pointer" }}
            className="ms-3 mt-4 fs-6"
            onClick={() => navigate("/BillUser")}
          >
            <FontAwesomeIcon icon={faArrowLeft} /> Quay lại trang trước
          </p>
        </Col>
      </Row>
    </Container>
  );
}
export default DetailBillUser;
