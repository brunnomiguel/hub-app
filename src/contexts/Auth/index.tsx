import {
  useState,
  ReactNode,
  useEffect,
  useContext,
  createContext,
} from "react";

import { apiAuth } from "../../services";
import { useNavigation } from "@react-navigation/native";
import { IsignInProps, IsignUpProps } from "../../@types/auth";

import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthContextProps = {
  signed: boolean;
  user: object | null;
  signIn: (data: IsignInProps) => Promise<void>;
  signOut: () => void;
  signUp: (data: Omit<IsignUpProps, "confirm_password">) => Promise<void>;
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<object | null>(null);

  const navigation = useNavigation();

  useEffect(() => {
    async function loadStoragedData() {
      const storageUser = await AsyncStorage.getItem("HubApp:user");
      const storageToken = await AsyncStorage.getItem("HubApp:token");

      if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser));
      }
    }

    loadStoragedData();
  }, []);

  const signIn = async (data: IsignInProps) => {
    const response = await apiAuth.post("/sessions", data);

    const { token, user } = response.data;

    setUser(user);

    await AsyncStorage.setItem("HubApp:user", JSON.stringify(user));
    await AsyncStorage.setItem("HubApp:token", token);
  };

  const signOut = () => {
    AsyncStorage.clear().then(() => setUser(null));
  };

  const signUp = async (data: Omit<IsignUpProps, "confirm_password">) => {
    const { email, name, password } = data;

    const body = {
      name,
      email,
      password,
      bio: "Developer",
      contact: "Insira seu contato",
      course_module: "1º Módulo (Introdução ao Front-End)",
    };

    await apiAuth.post("/users", body);
  };

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signIn, signOut, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
};
