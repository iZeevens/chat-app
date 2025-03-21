import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 459px;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.stroke};
  padding: ${({ theme }) => theme.spacing.xl};
`;

export const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize["2xl"]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: ${({ theme }) => theme.typography.lineHeight.bold};
  margin-bottom: 20px;
`;
export const StyledContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
