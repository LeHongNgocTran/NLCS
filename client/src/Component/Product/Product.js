import ChooseMainitem from "./chooseMainitem";
import "./Products.css";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { Pagination, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { useStore, actions } from "../../Store";
import axios from "axios";
function Product() {
  const [state, dispatch] = useStore();
  let items = [];

  for (let number = 1; number <= state.allProduct.length / 8 + 1; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === state.numberPageProduct}
        onClick={() => {
          dispatch(actions.setNumberPageProduct(number));
        }}
      >
        {number}
      </Pagination.Item>
    );
  }

  // useEffect(() => {
  //   axios
  //     .get("/api/sanpham")
  //     .then((result) =>
  //       dispatch(actions.setAllProducts(result.data.allProduct))
  //     );
  // });

  useEffect(() => {
    dispatch(actions.setOnePageProduct());
    if (state.typeProduct) {
      state.allProduct.forEach((product) => {
        if (product.malsp === state.typeProduct) {
          dispatch(actions.setOnePageProduct(product));
        }
      });
    } else {
      for (
        let i = (state.numberPageProduct - 1) * 8;
        i < state.numberPageProduct * 8;
        i++
      ) {
        if (state.allProduct[i])
          dispatch(actions.setOnePageProduct(state.allProduct[i]));
      }
    }
  }, [state.typeProduct, state.numberPageProduct]);

  return (
    <Container className="products ">
      <Row>
        <Col lg={3} className="leftSide">
          <div className="position-sticky leftSide">
            <div className="d-flex justify-content-center ">
              <h3 className="text-uppercase text-center">Danh mục</h3>
            </div>
            <ChooseMainitem className="ps-5" />
          </div>
        </Col>

        <Col lg={9} className="rightSide">
          <div className="products">
            <div className="d-flex justify-content-center">
              <h3 className="text-uppercase text-center">Tất cả sản phẩm</h3>
            </div>
            <ul className="product__ul">
              {state.onePageProduct.map((e) => (
                <li key={e.ma_sp}>
                  <div className="product__top">
                    <Link to={e.ma_sp}>
                      {" "}
                      <img src={e.image} className="img-fluid"></img>
                    </Link>
                    <p className="buy__now">BUY NOW</p>
                  </div>
                  <p className="items__name">{e.ten_sp}</p>
                  <div className="main__sp--price">
                    <p>{e.gia_sp.toLocaleString("vi-VN")} VNĐ</p>
                    <div>
                      <FontAwesomeIcon icon={faHeart} />
                      <FontAwesomeIcon icon={faBagShopping} />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="d-flex justify-content-center">
              {!state.typeProduct && <Pagination>{items}</Pagination>}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default Product;
