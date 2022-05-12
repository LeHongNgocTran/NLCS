import React, { useEffect } from "react";
import MainAdmin from "./MainAdmin";
import axios from "axios";
import { Container, Row, Col, Table } from "react-bootstrap";
import { useStore, actions } from "../../Store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
function ListUser() {
  const [state, dispatch] = useStore();
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/listUser")
      .then((results) => dispatch(actions.setListUser(results.data.listUser)));
  }, []);
  return (
    <Container fluid className="adminuser mx-0 px-0 ">
      <Row className="px-0 mx-0">
        <Col lg={12} className="mx-0 px-0 cot2 ">
          <h4 className="fw-bold p-3 m-3 border rounded-2 bg-white">
            DANH SÁCH KHÁCH HÀNG
          </h4>
          <div className="ms-3"></div>
          <div className="">
            <Table striped bordered hover className="m-3 bg-white">
              <thead className="text-center">
                <tr>
                  <th>Mã khách hàng</th>
                  <th>Tên khách hàng</th>
                  <th>Giới tính</th>
                  <th>Số điện thoại</th>
                  <th>Email</th>
                  <th>Ngày sinh</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {state.listUser.map((user) => (
                  <tr key={user.ma_nguoi_dung}>
                    <td>{user.ma_nguoi_dung}</td>
                    <td>{user.hoten_nguoi_dung}</td>
                    <td>{user.gioi_tinh_nd}</td>
                    <td>{user.sdt_nd}</td>
                    <td>{user.email}</td>
                    <td>{user.ngay_sinh_nd.replace("T17:00:00.000Z", "")}</td>
                    <td className='text-danger'>
                      <FontAwesomeIcon cursor='pointer' icon={faTrash}/>
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

export default ListUser;
