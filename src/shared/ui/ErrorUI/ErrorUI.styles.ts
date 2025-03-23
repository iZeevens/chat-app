import styled from "styled-components";
import { AlertCircle } from "lucide-react"; 

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  background-color: #ffebee;
  color: #c62828;
  border: 1px solid #c62828;
  border-radius: 8px;
  font-size: 14px;
  max-width: 100%;
  margin: 0 auto;
`;

export const ErrorIcon = styled(AlertCircle)`
  width: 20px;
  height: 20px;
  color: #c62828;
`;