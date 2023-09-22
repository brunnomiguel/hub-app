import { LinkText } from "./styles";
import { FormTitle } from "../../components/Forms/Container/FormTitle";
import { ReactNode } from "react";
import { FormContent } from "../../components/Forms/Container/FormContent";
import { CustomButton } from "../../components/CustomButton";

interface IsignInContent {
  children: ReactNode;
  onPress: () => void;
}

export function SignInContent({ children, onPress }: IsignInContent) {
  return (
    <FormContent>
      <FormTitle>Login</FormTitle>

      {children}

      <LinkText registerSchema>Não tem uma conta?</LinkText>

      <CustomButton registerSchema title="Cadastre-se" onPress={onPress} />
    </FormContent>
  );
}
