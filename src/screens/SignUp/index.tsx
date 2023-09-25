import { SignUpController } from "./SignUpController";
import { LayoutAuthentication } from "../../components/Layout/Authentication";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Tipo da propriedade de navegação
type RootStackParamList = {
  signin: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "signin"
>;

interface IsignUpFormProps {
  navigation: HomeScreenNavigationProp;
}

export function SignUp({ navigation }: IsignUpFormProps) {
  return (
    <SignUpController.Root>
      <LayoutAuthentication>
        <SignUpController.Content>
          <SignUpController.Form
            navigateToSignIn={() => navigation.navigate("signin")}
          />
        </SignUpController.Content>
      </LayoutAuthentication>
    </SignUpController.Root>
  );
}
