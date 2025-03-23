import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputUI } from "@shared/index";
import { LoginButton } from "../LoginButton/LoginButton";
import { Form, Title, ContainerInputs } from "./LoginForm.styles";

export const LoginForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name && password) {
      localStorage.setItem("user", JSON.stringify({ name }));
      navigate("/chats");
    }
  };

  return (
    <Form>
      <Title>Авторизация</Title>
      <ContainerInputs>
        <InputUI
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Имя"
          placeholder="Ваше имя"
        />
        <InputUI
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Пароль"
          placeholder="Ваш пароль"
        />
        <LoginButton onClick={handleLogin}>Войти</LoginButton>
      </ContainerInputs>
    </Form>
  );
};
