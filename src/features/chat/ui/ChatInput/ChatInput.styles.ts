import styled from "styled-components";
import { ButtonUI } from "@shared/index";

export const ChatInputContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const StyledChatInput = styled.input`
  padding: ${({ theme }) => theme.spacing.xl} 14px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.stroke};
  color: white;
  background-color: inherit;
  width: 100%;

  &::placeholder {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    line-height: ${({ theme }) => theme.typography.lineHeight.small};
    color: ${({ theme }) => theme.colors.strokeSecond}; 
  }
`;

export const IconContainer = styled(ButtonUI)`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translate(0%, -50%);
`