import React from "react";
import { Nav, Navbar, NavDropdown, Container, Row, Col } from "react-bootstrap";
import "./Css/BillUser.css";
function BillUser() {
  return (
    <Container>
      <div className="border rounded mx-auto w-75 mt-5 mb-5">
        <h4 className="text-center fw-bold p-4 m-5 text-uppercase fs-1 name_billuser">
          Chi tiết hóa đơn
        </h4>
      </div>
    </Container>
  );
}
export default BillUser;
