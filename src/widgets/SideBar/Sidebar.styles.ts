import styled from "styled-components";

export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
  width: 100%;
  height: 100%;
  max-width: 324px;
  background-color: ${({ theme }) => theme.backgrounds.background};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ChatControls = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.stroke};
  padding-bottom: 16px;
`;
