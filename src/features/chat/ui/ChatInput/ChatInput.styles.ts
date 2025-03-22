import styled from "styled-components";
import { darken } from "polished";

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

export const IconContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ theme }) => theme.backgrounds.button};
  width: 38px;
  height: 38px;
  right: 20px;
  top: 50%;
  transform: translate(0%, -50%);
  cursor: pointer;
  transition: 0.5s ease-in;

  &:hover {
    background-color: ${({ theme }) => darken(0.3, theme.backgrounds.button)};
  }
`