import { Form } from "../../components/Forms/Container/Form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CustomButton } from "../../components/CustomButton";
import { signUpSchema } from "../../schemas";
import { ControlledInput } from "../../components/Forms/ControlledInput";

type SignUpData = {
  email: string;
  password: string;
};

export function SignUpForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({
    resolver: yupResolver(signUpSchema),
  });

  const handleSignIn = (data: SignUpData) => {
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
