import React from "react";
import { ScrollView } from "react-native";
import OrderReview from "../../components/order-review/order-review.component";
import withTopBar from "../with-top-bar/with-top-bar.component";

const OrderReviewScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 45,
      }}
    >
      <OrderReview />
    </ScrollView>
  );
};

export default withTopBar("Order Review")(OrderReviewScreen);
