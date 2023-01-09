import { useRoute } from "@react-navigation/native";
import React from "react";
import { ScrollView } from "react-native";
import BuySellButtonsRow from "../../components/buy-sell-buttons-row/buy-sell-buttons-row.component";
import Container from "../../components/container/container.component";
import CurrencyBuySell from "../../components/currency-buy-sell/currency-buy-sell.component";
import CurrencyDescription from "../../components/currency-description/currency-description.component";
import CurrencyStats from "../../components/currency-stats/currency-stats.component";
import CurrencyTopBar from "../../components/currency-top-bar/currency-top-bar.component";
import CurrencyTopInfo from "../../components/currency-top-info/currency-top-info.component";
import Layout from "../../components/Layout";

const CurrencyScreen = () => {
  const route = useRoute();
  const { currency } = route.params;
  return (
    <Layout hideTopBar>
      <CurrencyTopBar {...currency} />
      <ScrollView
        style={{ flex: 1, backgroundColor: "#f0f0f0", marginBottom: -60 }}
        showsVerticalScrollIndicator={false}
      >
        <Container>
          <CurrencyTopInfo />
          <CurrencyBuySell />
          <CurrencyStats />
          <CurrencyDescription />
          <BuySellButtonsRow />
        </Container>
      </ScrollView>
    </Layout>
  );
};

export default CurrencyScreen;
