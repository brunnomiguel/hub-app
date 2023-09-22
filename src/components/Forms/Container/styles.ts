import styled, { css } from "styled-components/native";

import { statusBarHeight } from "../../Header/styles";

interface Props {
  registerSchema: boolean;
  formSchema: boolean;
}

export const StyledContainer = styled.View`
  align-items: center;
  justify-content: center;

  flex: 1;

  padding-top: ${statusBarHeight};
  padding-left: 16px;
  padding-right: 16px;

  background-color: #121214;
`;

export const StyledFormContent = styled.View`
  background-color: #313238;

  width: 310px;
  padding: 16px;

  border-radius: 10px;
`;

export const StyledForm = styled.View`
  gap: 10px;
`;

export const StyledTitle = styled.Text`
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
