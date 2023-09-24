import { StatusBar } from "react-native";
import styled from "styled-components/native";

export const statusBarHeight = StatusBar.currentHeight
  ? `${StatusBar.currentHeight + 22}px`
  : `${64}px`;

export const HeaderContainer = styled.View`
  width: 310px;

  padding-left: 16px;
  padding-right: 16px;

  margin-bottom: 40px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`;
