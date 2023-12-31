import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

import { ReactNode } from "react";
import { Container } from "../../components/Forms/Container/Container";

interface IsignInRoot {
  children: ReactNode;
}

export const SignInRoot = ({ children }: IsignInRoot) => {
  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" enabled>
          {children}
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  );
};
