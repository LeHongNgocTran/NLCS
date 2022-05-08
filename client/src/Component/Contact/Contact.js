import React from "react";
import { Container,Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Map from "react-map-gl";
// import "./Contact.css"
// import 'mapbox-gl/dist/mapbox-gl.css';
function Contact(){
    const [viewState, setViewState] = React.useState({
        longitude: -100,
        latitude: 40,
        zoom: 3.5
      });
    
    return(
        <div className="contact">
            <div className="infor-contact fw-bold">
                <p>
                    <Link to='/'>Home</Link>  /  Thông tin Liên Hệ
                </p>
                <p>Liên Hệ</p>
            </div>
            <Container className='main'>
               {/* <Row className="main_map">
            
                    <Map
                    {...viewState}
                    onMove={evt => setViewState(evt.viewState)}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                />
               </Row> */}
                <Row  className="main_contact">
                    <div className='col-lg-2 conntact-address'>
                        <p>
                            Địa chỉ: 224 Đường 3/2, Phường Xuân Khánh, Quận Ninh Kiều, Tp.Cần Thơ
                            <br></br><br></br>
                        Số điện thoại: 0389006211</p>
                    </div>  
                  
                    <div className="contact-us col-lg-9">
                        <p>Chúng tôi rất mong nhận được hồi âm từ bạn</p>
                        <div className="infor">
                        <input
                            type='text'
                            placeholder="Tên"
                            id='ten'
                        ></input>
                        <input
                            type='text'
                            placeholder="Email"
                            id='email'
                        ></input>
                        <input
                            type='text'
                            placeholder="Điện thoại"
                            id='phone'
                        ></input>
                        </div>
                        <textarea
                            placeholder="Cảm nhận"
                            id='complain'
                        ></textarea>
                        <button type='submit'
                        id='submit'>
                            Gửi
                        </button>
                    </div>
                
                </Row>
             </Container>
            
       
        </div>
    )
  
}
export default Contact;