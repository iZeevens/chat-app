import styled from "styled-components";
import TrashIcon from "@assets/trash.svg?react";
import SideBarChatIcon from "@assets/sidebar-chat.svg?react";

export const ListItemContainer = styled.div<{ $isActive: boolean }>`
  display: flex;
  justify-content: space-between;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.4)};
  padding: ${({ theme }) => theme.spacing.sm};
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

export const ListItemContent = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
`;

export const ListItemName = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: white;
`;

export const StyledTrashIcon = styled(TrashIcon)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.strokeSecond};
`;

export const StyledSideBarChatIcon = styled(SideBarChatIcon)`
  color: ${({ theme }) => theme.colors.strokeSecond};
`;
