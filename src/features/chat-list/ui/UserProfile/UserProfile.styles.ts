import styled from "styled-components";
import LogoutBtnIcon from "@assets/logout.svg?react";
import { darken } from "polished";

export const UserProfileContiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.stroke};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const UserProfileContent = styled.div`
  display: flex;
  gap: 12px;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
`;

export const Tokens = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: ${({ theme }) => theme.typography.lineHeight.small};
`;

export const LogoutIcon = styled(LogoutBtnIcon)`
  cursor: pointer;
  transition: color 0.5s ease-in;
  color: #fe4242;

  &:hover {
    color: ${darken(0.3, "#fe4242")};
  }
`;
