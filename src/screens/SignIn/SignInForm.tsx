import { ControlledInput } from "../../components/Forms/ControlledInput";

import { Form } from "../../components/Forms/Container/Form";
import { CustomButton } from "../../components/CustomButton";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../../schemas";
import { IsignInProps } from "../../@types/auth";
import { useAuth } from "../../contexts/Auth";

const useSignInForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IsignInProps>({
    resolver: yupResolver(signInSchema),
  });

  return {
    control,
    handleSubmit,
    errors,
  };
};

export function SignInForm() {
  const { signIn } = useAuth();
  const { control, errors, handleSubmit } = useSignInForm();

  const handleSignIn = (data: IsignInProps) => {
    signIn(data);
  };

  return (
    <Form>
      <ControlledInput
        name="email"
        icon="mail"
        control={control}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        error={errors.email}
      />

      <ControlledInput
        name="password"
        icon="lock"
        control={control}
        placeholder="Senha"
        secureTextEntry
        error={errors.password}
      />

      <CustomButton title="Acessar" onPress={handleSubmit(handleSignIn)} />
    </Form>
  );
}
