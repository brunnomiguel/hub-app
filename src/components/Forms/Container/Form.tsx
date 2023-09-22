import { ReactNode } from "react";
import { StyledForm } from "./styles";

export function Form({ children }: { children: ReactNode }) {
  return <StyledForm>{children}</StyledForm>;
}
