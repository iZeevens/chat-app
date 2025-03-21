import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputUI } from "@shared/index";
import { LoginButton } from "../LoginButton/LoginButton";
import {
  StyledForm,
  StyledTitle,
  StyledContainerInputs,
} from "./LoginForm.styles";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      localStorage.setItem("user", JSON.stringify({ email }));
      navigate("/");
    }
  };

  return (
    <StyledForm>
      <StyledTitle>Авторизация</StyledTitle>
      <StyledContainerInputs>
        <InputUI value={email} onChange={(e) => setEmail(e.target.value)} label="E-Mail" placeholder="Ваш E-Mail" />
        <InputUI value={password} onChange={(e) => setPassword(e.target.value)} label="Пароль" placeholder="Ваш пароль" />
        <LoginButton onClick={handleLogin}>Войти</LoginButton>
      </StyledContainerInputs>
    </StyledForm>
  );
};
