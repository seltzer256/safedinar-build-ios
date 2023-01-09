import React from "react";
import * as S from "./currency-description.styles";

const CurrencyDescription = () => {
  return (
    <S.Wrapper>
      <S.Title variant="title">Iraqui Dinar Info</S.Title>
      <S.Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </S.Description>
    </S.Wrapper>
  );
};

export default CurrencyDescription;
