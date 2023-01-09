/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import RootNavigator from "./src/navigation/RootNavigator";
import { ThemeProvider } from "styled-components/native";
import { lightTheme } from "./theme/theme";
import { Provider as PaperProvider } from "react-native-paper";
import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";

const App = () => {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <PaperProvider theme={lightTheme}>
      <ThemeProvider theme={lightTheme}>
        <RootNavigator />
      </ThemeProvider>
    </PaperProvider>
  );
};

export default App;
