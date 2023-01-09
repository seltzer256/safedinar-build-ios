import React from "react";
import { ScrollView } from "react-native";
import RewardCard from "../../components/reward-card/reward-card.component";
import Typography from "../../components/typography/typography.component";
import withTopBar from "../with-top-bar/with-top-bar.component";
import * as S from "./account-rewards.styles";

const REWARDS = [
  {
    title: "Free Shipping",
    description:
      "Of you are elogible based on the amount of your order, your shipping fee will be fully covered by Safedinar",
  },
  {
    title: "Free Saturday Shipping",
    description:
      "If Saturday delivery is available in your area, your shipping fee and the additional Saturday charge will be fully covered by SafeDinar. Saturday service is a limited priority service offered by FedEx. Once you place your order, we will contact FedEx for you and then contact you to confirm availability.",
  },
  {
    title: "FreePriority Shipping Upgrade",
    description:
      "If Priority FedEx delivery is available in your area, your shipping fee and the additional Priority charge will be fully covered by SafeDinar. The FedEx priority service differs everywhere. Once you place your order, we will contact FedEx for you confirm the guaranteed delivery time for a Priority delivery.",
  },
  {
    title: "Denomiation Upgrade",
    description:
      "If a smaller denomination of note is currently available, and if you are interested, we can substitute the smaller denomination in your order. Typically, smaller denominations come at a higher rate per million, but that rate would be discounted to allow for the substitution without a change in your order total.",
  },
  {
    title: "Redemption Buyback Preference",
    description:
      "If you want to sell you Dinar back to SafeDinar, you will need a return authorization number. Return authorization numbers will be issued first to customers who are eligible for this reward.",
  },
  {
    title: "Higher Order Limits",
    description:
      "While there is no order limit, there is usually a limit in the amount of Dinar that can be shipped in a single installment. If eligible for this reward, we can work with the shipping department to increase the amount allowed in a shipment to you.",
  },
  {
    title: "Reserve Currency Blocks",
    description:
      "Periodically, we have smaller denominations or an overflow of a single denomination of note. This reward will allow us to offer you blocks of currency that are not offered on our homepage to customers browsing the site. The blocks could be of denominations that are hard to obtain, or of denominations at a discounted rate.",
  },
  {
    title: "Guarenteed Lowest Price",
    description:
      "We will match the posted price of any competitor. If you find a better price with another company, please inform us where you found the price so we can confirm and make arrangements for your order.",
  },
  {
    title: "Order Discount",
    description:
      "Based on your reward level, a discount may be applied to your order. During checkout, a percentage based on the US Dollar amount would be deducted from your order total.",
  },
];

const AccountRewards = () => {
  return (
    <ScrollView>
      <S.Wrapper>
        <S.TopWrapper>
          <S.Title>Rewards</S.Title>
          <S.TestBtn>
            <Typography htmlColor="white">Test</Typography>
          </S.TestBtn>
        </S.TopWrapper>
        <S.Description>
          Your purchase history qualifies you for the following rewards on
          subsequent orders:
        </S.Description>
        {REWARDS.map((reward, index) => (
          <S.CardWrapper key={`reward-${index}`}>
            <RewardCard {...reward} />
          </S.CardWrapper>
        ))}
      </S.Wrapper>
    </ScrollView>
  );
};

export default withTopBar("Rewards")(AccountRewards);
