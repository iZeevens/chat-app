import styled from "styled-components";
import CopyIcon from "@assets/copy.svg?react";

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  color: white;
  padding-left: 55px; 
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  left: -55px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const BotName = styled.span``;

export const Badge = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  background: ${({ theme }) => theme.backgrounds.modal};
  color: white;
  padding: 4px 12px;
  border-radius: 14px;
`;

export const MessageBubble = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  line-height: normal;
  padding: 8.5px 0;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Caps = styled.span`
  color: #9ca3af;
  margin-right: 14px;
`;

export const Copy = styled(CopyIcon)`
  cursor: pointer;
`;

export const Time = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  line-height: 11px;
  margin-left: auto;
`;
