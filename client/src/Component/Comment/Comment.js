import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Comment.css";
function Comment() {
  return (
    <div className="comment my-5">
      <Container className="card">
        <Row className="row">
          <Col lg={1}>
            <img
              src="https://i.imgur.com/xELPaag.jpg"
              width="100"
              className="rounded-circle mt-2"
            />
          </Col>
          <Col lg={10}>
            <div className="comment-box">
              <h4>Thêm bình luận</h4>
              <div className="rating">
                <input type="radio" name="rating" value="5" id="5" />
                <label for="5">☆</label>
                <input type="radio" name="rating" value="4" id="4" />
                <label for="4">☆</label>
                <input type="radio" name="rating" value="3" id="3" />
                <label for="3">☆</label>
                <input type="radio" name="rating" value="2" id="2" />
                <label for="2">☆</label>
                <input type="radio" name="rating" value="1" id="1" />
                <label for="1">☆</label>
              </div>
              <div className="comment-area">
                <textarea
                  className="form-control"
                  placeholder="Thêm bình luận ..."
                  rows="4"
                ></textarea>
              </div>
              <Container className="comment-btns mt-2 d-flex flex-row">
                <div className="pull-left me-3 ">
                  <button>Cancel</button>
                </div>
                <div className="pull-right">
                  <button>
                    Send
                    <i className="fa fa-long-arrow-right ml-1"></i>
                  </button>
                </div>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Comment;
