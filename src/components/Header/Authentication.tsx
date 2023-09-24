import { Logo } from "../Logo";
import { Feather } from "@expo/vector-icons";
import { Fragment } from "react";
import { HeaderContent } from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";

export function HeaderAuthentication() {
  const route = useRoute();
  const navigate = useNavigation();

  const currentPath = route.name;
  const goBack = () => navigate.goBack();

  return (
    <Fragment>
      {currentPath === "signin" ? (
        <Logo />
      ) : (
        <HeaderContent>
          <Logo />
          <Feather name="arrow-left" color="#fff" size={30} onPress={goBack} />
        </HeaderContent>
      )}
    </Fragment>
  );
}
