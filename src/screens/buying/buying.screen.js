import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ScrollView } from "react-native";
import BuySellHeader from "../../components/buy-sell-header/buy-sell-header.component";
import BuySellTopBar from "../../components/buy-sell-top-bar/buy-sell-top-bar.component";
import BuyStepFour from "../../components/buy-steps/buy-step-four/buy-step-four.component";
import BuyStepOne from "../../components/buy-steps/buy-step-one/buy-step-one.component";
import BuyStepThree from "../../components/buy-steps/buy-step-three/buy-step-three.component";
import BuyStepTwo from "../../components/buy-steps/buy-step-two/buy-step-two.component";
import Layout from "../../components/Layout";
import BuyingProvider from "../../context/buying-provider";

const DENOMINATIONS = [
  { denomination: 100, slug: "one-hundred-dollar" },
  { denomination: 50, slug: "fifty-dollar" },
  { denomination: 20, slug: "twenty-dollar" },
  { denomination: 10, slug: "ten-dollar" },
  { denomination: 5, slug: "five-dollar" },
  { denomination: 1, slug: "one-dollar" },
];

const CURRENCY_QUALITIES = [
  {
    quality: "Uncirculated",
    value: "uncirculated",
  },
  {
    quality: "Circulated",
    value: "circulated",
  },
  {
    quality: "Proof",
    value: "proof",
  },
  {
    quality: "Mint",
    value: "mint",
  },
  {
    quality: "Brilliant Uncirculated",
    value: "brilliant_uncirculated",
  },
  {
    quality: "Special Mint",
    value: "special_mint",
  },
  {
    quality: "Special Proof",
    value: "special_proof",
  },
];

const SHIPPING_METHODS = [
  {
    method: "FedEx 2 Days (24$)",
    price: 24,
  },
  {
    method: "Overnight (37$)",
    price: 37,
  },
];

const BuyingScreen = () => {
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });
  // const { control, handleSubmit, errors } = methods;

  return (
    <Layout hideTopBar>
      <BuySellTopBar title="Buying" />
      <BuySellHeader />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 45,
        }}
      >
        <BuyingProvider>
          <FormProvider {...methods}>
            <BuyStepOne />
            <BuyStepTwo options={CURRENCY_QUALITIES} />
            <BuyStepThree denominations={DENOMINATIONS} />
            <BuyStepFour shippingMethods={SHIPPING_METHODS} />
          </FormProvider>
        </BuyingProvider>
      </ScrollView>
    </Layout>
  );
};

export default BuyingScreen;
