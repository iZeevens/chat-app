import { ErrorContainer, ErrorIcon } from "./ErrorUI.styles";

interface IErrorUIProps {
  message: string;
}

export const ErrorUI = ({ message }: IErrorUIProps) => {
  return (
    <ErrorContainer>
      <ErrorIcon />
      <span>{message}</span>
    </ErrorContainer>
  );
};
