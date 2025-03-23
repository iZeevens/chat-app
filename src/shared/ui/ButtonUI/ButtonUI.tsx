import { StyledButton } from "./ButtonUI.styles";

interface IButtonUIProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  width?: string;
  height?: string;
}

export const ButtonUI = ({
  children,
  variant = "primary",
  size = "medium",
  width,
  height,
  ...props
}: IButtonUIProps) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $width={width}
      $height={height}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
