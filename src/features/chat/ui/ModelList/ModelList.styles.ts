import {styled, keyframes} from "styled-components";

export const ModelListContainer = styled.div`
  position: relative;
  align-self: flex-start;
  margin-bottom: 14px;
`;

export const ModelListSelectedContent = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  gap: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.stroke};
  border-radius: 10px;
  cursor: pointer;
`;

export const ModelListSelected = styled.span`
  font-size: 15px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: ${({ theme }) => theme.typography.lineHeight.small};
  color: white;
`;


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const ModelDropdown = styled.div`
  position: absolute;
  border: 1px solid ${({ theme }) => theme.colors.stroke};
  padding: 6px;
  border-radius: 10px;
  width: 272px;
  top: -150px;
  opacity: 0;
  animation: ${fadeIn} 0.2s ease-out forwards;
  background-color: ${({theme}) => theme.backgrounds.background};
`;


export const ModelDropdownItem = styled.div<{ $isActive: boolean }>`
  display: flex;
  padding: 12px;
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.backgrounds.modal : ""};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  gap: 10px;
  cursor: pointer;
`;

export const ModelDropdownText = styled.span`
  font-size: 15px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: ${({ theme }) => theme.typography.lineHeight.small};
  color: white;
`;
