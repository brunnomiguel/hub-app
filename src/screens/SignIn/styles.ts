import styled from "styled-components/native";

interface Props {
  registerSchema: boolean;
  formSchema: boolean;
}

export const LinkText = styled.Text`
  margin-top: ${({ registerSchema }: Props) =>
    registerSchema ? "40px" : "12px"};

  margin-bottom: 12px;

  font-size: 18px;

  text-align: center;

  color: #fff;
`;
