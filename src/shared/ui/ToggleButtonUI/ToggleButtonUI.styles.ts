import styled from "styled-components";
import { ButtonUI } from "../ButtonUI/ButtonUI";

export const StyledButton = styled(ButtonUI)<{ $isOpen: boolean }>`
  width: 20px;
  border-top-right-radius: ${({ $isOpen, theme }) =>
    $isOpen ? 0 : theme.borderRadius.md};
  border-bottom-right-radius: ${({ $isOpen, theme }) =>
    $isOpen ? 0 : theme.borderRadius.md};

  border-top-left-radius: ${({ $isOpen, theme }) =>
    $isOpen ? theme.borderRadius.md : 0};
  border-bottom-left-radius: ${({ $isOpen, theme }) =>
    $isOpen ? theme.borderRadius.md : 0};
`;

export const ToggleButtonWrapper = styled.div<{ $position?: "left" | "right" }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $position }) => ($position === "left" ? "left: 0;" : "right: 0;")}
  z-index: 1000;
`;
