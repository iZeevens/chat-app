import styled from "styled-components";
import { darken } from "polished";

export const Button = styled.button`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  background-color: ${({ theme }) => theme.backgrounds.button};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  width: 100%;
  height: 52px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease-out;
  border: none;

  &:hover {
    background-color: ${({ theme }) => darken(0.1, theme.backgrounds.button)};
  }
`;
