import styled, { keyframes } from "styled-components";
import { Loader2 } from "lucide-react";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerIcon = styled(Loader2)`
  animation: ${spin} 1s linear infinite;
  color: ${({ theme }) => theme.colors.primary};
  width: 40px;
  height: 40px;
`;
