import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css";
import { Alert } from "react-bootstrap";
import axios from "axios";
import { useStore, actions } from "../../Store";
function SignIn() {
  let navigate = useNavigate();
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [message, setMessage] = useState("");

  //Hàm lấy dữ liệu tử thanh input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const [state, dispatch] = useStore();

  const handleSubmit = (e) => {
    setFormErrors(validate(formValues));
    axios
      .post("http://localhost:3001/api/login", {
        Email: formValues.email,
        Password: formValues.password,
      })
      .then((res) => {
        if (res.data.message) {
          // console.log(res.data.message)
          dispatch(actions.setStatusLogin(res.data.message));
        } else {
          // console.log(res.data[0]);
          dispatch(actions.setStatusLogin("success"));
          dispatch(actions.setUserLogin(res.data[0]));
          if (res.data[0].ma_nguoi_dung == 1) {
            navigate("/AdminProduct", { replace: true });
          } else {
            navigate("/", { replace: true });
          }
        }
      })
      .catch((err) => {
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
    if (!values.email) {
      error.email = "Email is required";
    } else if (!regexMail.test(values.email)) {
      error.mail = "This is not a valid email format";
    }
    if (!values.password) {
      error.password = "Password is reuiqred";
    }
    return error;
  };

  useEffect(() => {
    axios.get("http://localhost:3001/api/giohang", {
      maKH : state.userLogin.ma_nguoi_dung
    });
  });

  return (
    <div className="signIn">
      <div className="my-5 text-uppercase d-flex justify-content-center">
        <h1>đăng nhập</h1>
      </div>
      <form className="form__signin">
        <div className="form__signin--contact">
          <p className="name_login text-uppercase">Email</p>
          <div className="d-flex flex-column input">
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
          <p className="name_login text-uppercase">Password</p>
          <div className=" d-flex flex-column input">
            <input
              className="form__row--input"
              type="password"
              name="password"
              id="password"
              required
              // value={formValues.password}
              onChange={handleChange}
            />
            <small className="annouce">{formErrors.password}</small>
          </div>
          {state.statusLogin && (
            <Alert variant="danger">{state.statusLogin}</Alert>
          )}
          <div className="form__row row__button">
            <button
              type="button"
              className="form__row--submit"
              onClick={handleSubmit}
            >
              SUBMIT
            </button>
          </div>

          <div className="form__row--sign">
            <Link to="/">Quên mật khẩu</Link> hoặc&nbsp;
            <Link to="/SignUp">Đăng Ký</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
export default SignIn;
