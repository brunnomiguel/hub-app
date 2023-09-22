import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

import { ReactNode } from "react";
import { Container } from "../../components/Forms/Container/Container";

interface IsignUpProps {
  children: ReactNode;
}

export function SignUpRoot({ children }: IsignUpProps) {
  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" enabled>
          {children}
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  );
}
