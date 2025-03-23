import styled from "styled-components";

export const StyledButton = styled.button<{
  $variant: string;
  $size: string;
  $width?: string;
  $height?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $width }) => $width || "38px"};
  height: ${({ $height }) => $height || "38px"};
  font-size: ${({ $size }) =>
    $size === "small" ? "14px" : $size === "large" ? "18px" : "16px"};
  color: white;
  transition: 0.2s;
  cursor: pointer;

  background-color: ${({ $variant, theme }) =>
    $variant === "primary"
      ? theme.colors.primary
      : $variant === "secondary"
      ? theme.colors.stroke
      : "transparent"};
  border-radius: ${({ theme }) => theme.borderRadius.md};

  border: ${({ $variant, theme }) =>
    $variant === "outline" ? `1px solid ${theme.colors.stroke}` : "none"};

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
