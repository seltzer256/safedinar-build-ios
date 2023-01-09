import React from "react";
import { ScrollView } from "react-native";
import BuySellTopBar from "../../components/buy-sell-top-bar/buy-sell-top-bar.component";
import Layout from "../../components/Layout";
import InformationForm from "../../components/information-form/information-form.component";

const CheckoutInfoScreen = () => {
  return (
    <Layout hideTopBar backgroundColor="#F0F0F0">
      <BuySellTopBar title="Information" />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 45,
        }}
      >
        <InformationForm />
      </ScrollView>
    </Layout>
  );
};

export default CheckoutInfoScreen;
