import React, { useState, useEffect} from "react";
import { useStore, actions } from "../../Store";
import { Link,useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { Container,Row,Col } from "react-bootstrap";
import axios from "axios";
function SearchProduct() {
  const [state, dispatch] = useStore();
  const [product, setProduct] = useState([]);
  const {searchTitle} = useParams();
  useEffect(() => {
    axios
      .post("http://localhost:3001/api/searchProduct", {
        tenSP: state.searchProduct,
      })
      .then((result) => {
        setProduct(result.data.searchProduct);
      });
  }, [state.searchProduct]);
  return (
    <Container>
      <h3 className='ms-4 my-5'>Kết quả hiển thị cho:&nbsp;&nbsp;{state.searchProduct} </h3> 
      <div className="search-container">
        <Row className='product__ul'>
          {product && product.map((e) => (
             <Col key={e.ma_sp} lg={3} className='box-product'>
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
           </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}
export default SearchProduct;
