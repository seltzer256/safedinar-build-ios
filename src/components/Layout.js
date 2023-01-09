import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import HomeTopBar from "./top-bar/top-bar.component";
import * as S from "../styles/global.styles";

const Layout = ({ children, showSearchBar, hideTopBar, backgroundColor }) => {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "white" }} />
      <S.GlobalSafeAreaView>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        {!hideTopBar && (
          <HomeTopBar showSearchBar={showSearchBar} style={{ flex: 1 }} />
        )}
        <S.Wrapper background={backgroundColor}>{children}</S.Wrapper>
      </S.GlobalSafeAreaView>
    </>
  );
};

export default Layout;
