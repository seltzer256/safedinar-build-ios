import React from "react";
import { Pressable } from "react-native";
import * as S from "./search-banner.styles";
import Logo from "../../../assets/small-logo.svg";

const SearchBanner = ({ navigation }) => {
  return (
    <S.Container>
      <Pressable onPress={() => navigation.navigate("Search")}>
        <S.Background
          colors={["#125F9B", "#154E7B"]}
          start={{ x: 1.0, y: 0.5 }}
          end={{ x: 0.0, y: 0.5 }}
        >
          <Logo />
          <S.Title variant="title">
            Looking for a currency that {"\n"} you don't see here?
          </S.Title>
          <S.Subtitle>Search for other available currencies</S.Subtitle>
        </S.Background>
      </Pressable>
    </S.Container>
  );
};

export default SearchBanner;
