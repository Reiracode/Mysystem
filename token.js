import React, { useState } from 'react';
import axios from 'axios';
// 實作 token 登入驗證及 token 逾時設定的範例可以分為幾個部分:

// 建立登入頁面，讓使用者輸入帳號密碼，並將其傳送到伺服器端進行驗證。
// 伺服器端驗證使用者帳號密碼，如果驗證成功則產生 token 並回傳給前端。

// 前端接收到 token 後，將其存入本地端存儲，並在每次請求時將其帶入請求頭中。
// 伺服器端收到請求時，驗證 token 是否有效並進行相關操作。
// 設定 token 逾時時間，使用者在操作超過限定時間後，需要重新登入。

// 實作 token 登入驗證及 token 逾時設定的方式有很多種，以下是一個簡單的例子：
// 客戶端向伺服器發送登入請求，並提供用戶名和密碼。
// 伺服器驗證用戶名和密碼是否正確。
// 如果驗證成功，則產生一個新的 token，並將其發送給客戶端。
// 客戶端將 token 儲存在本地，並在每次向伺服器發送請求時附加上 token。
// 伺服器驗證 token 是否有效。如果有效，則允許請求；否則，拒絕請求。
// 設定 token 的逾時時間。每次伺服器驗證 token 時，檢查 token 的創建時間是否已經超過逾時時間。如果是，則拒絕請求並要求用戶重新登入。
// 程式碼實現可能會因為你使用的程式語言和框架而有所不同，這只是一個大致的流程。


// 以下是一個簡單的 React 範例：
function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('/login', { username, password });
      const { token } = res.data;
      setToken(token);
      localStorage.setItem('token', token);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('token');
  };

  return (
    <div>
      {token ? (
        <div>
          <p>Welcome, {username}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
          />
          <input
            type="password"
            value={password}
            onChange={
