import { ToggleButtonWrapper, StyledButton } from "./ToggleButtonUI.styles";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface IToggleButtonUIProps {
  onClick: () => void;
  isOpen: boolean;
  position?: "left" | "right";
}

export const ToggleButtonUI = ({
  onClick,
  isOpen,
  position,
}: IToggleButtonUIProps) => {
  return (
    <ToggleButtonWrapper $position={position}>
      <StyledButton
        onClick={onClick}
        aria-label="Toggle sidebar"
        $isOpen={isOpen}
      >
        {isOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
      </StyledButton>
    </ToggleButtonWrapper>
  );
};
