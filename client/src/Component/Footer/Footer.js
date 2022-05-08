import React from 'react'
import "./Footer.css"
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram,faYoutube,faTwitter,faFacebook} from '@fortawesome/free-brands-svg-icons'
function Footer (){

    return (
        <div className='footer'>
            <div className='text-uppercase brand d-flex align-items-center '>
                <h1>jenbie</h1>
            </div>
            <div className='seceurity'>
                <ul>
                    <li>
                        <Link to='/'>Chính sách bảo mật</Link>
                    </li>    
                    <li>
                        <Link to='/'>Chính sách đổi trả</Link>
                    </li>    
                    <li>
                        <Link to='/'>Hướng dẫn mua hàng</Link>
                    </li>    
                    <li>
                        <Link to='/'>Phương thức thanh toán</Link>
                    </li>    
                    <li>
                        <Link to='/'>Liên hệ</Link>
                    </li>    
                    <li>
                        <Link to='/'>Điều khoản bán hàng</Link>
                    </li>    
                </ul>    
            </div>
            <div className='contact'>
                <ul>
                    <li>Hotline: 19001515 (8:00 - 21:00 )</li>
                    <li>Email: hermosa@gmail.com</li>
                    <li>Hợp tác: Sales@hermosa.com</li>
                    <br></br>
                    <li>Hệ thống cửa hàng</li>
                    <li>Showroom 1: 224 Đường 3/2, Phường Xuân Khánh, Quận Ninh Kiều, Tp.Cần Thơ</li>
                    <li>Showroom 2: 342 Đường 30/4, Phường 8, Quận I ,TP.Hồ Chí Minh </li>
                </ul>
            </div>
            <div className='socialMedia'>
                <ul>  
                    <li>
                    Liên hệ với chúng tôi:
                    </li>
                    <li> 
                        <Link to="https://www.facebook.com">
                            <FontAwesomeIcon icon={faInstagram} color='white'size='3x'/>
                        </Link>
                        <Link to="https://www.facebook.com/">
                           <FontAwesomeIcon icon={faYoutube} color='white' size='3x'/>
                        </Link>
                        <Link to="https://www.facebook.com">
                            <FontAwesomeIcon icon={faFacebook} color='white'size='3x'/>
                        </Link>  
                        <Link to="https://www.facebook.com">
                            <FontAwesomeIcon icon={faTwitter}color='white'size='3x'/> 
                        </Link>  
                    </li>       
                </ul>  
            </div>
            
        </div>
    )
}
export default Footer