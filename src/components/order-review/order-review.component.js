import React from "react";
import { Pressable, View } from "react-native";
import * as S from "./order-review.styles";
import Container from "../container/container.component";
import CustomButton from "../custom-button/custom-button.component";
import AmountDescription from "./amount-description/amount-description.component";
import OrderInfoCard from "./order-info-card/order-info-card.component";
import { useNavigation } from "@react-navigation/native";

const OrderReview = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <S.Title variant="title">Order #USA1651S</S.Title>
      <AmountDescription />
      <OrderInfoCard title="Amount in USD" subtitle="$524" />
      <OrderInfoCard
        title="Payment Method"
        subtitle="COD"
        description="Payment by secured check only will be collected at the time of delivery."
      />
      <OrderInfoCard
        title="Informartion"
        subtitle="John Doe"
        description="6675 Gerlach Drive, Austin Texas, 70001"
      />
      <OrderInfoCard title="Shipping Method" subtitle="FedEx 2 Day" />
      <S.ButtonsWrapper>
        <CustomButton
          onPress={() => navigation.navigate("ConfirmationScreen")}
          marginBottom={16}
        >
          Place Order
        </CustomButton>
        <CustomButton type="tertiary">Cancel</CustomButton>
      </S.ButtonsWrapper>
    </Container>
  );
};

export default OrderReview;
