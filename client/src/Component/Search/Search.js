import React from "React";
import axios from "axios";
function Search(){
    
    return (
        <div className="search-container">
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
        </div>
    )
}
export default Search;