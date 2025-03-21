import styled from "styled-components";

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: white;
`;

export const StyledInput = styled.input`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  outline: none;
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.stroke};
  background-color: ${({ theme }) => theme.backgrounds.background};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: white;
  transition: border-color 0.3s ease-in;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
