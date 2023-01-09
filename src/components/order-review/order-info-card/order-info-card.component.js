import React from "react";
import { View } from "react-native";
import * as S from "./order-info-card.styles";

const OrderInfoCard = ({ title, subtitle, description }) => {
  return (
    <S.Wrapper>
      {title && <S.Title>{title}</S.Title>}
      {subtitle && <S.Subtitle variant="title">{subtitle}</S.Subtitle>}
      {description && <S.Description>{description}</S.Description>}
    </S.Wrapper>
  );
};

export default OrderInfoCard;
