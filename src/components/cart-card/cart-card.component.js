import React from "react";
import * as S from "./cart-card.styles";

const CartCard = ({ title, description, value }) => {
  return (
    <S.Wrapper>
      <S.LeftWrapper>
        <S.Title variant="title">{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.LeftWrapper>
      <S.Title variant="title">${value}</S.Title>
    </S.Wrapper>
  );
};

export default CartCard;
