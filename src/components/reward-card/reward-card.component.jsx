import React from "react";
import * as S from "./reward-card.styles";

const RewardCard = ({ title, description }) => {
  // console.log("title :>> ", title);

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  );
};

export default RewardCard;
