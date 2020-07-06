import { DefaultTheme } from "@react-navigation/native";
import { colors } from "../styles/GlobalStyles";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
  },
};
