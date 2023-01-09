import { DefaultTheme } from "react-native-paper";

const lightTheme = {
  ...DefaultTheme,
  dark: false,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    primary: "#125F9B",
    primaryLight: "rgba(18, 95, 155, 0.5);",
    primaryDark: "#011F37",
    secondary: "#232323",
    secondaryDark: "#626262",
    accent: "#125F9B",
    background: "#F0F0F0",
    surface: "#FFFFFF",
    error: "#EF5350",
    success: "#4CAF50",
    text: "#000000",
    onSurface: "#E2E2E2",
    textContent: "#011F37",
    textContentLight: "#6F6F6F",
    // disabled: color(black).alpha(0.26).rgb().string(),
    // placeholder: color(black).alpha(0.54).rgb().string(),
    // backdrop: color(black).alpha(0.5).rgb().string(),
    // notification: pinkA400,
  },
  // fonts: configureFonts(),
  fonts: {
    primary: "DMSans_400Regular",
    secondary: "DMSans_500Medium",
    tertiary: "DMSans_700Bold",
  },
  animation: {
    scale: 1.0,
  },
  spacing: {
    normal: 30,
    large: 60,
  },
};

const darkTheme = {
  ...DefaultTheme,
  dark: true,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    primary: "#125F9B",
    accent: "#125F9B",
    background: "#f6f6f6",
    surface: "#FFFFFF",
    error: "#B00020",
    text: "#000000",
    onSurface: "#000000",
    textContent: "#011F37",
    // disabled: color(black).alpha(0.26).rgb().string(),
    // placeholder: color(black).alpha(0.54).rgb().string(),
    // backdrop: color(black).alpha(0.5).rgb().string(),
    // notification: pinkA400,
  },
  // fonts: configureFonts(),
  fonts: {
    primary: "DMSans_400Regular",
    secondary: "DMSans_500Medium",
    tertiary: "DMSans_700Bold",
  },
  animation: {
    scale: 1.0,
  },
  spacing: {
    normal: 30,
    large: 60,
  },
};

export { darkTheme, lightTheme };
