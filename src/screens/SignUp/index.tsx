import { Logo } from "../../components/Logo";
import { SignUpController } from "./SignUpController";

export function SignUp() {
  return (
    <SignUpController.Root>
      <Logo />

      <SignUpController.Content>
        <SignUpController.Form />
      </SignUpController.Content>
    </SignUpController.Root>
  );
}
