import { Form } from "../../components/Forms/Container/Form";
import { useAuth } from "../../contexts/Auth";
import { useForm } from "react-hook-form";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { CustomButton } from "../../components/CustomButton";
import { signUpSchema } from "../../schemas";
import { IsignUpProps } from "../../@types/auth";
import { ControlledInput } from "../../components/Forms/ControlledInput";
import { BoxIcon, PasswordViewController } from "./styles";

interface IsignUpFormProps {
  navigateToSignIn: () => void;
}

const useSignUpForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IsignUpProps>({
    resolver: yupResolver(signUpSchema),
  });

  return {
    control,
    handleSubmit,
    errors,
    showPassword,
    showConfirmPassword,
    setShowPassword,
    setShowConfirmPassword,
  };
};

export function SignUpForm({ navigateToSignIn }: IsignUpFormProps) {
  const {
    control,
    errors,
    handleSubmit,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
  } = useSignUpForm();

  const { signUp } = useAuth();

  const handleSignIn = (data: IsignUpProps) => {
    signUp(data).then((_) => {
      navigateToSignIn();
    });
  };

  return (
    <Form>
      <ControlledInput
        name="name"
        icon="user"
        control={control}
        placeholder="Nome"
        error={errors.name}
      />

      <ControlledInput
        name="email"
        icon="mail"
        control={control}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        error={errors.email}
      />

      <PasswordViewController>
        <ControlledInput
          name="password"
          icon="lock"
          control={control}
          placeholder="Senha"
          secureTextEntry={!showPassword}
          error={errors.password}
        />

        <BoxIcon onPress={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <Feather name="eye-off" color="#fff" size={24} />
          ) : (
            <Feather name="eye" color="#fff" size={24} />
          )}
        </BoxIcon>
      </PasswordViewController>

      <PasswordViewController>
        <ControlledInput
          name="confirm_password"
          icon="lock"
          control={control}
          placeholder="Confirmação de senha"
          secureTextEntry={!showConfirmPassword}
          error={errors.confirm_password}
        />

        <BoxIcon onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
          {showConfirmPassword ? (
            <Feather name="eye-off" color="#fff" size={24} />
          ) : (
            <Feather name="eye" color="#fff" size={24} />
          )}
        </BoxIcon>
      </PasswordViewController>

      <CustomButton title="Cadastrar" onPress={handleSubmit(handleSignIn)} />
    </Form>
  );
}
