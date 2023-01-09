import React from "react";
import * as S from "./amount-description.styles";
import ChevronDown from "../../../../assets/chevron-down.svg";

const AmountDescription = () => {
  return (
    <S.Wrapper>
      <S.TopWrapper>
        <S.LeftWrapper>
          <S.AmountTitle>Amount Buying</S.AmountTitle>
          <S.Value>$500.000,00 IQD</S.Value>
        </S.LeftWrapper>
        <ChevronDown />
      </S.TopWrapper>
      <S.Separator />
      <S.DescriptionWrapper>
        <S.Value>500</S.Value>
        <S.Quantity>10</S.Quantity>
      </S.DescriptionWrapper>
      <S.DescriptionWrapper>
        <S.Value>500</S.Value>
        <S.Quantity>10</S.Quantity>
      </S.DescriptionWrapper>
      <S.DescriptionWrapper>
        <S.Value>500</S.Value>
        <S.Quantity>10</S.Quantity>
      </S.DescriptionWrapper>
    </S.Wrapper>
  );
};

export default AmountDescription;
