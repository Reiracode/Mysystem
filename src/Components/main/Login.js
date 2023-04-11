import React, { useState, Fragment } from "react";
import { Navigate, useNavigate } from "react-router-dom";
//globe state
import { loginUser, createUser, useAuthState, useAuthDispatch } from "../../Context";
import axios from "axios";

const Login = () => {
   // 使用 react-router-dom 的 Navigate 功能
  const navigate = useNavigate();

  // 取得全域狀態
  const dispatch = useAuthDispatch();
  const { errorMessage, IsLogin } = useAuthState();

  const [show, setShow] = useState(false);
  const setOn = () => {
    setShow(!show);
  };

  // 定義視窗顯示狀態
  const newStyle = show ? "v_v" : "v_h";
  // 定義卡片樣式
  const cardStyle = {
    height: show ? 0 : "250px",
    opacity: show ? 0 : 1,
    transition: "all .5s ease-in"
  };

  const cardStylea = {
    opacity: show ? 1 : 0,
    height: show ? "250px" : 0,
    transition: "all .5s ease-in",
  };

 

 // 初始化登入表單資料
  const formInitial = { email: "eve.holt@reqres.in", password: "cityslicka" };
  const [formList, setFormList] = useState(formInitial);

// 監聽登入表單輸入資料
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormList({ ...formList, [name]: value });
  };

  // 登入
  const handleLogin = async (e) => {
    console.log("handleLogin");
    e.preventDefault();
    try {
      const response = await loginUser(dispatch, formList);
      console.log(response)


      // getMe().then((response) => {
      //   if (data.ok !== 1) {
      //     // 在 getMe() 出錯代表還沒成功登入，因此要把 token 清空
      //     setAuthToken(null);
      //     setErrorMessage(response.toString());
      //   }
      //   setUser(response.data);
      //   // 並導回首頁
      //   history.push("/");


      if(response && response.token) navigate("/about");

    } catch (error) {
      console.log(error);
    }
  };



 // 初始化註冊表單資料
  const regformInitial = { remail: "eve.holt@reqres.in", rpassword: "pistol" };
  const [regformList, setregFormList] = useState(regformInitial);
  const handleresInputChange = (e) => {
    const { name, value } = e.target;
    setregFormList({ ...regformList, [name]: value });
  };

  const handleRegister = async (e) => {
    console.log("handleRegister");
    e.preventDefault();
    try {
      const newregformList = { email: regformList.remail, password: regformList.rpassword };
      const response = await createUser(dispatch, newregformList);
      console.log(response)
      if (response == undefined) return;
      navigate("/prform")
    } catch (error) {
      console.log(error);
    }

  };

  return (

    <>
      {IsLogin ? (
        <Navigate to="/PrForm" />
      ) : (
        <div className="login_form">
          <Fragment>
              <div className="form">
              <form
                style={cardStylea}
                className={"flip-card register-form " + newStyle}
                id="myForm1"
              >
                  <input
                    type="text"
                    id="remail"
                    name="remail"
                    value={regformList.remail}
                    onChange={handleresInputChange}
                    placeholder="email"
                  />

                  <input
                    type="password"
                    id="rpassword"
                    name="rpassword"
                    value={regformList.rpassword}
                    onChange={handleresInputChange}
                    placeholder="password"
                  />


                <button
                  type="button"
                  className="btn btn-primary register_btn"
                  onClick={handleRegister}
                >
                  create
                </button>

                <p className="message">
                  Already registered?
                  <a href="#" onClick={setOn}>
                    Sign In
                  </a>
                  </p>
                  {errorMessage ? (
                    <p className="alert alert-danger">{errorMessage}</p>
                  ) : null}
              </form>

                {/* LOGIN */}
              <form style={cardStyle}>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="email"
                    value={formList.email}
                    onChange={handleInputChange}
                  />

                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={formList.password}
                    onChange={handleInputChange}
                  />

                <button
                  id="login_btn"
                  type="button"
                  className="btn btn-primary login_btn"
                  onClick={handleLogin}
                >
                  login
                </button>

                <p className="message">
                  Not registered?{" "}
                  <a href="#" onClick={setOn}>
                    Create an account
                  </a>
                </p>


                {errorMessage ? (
                    <p className="alert alert-danger">{errorMessage}</p>
                ) : null}
              </form>
            </div>
          </Fragment>
        </div>
      )}
    </>
  );
};


export default Login;


