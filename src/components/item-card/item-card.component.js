import React from "react";
import * as S from "./item-card.styles";

const ItemCard = ({ flagImage, category, title }) => {
  return (
    <S.CardWrapper>
      <S.FlagWrapper>
        <S.FlagImage source={flagImage} resizeMode="cover" />
      </S.FlagWrapper>
      <S.TextWrapper>
        <S.Category>{category}</S.Category>
        <S.Title variant="title">{title}</S.Title>
      </S.TextWrapper>
    </S.CardWrapper>
  );
};

export default ItemCard;
