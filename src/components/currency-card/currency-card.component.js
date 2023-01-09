import React from "react";
import { spacing } from "../../utils/utils";
import * as S from "./currency-card.styles";

const CurrencyCard = ({ name, flag }) => {
  return (
    <S.CardWrapper
      style={{ marginLeft: name === "Iraqui\nDinar" ? spacing : 0 }}
    >
      <S.FlagImage source={flag} resizeMode="cover" />
      <S.CountryName variant="title">{name}</S.CountryName>
    </S.CardWrapper>
  );
};

export default CurrencyCard;
