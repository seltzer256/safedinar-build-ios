import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ScrollView } from "react-native";
import BuySellHeader from "../../components/buy-sell-header/buy-sell-header.component";
import BuySellTopBar from "../../components/buy-sell-top-bar/buy-sell-top-bar.component";
// import BuyStepThree from '../../components/buy-steps/buy-step-three/buy-step-three.component';
import Layout from "../../components/Layout";
import SellStepOne from "../../components/sell-steps/sell-step-one/sell-step-one.component";
import SellStepTwo from "../../components/sell-steps/sell-step-two/sell-step-two.component";

const SHIPPING_METHODS = [
  {
    method: "FedEx 2 Days",
    price: 24,
  },
  {
    method: "Overnight",
    price: 37,
  },
  {
    method: "Direct Deposit ",
    price: 15,
  },
];

const SellingScreen = () => {
  const methods = useForm();
  return (
    <Layout hideTopBar>
      <BuySellTopBar title="Selling" />
      <BuySellHeader />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 45,
        }}
      >
        <FormProvider {...methods}>
          <SellStepOne />
          <SellStepTwo shippingMethods={SHIPPING_METHODS} />
        </FormProvider>
      </ScrollView>
    </Layout>
  );
};

export default SellingScreen;
