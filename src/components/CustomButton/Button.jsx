import React from "react";
import { ButtonContainer } from "./Button.style";

function Button({ children, size, inverted }) {
  return (
    <ButtonContainer size={size} inverted={inverted}>
      {children}
    </ButtonContainer>
  );
}

export default Button;
