import { ReactNode } from "react";
import { StyledFormContent } from "./styles";

export function FormContent({ children }: { children: ReactNode }) {
  return <StyledFormContent>{children}</StyledFormContent>;
}
