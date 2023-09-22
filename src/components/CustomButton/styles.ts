import styled from "styled-components/native";

interface Props {
  registerSchema: boolean;
}

export const StyledButton = styled.TouchableOpacity`
  width: 278px;
  height: 50px;

  align-items: center;
  justify-content: center;

  color: #fff;
  border-radius: 10px;
  background-color: ${({ registerSchema }: Props) =>
    registerSchema ? "#868E96" : "#ff577f"};
`;

export const ButtonText = styled.Text`
  color: #fff;

  font-size: 18px;
`;
