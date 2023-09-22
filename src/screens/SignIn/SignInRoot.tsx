import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

import { Container } from "./styles";
import { ReactNode } from "react";

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
