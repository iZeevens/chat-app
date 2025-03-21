import React from "react";
import { StyledInput, StyledInputWrapper, StyledLabel } from "./InputUI.styles";

export interface InputUIProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  customStyles?: React.CSSProperties;
}

export const InputUI = React.forwardRef<HTMLInputElement, InputUIProps>(
  ({ label, error, customStyles, ...props }, ref) => {
    return (
      <StyledInputWrapper style={customStyles}>
        {label && <StyledLabel>{label}</StyledLabel>}
        <StyledInput ref={ref} {...props} />
        {error && <span>{error}</span>}
      </StyledInputWrapper>
    );
  }
);

InputUI.displayName = "InputUI";
