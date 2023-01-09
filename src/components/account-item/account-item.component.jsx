import React from "react";
import * as S from "./account-item.styles";
import ArrowIcon from "../../../assets/account/arrow-left.svg";
import { useNavigation } from "@react-navigation/native";

const AccountItem = ({ title, IconComponent, description, url }) => {
  const navigation = useNavigation();
  if (!title || !url) return null;
  return (
    <S.Wrapper onPress={() => navigation.navigate(url)}>
      <S.IconWrapper>{IconComponent}</S.IconWrapper>
      <S.TextWrapper>
        <S.Title variant="subtitle">{title}</S.Title>
        {description && (
          <S.Description variant="body" numberOfLines={1}>
            {description}
          </S.Description>
        )}
      </S.TextWrapper>
      <ArrowIcon />
    </S.Wrapper>
  );
};

export default AccountItem;
