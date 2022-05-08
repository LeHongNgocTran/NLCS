import React from "react";
import "../Contact/Contact.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./About.css";
function About() {
  return (
    <div className="about">
      <div className="infor-contact fw-bold">
        <p>
          <Link to="/">Home</Link> / Giới thiệu
        </p>
        <p>Giới thiệu</p>
      </div>
      <h3 className="fs-2 fw-bold text-center pt-5 pb-5 text-uppercase about-introduce">
        Đôi Chút Về chúng tôi
      </h3>
      <div className="main-about">
        <Container className="fs-5 text ln-base ps-5 text-secondary text-justify pe-5">
          Cái tên Hermosa được tạo ra rất ngẫu hứng, xuất phát từ “Chuỗi ngày u
          buồn về sự nghiệp, tương lai trong quá khứ của chính mình” – theo lời
          chia sẻ của Hermosa’s founder. Là một local brand thiết kế mang khuynh
          hướng Á Đông, kết hợp giữa hai yếu tố truyền thống và hiện đại,
          Hermosa luôn cố gắng mang đến những thông điệp văn hoá ý nghĩa qua
          từng đường nét thiết kế. Tiếp theo đó sự sang trọng, thanh lịch cũng
          là những yếu tố tạo nên một Hermosa đầy sức hút, sự lựa chọn hoàn hảo
          dành cho các bạn trẻ yêu thích phong cách hoài cổ nhưng vẫn muốn thoát
          xác trong những bộ cánh mới mẻ hơn.
          <br></br>
          Thành lập từ năm 2016 và được nhiều bạn trẻ biết đến qua những mẫu áo
          truyền thông, Hermosa hiện đang từng bước khẳng định vị trí của mình
          trong bản đồ streetwear Việt Nam.
          <br></br>
          Hiện nay, Hermosa vẫn đang tiếp tục hoàn thiện và phát triển về sản
          phẩm cũng như mở rộng nhiều phong cách thời trang.
          <br></br>
          Hermosa xin gửi lời cảm ơn đến tất cả những khách hàng đã, đang và sẽ
          ủng hộ Hermosa cũng như Xoài thời gian qua và sắp tới. Cảm ơn rất
          nhiều !
        </Container>
        <div className="bosuutap">
          <Container className="bosuutap_images">
            <div className="thietke">
              <p className="fw-bold fs-3 text-center mt-5 mb-5 text-white pt-2 pb-2 name">
                Thiết kế bằng tất cả sự tận tâm
              </p>
              <Row>
                <Col>
                  {" "}
                  <img
                    src="../Images/about2.jpg"
                    className="img-fluid img-2"
                  ></img>
                </Col>
                <Col>
                  {" "}
                  <img src="../Images/about.jpg" className="img-fluid"></img>
                </Col>
                <Col>
                  {" "}
                  <img
                    src="../Images/about3.jpg"
                    className="img-fluid img-3"
                  ></img>
                </Col>
              </Row>
            </div>
            <p className="fw-bold fs-3 text-center mt-5 mb-5 text-white pt-2 pb-2 name">
              Một số bộ sưu tập
            </p>
            <Row>
              <Col xs={12} md={4}>
                <h1 className="logan text-center">Hermosa</h1>
              </Col>
              <Col xs={12} md={4}>
                <video
                  autoPlay
                  loop
                  muted
                  width="100%"
                  height="100%"
                  className="d-block"
                >
                  <source src="../Images/video.mp4" type="video/mp4" />
                </video>
              </Col>
              <Col xs={12} md={4}>
                <h1 className=" logan text-center">
                  Yêu bản thân bạn chính là cách để bạn có thể yêu những người
                  khác
                </h1>
              </Col>
            </Row>
            <br></br>
            <Row className="justify-content-center">
              <Col xs={3}>
                <img className="img-fluid" src="../Images/intro3.jpg"></img>
              </Col>
              <Col xs={3}>
                <img className="img-fluid" src="../Images/intro6.jpg"></img>
              </Col>
              <Col xs={3}>
                <img className="img-fluid" src="../Images/intro10.jpg"></img>
              </Col>
            </Row>
            <br></br>
            <Row className="justify-content-center">
              <Col xs={3}>
                <img className="img-fluid" src="../Images/intro1.jpg"></img>
              </Col>
              <Col xs={3}>
                <img className="img-fluid" src="../Images/intro5.jpg"></img>
              </Col>
              <Col xs={3}>
                <img className="img-fluid" src="../Images/intro2.jpg"></img>
              </Col>
            </Row>
            <br></br>
            <Row className="justify-content-center">
              <Col xs={3}>
                <img className="img-fluid" src="../Images/intro4.jpg"></img>
              </Col>
              <Col xs={3}>
                <img className="img-fluid" src="../Images/intro8.jpg"></img>
              </Col>
              <Col xs={3}>
                <img className="img-fluid" src="../Images/intro9.jpg"></img>
              </Col>
            </Row>

            <p className="fw-bold fs-3 text-center mt-5 mb-5 text-white pt-2 pb-2 name ">
              Cám ơn quý khách đã chọn sản phẩm của chúng tôi trong hàng nghìn
              sản phẩm khác.{" "}
            </p>
          </Container>
        </div>
      </div>
    </div>
  );
}
export default About;
{
  /* 
        
        
      
     */
}
