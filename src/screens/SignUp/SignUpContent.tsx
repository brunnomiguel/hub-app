import { ReactNode } from "react";
import { FormTitle } from "../../components/Forms/Container/FormTitle";
import { FormContent } from "../../components/Forms/Container/FormContent";

interface IsignUpContent {
  children: ReactNode;
}

export function SignUpContent({ children }: IsignUpContent) {
  return (
    <FormContent>
      <FormTitle>SignUp</FormTitle>

      {children}
    </FormContent>
  );
}
