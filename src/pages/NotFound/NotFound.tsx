import { StyledNotFound, Title, Description } from "./NotFound.styled";
import { Container } from "@shared/index";

export const NotFound = () => {

  return (
    <Container>
      <StyledNotFound>
        <Title>404</Title>
        <Description>Страница не найдена</Description>
      </StyledNotFound>
    </Container>
  );
};
