import { ButtonText, StyledButton } from "./styles";

interface IcustomButtonProps {
  title: string;
  onPress: () => void;
  registerSchema?: boolean;
}

export function CustomButton({
  title,
  onPress,
  registerSchema = false,
}: IcustomButtonProps) {
  return (
    <StyledButton
      onPress={onPress}
      activeOpacity={0.8}
      registerSchema={registerSchema}
    >
      <ButtonText>{title}</ButtonText>
    </StyledButton>
  );
}
