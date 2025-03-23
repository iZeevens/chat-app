import { Button } from "./LoginButton.styles";

interface ILoginButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const LoginButton = ({ children, ...props }: ILoginButtonProps) => {
  return <Button type="button" {...props}>{children}</Button>;
};
