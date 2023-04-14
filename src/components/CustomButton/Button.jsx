import React from "react";
import { ButtonContainer } from "./Button.style";

function Button({ children, size }) {
  return <ButtonContainer size={size}>{children}</ButtonContainer>;
}

export default Button;
