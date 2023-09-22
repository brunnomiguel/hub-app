import { ControlledInput } from "../../components/Forms/ControlledInput";

import { Form } from "./styles";
import { CustomButton } from "../../components/CustomButton";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../../schemas";

type SignInData = {
  email: string;
  password: string;
};

export function SignInForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn = (data: SignInData) => {
    console.log(data);
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
