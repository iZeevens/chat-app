import { StyledNotFound, Title, Description } from "./NotFound.styled";
import { Container } from "@shared/index";
// import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  // const navigate = useNavigate();

  // const handleGoHome = () => {
  //   navigate('/');
  // };

  return (
    <Container>
      <StyledNotFound>
        <Title>404</Title>
        <Description>Страница не найдена</Description>
      </StyledNotFound>
    </Container>
  );
};
