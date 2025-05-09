import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Iltimos, barcha maydonlarni to‘ldiring");
      return;
    }

    try {
      const response = await axios.post("https://api-crm.nwv.agency/api/auth/login", {
        email,
        password,
      });

      const data = response.data;
      console.log("Registered:", data);
      navigate("/dashboard");

    } catch (err) {
      console.error("Register error:", err);
      if (err.response && err.response.data) {
        const res = err.response.data;
        const msg =
          res.email?.[0] ||
          res.password?.[0] ||
          res.detail ||
          "Ro‘yxatdan o‘tishda xatolik";
        setError(msg);
      } else {
        setError("Serverga ulanishda xatolik");
      }
    }
  };

  return (
    <div className="login-page">
      <div className="left-panel">
        <h1 className="logo">Logo</h1>
        <p className="login-description">
          Welcome. <br />
          Start your journey<br />
          now with our<br />
          management system!
        </p>
      </div>

      <div className="right-panel">
        <div className="login-box">
          <p className="login-box-subtitle">Рады видеть вас снова!</p>
          <h2 className="login-box-title">Войдите в аккаунт</h2>

          {error && <p className="error">{error}</p>}

          <form onSubmit={handleSubmit}>
            <label>
              <span>Почта</span>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              <span>Пароль</span>
              <input
                type="password"
                placeholder="Введите пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <button type="submit">Войти</button>
          </form>
        </div>
      </div>
    </div>
  );   
};

export default Login;
