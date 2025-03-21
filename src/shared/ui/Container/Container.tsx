import { StyledContainer } from "./Container.styled";

export interface IContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: IContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};
