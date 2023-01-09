import React, { useState } from "react";
import { Platform } from "react-native";
import * as S from "./top-bar.styles";
import Logo from "../../../assets/original_logo.png";
import NotificationIcon from "../../../assets/icons/tabs/notification.svg";
import SearchIcon from "../../../assets/icons/search-icon.svg";

const TopBar = ({ showSearchBar }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <S.Wrapper>
      <S.TopWrapper>
        <S.LogoImg resizeMode="contain" source={Logo} />
        <NotificationIcon width={24} height={24} />
      </S.TopWrapper>
      {showSearchBar && (
        <S.InputWrapper
          style={{
            paddingHorizontal: 17,
            paddingVertical: Platform.OS === "ios" ? 12 : 8,
          }}
        >
          <SearchIcon width={20} height={20} />
          <S.CustomInput
            placeholderTextColor="#787878"
            placeholder="Search currency, country or region"
            value={searchText}
            onChangeText={setSearchText}
          />
        </S.InputWrapper>
      )}
    </S.Wrapper>
  );
};

export default TopBar;
