import React from "react";
import { Pressable } from "react-native";
import * as S from "./search.styles";
import CloseIcon from "../../../assets/close-white.svg";
import ItemCard from "../../components/item-card/item-card.component";

import MexicoFlag from "../../../assets/flags/mexico.jpg";
import Layout from "../../components/Layout";

const SearchScreen = () => {
  const data = [
    {
      flagImage: MexicoFlag,
      category: "Sell Currency",
      title: "Buy Mexican Peso (MXN) Online",
    },
    {
      flagImage: MexicoFlag,
      category: "Sell Currency",
      title: "Buy Mexican Peso (MXN) Online",
    },
    {
      flagImage: MexicoFlag,
      category: "Sell Currency",
      title: "Buy Mexican Peso (MXN) Online",
    },
    {
      flagImage: MexicoFlag,
      category: "Sell Currency",
      title: "Buy Mexican Peso (MXN) Online",
    },
    {
      flagImage: MexicoFlag,
      category: "Sell Currency",
      title: "Buy Mexican Peso (MXN) Online",
    },
    {
      flagImage: MexicoFlag,
      category: "Sell Currency",
      title: "Buy Mexican Peso (MXN) Online",
    },
    {
      flagImage: MexicoFlag,
      category: "Sell Currency",
      title: "Buy Mexican Peso (MXN) Online",
    },
    {
      flagImage: MexicoFlag,
      category: "Sell Currency",
      title: "Buy Mexican Peso (MXN) Online",
    },
    {
      flagImage: MexicoFlag,
      category: "Sell Currency",
      title: "Buy Mexican Peso (MXN) Online",
    },
  ];
  return (
    <Layout showSearchBar>
      <S.Wrapper>
        <S.ChipsContainer>
          <S.Chip>
            <S.ChipText>Currency</S.ChipText>
            <Pressable>
              <CloseIcon />
            </Pressable>
          </S.Chip>
          <S.Chip>
            <S.ChipText>Currency</S.ChipText>
            <Pressable>
              <CloseIcon />
            </Pressable>
          </S.Chip>
          <S.Chip>
            <S.ChipText>Currency</S.ChipText>
            <Pressable>
              <CloseIcon />
            </Pressable>
          </S.Chip>
        </S.ChipsContainer>
        <S.SearchInfoWrapper>
          <S.InfoTitle variant="title">
            Search Results for:
            {<S.SearchParameter variant="title"> "mexican"</S.SearchParameter>}
          </S.InfoTitle>
        </S.SearchInfoWrapper>
        {data.map((item, index) => (
          <ItemCard key={`search-item-${index}`} {...item} />
        ))}
      </S.Wrapper>
    </Layout>
  );
};

export default SearchScreen;
