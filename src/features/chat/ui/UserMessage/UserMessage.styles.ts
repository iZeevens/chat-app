import styled from "styled-components";
import AvatarIcon from "@assets/avatar.svg?react";
import CopyIcon from "@assets/copy.svg?react"

export const UserMessageContainer = styled.div`
  display: flex;
  align-items: flex-end;
  align-self: flex-end;
  gap: 10px;
`;

export const MessageBubble = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.typography.fontSize.xs};
  background-color: rgba(71, 133, 255, .5);
  color: white;
  border-radius: 10px;
  border-bottom-right-radius: 0;
  padding: 7px;
`;

export const MessageText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  line-height: normal;
  padding: ${({ theme }) => theme.spacing.sm};
`;

export const MessageTime = styled.span`
  align-self: flex-end;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  line-height: 11px;
`;

export const Avatar = styled(AvatarIcon)``;

export const Copy = styled(CopyIcon)`
  cursor: pointer;
`
