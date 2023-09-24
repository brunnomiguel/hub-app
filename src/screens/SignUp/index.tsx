import { SignUpController } from "./SignUpController";
import { LayoutAuthentication } from "../../components/Layout/Authentication";

export function SignUp() {
  return (
    <SignUpController.Root>
      <LayoutAuthentication>
        <SignUpController.Content>
          <SignUpController.Form />
        </SignUpController.Content>
      </LayoutAuthentication>
    </SignUpController.Root>
  );
}
