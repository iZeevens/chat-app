import styled, { keyframes } from "styled-components";
import { ButtonUI } from "@shared/index";

const expand = keyframes`
  from {
    width: 1%;
  }
  to {
    width: 100%;
  }
`;

const shrink = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 1%;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledButton = styled(ButtonUI)`
  min-height: 38px;
  min-width: 38px;
`;

export const SearchInput = styled.input<{ $isOpen: boolean }>`
  width: ${({ $isOpen }) => ($isOpen ? "200px" : "38px")};
  padding: ${({ $isOpen }) => ($isOpen ? "8px 12px" : "0")};
  border: 1px solid ${({ theme }) => theme.colors.stroke};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: inherit;
  color: white;
  outline: none;
  font-size: 14px;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition: opacity 0.2s ease, padding 0.2s ease;
  animation: ${({ $isOpen }) => ($isOpen ? expand : shrink)} 0.5s ease forwards;
`;
