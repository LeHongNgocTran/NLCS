import React, { useState,useEffect } from "react";
import axios from "axios";
import { ListGroup,Container} from "react-bootstrap";
import "./chooseMainitem.css";
import {useStore, actions} from "../../Store"
function ChooseMainitem(){
  const [state, dispatch] = useStore();
  useEffect(() => {
    axios
      .get("/api/loaisanpham")
      .then((result) => {
        dispatch(actions.setALLTypeProduct(result.data.typeProduct));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
      <Container fluid>
        <ListGroup.Item  
            className='text-uppercase items'
            style={{cursor:'pointer'}}
            onClick = {() => dispatch(actions.setTypeProduct(""))}
          >Tất cả sản phẩm</ListGroup.Item>
            {state.allTypeProduct.map((type) => (
              <ListGroup.Item
                  className='text-uppercase items'
                  key={type.malsp}
                  style={{cursor:'pointer'}}
                  onClick = {() => {dispatch(actions.setTypeProduct(type.malsp))}}
              >
              {type.tenlsp}
              </ListGroup.Item>
            ))}
    
      </Container>
    )
}
export default ChooseMainitem;
              
              
               