import { SignInController } from "./SignInController";
import { LayoutAuthentication } from "../../components/Layout/Authentication";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Tipo da propriedade de navegação
type RootStackParamList = {
  signup: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "signup"
>;

interface SignInProps {
  navigation: HomeScreenNavigationProp;
}

export function SignIn({ navigation }: SignInProps) {
  return (
    <SignInController.Root>
      <LayoutAuthentication>
        <SignInController.Content onPress={() => navigation.navigate("signup")}>
          <SignInController.Form />
        </SignInController.Content>
      </LayoutAuthentication>
    </SignInController.Root>
  );
}
