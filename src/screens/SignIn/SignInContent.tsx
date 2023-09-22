import { ReactNode } from "react";
import { CustomButton } from "../../components/CustomButton";
import { FormContent, LinkText, Title } from "./styles";

interface IsignInContent {
  children: ReactNode;
  onPress: () => void;
}

export function SignInContent({ children, onPress }: IsignInContent) {
  return (
    <FormContent>
      <Title>Login</Title>

      {children}

      <LinkText registerSchema>Não tem uma conta? </LinkText>

      <CustomButton registerSchema title="Cadastre-se" onPress={onPress} />
    </FormContent>
  );
}
