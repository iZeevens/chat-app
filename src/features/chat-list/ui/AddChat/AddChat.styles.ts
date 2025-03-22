import styled from "styled-components";

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.backgrounds.button};
  border: 1px solid ${({ theme }) => theme.colors.stroke};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  width: 38px;
  height: 38px;
  cursor: pointer;
`