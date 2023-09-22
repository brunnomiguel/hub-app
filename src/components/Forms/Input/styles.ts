import { TextInput } from "react-native";

import styled, { css } from "styled-components/native";

interface Props {
  inputColor: string;
}

export const Container = styled.View`
  margin-bottom: 8px;
  flex-direction: row;

  border-radius: 8px;

  background-color: #868e96;
`;

export const IconContainer = styled.View`
  width: 55px;
  height: 56px;

  align-items: center;
  justify-content: center;

  background-color: #868e96;

  border-radius: 8px 0 0 8px;

  border-bottom-width: ${({ inputColor }: Props) =>
    inputColor ? "2px" : "2px"};
  border-bottom-color: ${({ inputColor }: Props) =>
    inputColor === "default"
      ? "#F8F9FA"
      : inputColor === "error"
      ? "#dc1637"
      : inputColor === "focus"
      ? "#1a13e681"
      : "#3FE864"};
`;

export const InputText = styled(TextInput)`
  flex: 1;

  color: ${({ inputColor }: Props) =>
    inputColor === "default"
      ? "#F8F9FA"
      : inputColor === "error"
      ? "#dc1637"
      : inputColor === "focus"
      ? "#1a13e681"
      : "#3FE864"};

  background-color: #868e96;

  font-size: 18px;

  padding: 0 16px;
  margin-left: 2px;

  border-radius: 0 8px 8px 0;

  border-bottom-width: ${({ inputColor }: Props) =>
    inputColor ? "2px" : "2px"};
  border-bottom-color: ${({ inputColor }: Props) =>
    inputColor === "default"
      ? "#F8F9FA"
      : inputColor === "error"
      ? "#dc1637"
      : inputColor === "focus"
      ? "#1a13e681"
      : "#3FE864"};
`;
