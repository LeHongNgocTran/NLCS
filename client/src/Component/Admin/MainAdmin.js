import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faTag,
  faChartPie,
  faUsersRectangle,
  faCalendarCheck,
  faGear
} from "@fortawesome/free-solid-svg-icons";
import {
  faCircleUser,
  faMoneyBill1,
} from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import "./AdminCss/MainAdmin.css";
import { Container, Row, Col, Accordion, ListGroup } from "react-bootstrap";
function MainAdmin() {
  let navigate = useNavigate();
  return (
    <div className='mainadmin'>
      <h4 className="bg-dark text-white mb-0 py-4">
        <FontAwesomeIcon icon={faHouse} />
        &nbsp;&nbsp;TỔNG QUAN
        <hr></hr>
      </h4>
      <div className="admin__mainmenu">
        <ListGroup className="p-0 m-0 bg-dark">
          <ListGroup.Item className='bg-dark text-white'>
            <h5>
              <FontAwesomeIcon icon={faUsersRectangle} /> &nbsp;Quản lý nhân
              viên
            </h5>
          </ListGroup.Item>
          <ListGroup.Item className='bg-dark text-white'>
            <h5 onClick ={() => {
                navigate("/Dashboard/ListUser");
            }}>
              <FontAwesomeIcon icon={faCircleUser} /> &nbsp;Quản lý khách hàng
            </h5>
          </ListGroup.Item>
          <ListGroup.Item className='bg-dark text-white'>
            <h5 onClick={() => {
              navigate("/Dashboard/AdminProduct")
            }}>
              <FontAwesomeIcon icon={faTag} /> &nbsp;Quản lý sản phẩm
            </h5>
          </ListGroup.Item>
          <ListGroup.Item className='bg-dark text-white'>
            <h5 onClick ={() => {
              navigate("/Dashboard/Bill")
            }}>
              <FontAwesomeIcon icon={faCalendarCheck} /> &nbsp;Quản lý đơn hàng
            </h5>
          </ListGroup.Item>
          <ListGroup.Item className='bg-dark text-white'>
            <h5>
              <FontAwesomeIcon icon={faChartPie} />
              &nbsp;Báo cáo doanh thu
            </h5>
          </ListGroup.Item>
          <ListGroup.Item className='bg-dark text-white'>
            <h5>
            <FontAwesomeIcon icon={faGear} />
              &nbsp;Cài đặt hệ thống
            </h5>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
}
export default MainAdmin;
