import React from "react";
import CartCard from "../cart-card/cart-card.component";
import * as S from "./cart-info.styles";

const CartInfo = ({ cart }) => {
  return (
    <S.CartWrapper>
      <S.Wrapper>
        <S.Title variant="title">Cart</S.Title>
        <S.TrashWrapper>
          <S.DeleteIcon />
          <S.ButtonDescription>Delete</S.ButtonDescription>
        </S.TrashWrapper>
      </S.Wrapper>
      <S.CardsWrapper>
        {cart.items &&
          cart.items.map((item, index) => (
            <CartCard key={`search-item-${index}`} {...item} />
          ))}
      </S.CardsWrapper>
      <S.TotalWrapper>
        <S.Title variant="title">Total</S.Title>
        <S.TotalValue variant="title">${cart.total}</S.TotalValue>
      </S.TotalWrapper>
      <S.Line />
    </S.CartWrapper>
  );
};

export default CartInfo;
