// Some code
import React, { useState } from "react";
import axios from "axios";

const Auth = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    isLogin: true,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const endpoint = form.isLogin ? "/api/login" : "/api/register";
      const response = await axios.post(endpoint, form);
      localStorage.setItem("token", response.data.token);
      setIsLoading(false);
      window.location.reload();
    } catch (error) {
      setError(error.response.data.message);
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">用戶名：</label>
        <input
          type="text"
          id="username"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">密碼：</label>
        <input
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
     
      </div>
      {error && <p>{error}</p>}
      <button type="submit" disabled={isLoading}>
        {isLoading ? "載入中..." : form.isLogin ? "登入" : "註冊"}
      </button>
      <button
        type="button"
        onClick={() => setForm({ ...form, isLogin: !form.isLogin })}
      >
        {form.isLogin ? "前往註冊" : "前往登入"}
      </button>
    </form>
  );
};

export default Auth;
