import React, { useState } from "react";
import { ScrollView } from "react-native";
import withTopBar from "../with-top-bar/with-top-bar.component";
import * as S from "./account-newsletter.styles";
import Checkbox from "expo-checkbox";

const AccountNewsletter = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <ScrollView>
      <S.TitleWrapper>
        <S.Title>Newsletter</S.Title>
      </S.TitleWrapper>
      <S.Wrapper>
        <S.Description paddingBottom="23">
          SafeDinars Exchange Rate Alerts allows you to monitor for changes in
          the official and market exchange rates for all the currencies we
          offer. Additionally, you can monitor both our buy and Sell rates. When
          the rates changes, we’ll notify you.
        </S.Description>
        <S.BottomWrapper>
          <S.Subtitle>Subscribe</S.Subtitle>
          <Checkbox
            value={isChecked}
            color={isChecked ? "#1BC049" : undefined}
            onValueChange={setIsChecked}
          />
        </S.BottomWrapper>
      </S.Wrapper>
    </ScrollView>
  );
};

export default withTopBar("Newsletter")(AccountNewsletter);
