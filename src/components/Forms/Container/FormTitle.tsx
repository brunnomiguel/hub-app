import { ReactNode } from "react";
import { StyledTitle } from "./styles";

export function FormTitle({ children }: { children: ReactNode }) {
  return <StyledTitle>{children}</StyledTitle>;
}
