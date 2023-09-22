import styled, { css } from "styled-components/native";

import { statusBarHeight } from "../../components/Header/styles";

interface Props {
  registerSchema: boolean;
  formSchema: boolean;
}

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  flex: 1;

  padding-top: ${statusBarHeight};
  padding-left: 16px;
  padding-right: 16px;

  background-color: #121214;
`;

export const FormContent = styled.View`
  background-color: #313238;

  width: 310px;
  padding: 16px;

  border-radius: 10px;
`;

export const Form = styled.View`
  gap: 10px;
`;

export const ContainerForm = styled.View`
  gap: 16px;

  align-items: center;
`;

export const LinkText = styled.Text`
  margin-top: ${({ registerSchema }: Props) =>
    registerSchema ? "40px" : "12px"};

  margin-bottom: 12px;

  font-size: 18px;

  text-align: center;

  color: #fff;
`;

export const Title = styled.Text`
  font-size: 40px;

  margin-bottom: 64px;

  color: #fff;

  text-align: center;

  ${({ formSchema }: Props) =>
    formSchema &&
    css`
      font-weight: bold;
      color: #000;
    `}
`;
