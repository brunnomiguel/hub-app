import { StatusBar } from "react-native";

export const statusBarHeight = StatusBar.currentHeight
  ? `${StatusBar.currentHeight + 22}px`
  : `${64}px`;
