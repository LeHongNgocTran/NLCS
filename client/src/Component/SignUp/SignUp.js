import React, { useState, useEffect } from "react";
import "../SignIn/SignIn.css";
import axios, { Axios } from "axios";
import { Link, useNavigate } from "react-router-dom";
import {Alert} from 'react-bootstrap'
function SignUp() {
  const [message, setMessage] = useState("");
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  let navigate = useNavigate();
  //Hàm lấy dữ liệu tử thanh input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  
  //Hàm submit
  const handleSubmit = (e) => {
    setFormErrors(validate(formValues));
    // setIsSubmit(true);
    axios.post("http://localhost:3001/api/nguoidung",{
      Username: formValues.username,
      Email: formValues.email,
      Name: formValues.name,
      Phone: formValues.phonenumber,
      Ngaysinh: formValues.date,
      Gioitinh: formValues.sex,
      Password: formValues.password,
    })
      .then((res)=>{
        setMessage(res.data.message);
      }).catch((err)=>{
        console.log(err);
      });
    };

  // Kiểm tra lỗi
  const validate = (values) => {
    const error = {};
    // Minimum eight characters, at least one letter and one number:
    const regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i;
    const regexMail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!values.username) {
      error.username = "Username is required";
    }
    if (!values.email) {
      error.email = "Email is required";
    } else if (!regexMail.test(values.email)) {
      error.email = "This is not a valid email format";
    }
    if (!values.name || values.name.length < 4) {
      error.name = "Name is required";
    }
    if (!values.phonenumber || values.phonenumber.length < 10) {
      error.phonenumber = "Yêu cầu đủ 10 số";
    }
    if (!values.date) {
      error.date = "Date is required";
    }
    if (!values.password) {
      error.password = "Password is reuiqred";
    } else if (!regexPass.test(values.password)) {
      error.password = "Cần 8 kí tự, ít nhất một chữ và một số";
    }
    return error;
  };
if(message === 'success'){
  // alert("Đăng Ký thành công")
  navigate("/SignIn")  
}
  return (
    <div className="signUp">
      <div className="my-5 text-uppercase d-flex justify-content-center">
        <h1>đăng ký</h1>
      </div>
      <form className="form__signin">
        <div className="form__signin--contact">
        <p className='name_login text-uppercase'>Username</p>
          <div className=" d-flex flex-column input ">
            <input
              className="form__row--input"
              type="text"
              name="username"
              id="username"
              required
              value={formValues.username}
              onChange={handleChange}
            />
            <small className="annouce">{formErrors.username}</small>
          </div>
          <p className='name_login text-uppercase'>Email</p>
          <div className=" d-flex flex-column input ">
            <input
              className="form__row--input"
              type="email"
              name="email"
              id="email"
              required
              value={formValues.email}
              onChange={handleChange}
            />
            <small className="annouce">{formErrors.email}</small>
          </div>
          <p className='name_login text-uppercase'>Fullname</p>
          <div className="d-flex flex-column input">
            <input
              className="form__row--input"
              type="text"
              name="name"
              id="name"
              required
              value={formValues.name}
              onChange={handleChange}
            />
            <small className="annouce">{formErrors.name}</small>
          </div>
          <p className='name_login text-uppercase'>Phonenumber</p>
          <div className=" d-flex flex-column input ">
            <input
              className="form__row--input"
              type="tel"
              name="phonenumber"
              id="phonenumber"
              required
              value={formValues.phonenumber}
              onChange={handleChange}
            />
            <small className="annouce">{formErrors.phonenumber}</small>
          </div>
          <p className='name_login text-uppercase'>Date</p>
          <div className=" d-flex flex-column input ">
            <input
              className="form__row--input"
              id="date"
              type="date"
              min="1950-01-01"
              max="2050-12-31"
              name="date"
              value={formValues.date}
              onChange={handleChange}
            />
            <small className="annouce">{formErrors.date}</small>
          </div>
          <p className='name_login text-uppercase'>SEx</p>
          <div className=" d-flex flex-column input ">
            <div className="d-flex">
              <div className="me-5">
                <input
                  // className="form__row--input"
                  type="radio"
                  name="sex"
                  value="Nam"
                  onChange={handleChange}
                  id="nam"
                  checked ={formValues.sex === 'Nam'}
                />
                <label for="nam">&nbsp;Nam </label>
              </div>
              <div>
                <input
                  // className="form__row--input"
                  type="radio"
                  value = "Nữ"
                  name="sex"
                  checked = {formValues.sex === "Nữ"}
                  onChange={handleChange}
                  id="nu"
                />
                <label for="nu">&nbsp;Nữ </label>
              </div>
            </div>
          </div>
          <p className='name_login text-uppercase'>Password</p>
          <div className=" d-flex flex-column input ">
            <input
              className="form__row--input"
              placeholder="Mật khẩu"
              id="password"
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
            <small className="annouce">{formErrors.password}</small>
          </div>
          {message && (<Alert variant="danger">{message}</Alert>)}
          <div className="form__row row__button">
            <button
            type="button"
              className="form__row--submit"
              // value="Submit"
              onClick={handleSubmit}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default SignUp;
