import { styled, keyframes } from "styled-components";
import ArrowDropDown from "@assets/arrow-down.svg?react";
import ArrowDropUp from "@assets/arrow-up.svg?react";
import { ButtonUI } from "@shared/index";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  position: relative;
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Content = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  background: rgba(18, 24, 37, 0.75);
  border: 1px solid ${({ theme }) => theme.colors.stroke};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  position: absolute;
  z-index: 1;
  padding: 8px;
  width: 68px;
  height: 100px;
  top: 30px;
  left: 50%;
  transform: translate(-50%, 0%);
  animation: ${fadeIn} 0.5s ease-out forwards;
`;

export const Item = styled(ButtonUI)<{ $isActive: boolean }>`
  height: 100%;
  width: 100%;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.stroke : ""};
  cursor: pointer;
`;

export const StyledArowUp = styled(ArrowDropUp)`
  cursor: pointer;
`;

export const StyledArowDown = styled(ArrowDropDown)`
  cursor: pointer;
`;
