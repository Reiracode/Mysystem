import Singconston from "../Singleton";
import axios from "axios";
//真正去api取資料，再進行後續動作

export async function loginUser(dispatch, loginPayload) {
  if (loginPayload.password !== 'cityslicka') {
    loginPayload.password = ""
  }

  const ROOT_URL = `https://reqres.in/api/login`;
  // 一般狀況，比對帳號密碼會在後端進行，前端向後端發送帳號密碼，後端在資料庫中比對此帳號密碼是否正確，回傳結果給前端。
  // 在前端進行比對，是不安全的，因為明文密碼會在網路上傳輸，很容易被第三方竊取。
  // 因fake api只驗證帳號，所以demo時，在前端比對，若不符則直接清空，才能讓try catch api show error msg

  try {
    dispatch({ type: "REQUEST_LOGIN" });
    const res = await axios.post(`${ROOT_URL}`, loginPayload );
    const { token } = res.data;
    const myToken = JSON.stringify(token);
    if (myToken) {
      const logindata = { userno: "000002", dep: "資訊技術部", IsLogin: "true", loading: false, token: myToken }
      dispatch({ type: "LOGIN_SUCCESS", payload: logindata });
      localStorage.setItem("currentUser", JSON.stringify(logindata));
      localStorage.setItem('token', myToken);
      return logindata;
    }

  } catch (error) {
    console.log(error.response.data)
    const errmsg = error.response.data
    dispatch({ type: "LOGIN_ERROR", error: errmsg.error });
  }
}

export async function createUser(dispatch, loginPayload) {
  if (loginPayload.password !== 'cityslicka') {
    loginPayload.password = ""
  }
  
  const ROOT_URL = `https://reqres.in/api/register`;
  try {
    dispatch({ type: "REQUEST_CREATE" });
    const res = await axios.post(`${ROOT_URL}`, loginPayload);
    const data = res.data;
    console.log(data)
    // ==============================
    if (data.id) {
      const logindata = { userno: data.id, dep: "行政管理處", IsLogin: "true", loading: false }
      dispatch({ type: "CREATE_SUCCESS", payload: logindata });
      localStorage.setItem("currentUser", JSON.stringify(logindata));
      return logindata;
    }

    dispatch({ type: "CREATE_ERROR", error: data.error });
    return;

  } catch (error) {

    console.log(error.response.data)
    const errmsg = error.response.data
    dispatch({ type: "CREATE_ERROR", error: errmsg.error });
    // dispatch({ type: "CREATE_ERROR", error: error });
  }

}

export async function logOut(dispatch) {
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("currentUser");
  localStorage.removeItem("token");
}
