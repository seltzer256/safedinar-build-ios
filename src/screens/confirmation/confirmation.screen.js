import React from "react";
import { Pressable } from "react-native";
import * as S from "./confirmation.styles";
import Layout from "../../components/Layout";
import Container from "../../components/container/container.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { useNavigation } from "@react-navigation/native";
import TermsCheckbox from "../../components/terms-checkbox/terms-checkbox.component";
import { FormProvider, useForm } from "react-hook-form";

const ConfirmationScreen = () => {
  const navigation = useNavigation();
  const methods = useForm();

  return (
    <Layout backgroundColor="#F0F0F0">
      <Container>
        <S.TopWrapper>
          <S.Title variant="title">Your order has been placed</S.Title>
          <S.OrderTitle variant="title">Order #USA1651S</S.OrderTitle>
        </S.TopWrapper>
        <S.OrderDescriptionWrapper>
          <S.InfoText>
            The exchange rate on your order is locked in until 5:00 p. m. EST on
            Monday, Feb. 10.{"\n\n"}Please send us a copy of your payment by
            then to maintain your locked-in rate (see the Customer Verification
            section below for more information).{"\n"}
          </S.InfoText>
          <S.ListWrapper>
            <S.ItemWrapper>
              <S.Dot />
              <S.InfoText>
                If received after that time, the exchange rates on your order
                are subject to change.
              </S.InfoText>
            </S.ItemWrapper>
            <S.ItemWrapper>
              <S.Dot />
              <S.InfoText>
                Please check your junk or spam mailbox if you do not receive
                your tracking information
              </S.InfoText>
            </S.ItemWrapper>
            <S.ItemWrapper>
              <S.Dot />
              <S.InfoText>
                On the night that your order ships you will receive an e-mail
                that contains FedEx tracking information.
              </S.InfoText>
            </S.ItemWrapper>
          </S.ListWrapper>
        </S.OrderDescriptionWrapper>
        <S.BottomTitle>Thank you for your order!</S.BottomTitle>
        <FormProvider {...methods}>
          <S.CheckBoxWrapper>
            <TermsCheckbox
              name="sendMeNotifications"
              title="Send me a notification every time the rate changes."
              titleFontSize="12"
              borderOpacity={0.1}
              iconColor="#40BF6A"
            />
          </S.CheckBoxWrapper>
        </FormProvider>
        <Pressable
          onPress={() => navigation.navigate("Home", { screen: "Home1" })}
        >
          <CustomButton>Home</CustomButton>
        </Pressable>
      </Container>
    </Layout>
  );
};

export default ConfirmationScreen;
