import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.lg};
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({theme}) => theme.backgrounds.main};
  position: relative;
`;

export const ToggleButtonWrapper = styled.div`
  position: fixed;
  top: 16px;
  left: 16px;
  z-index: 1000;
`;
