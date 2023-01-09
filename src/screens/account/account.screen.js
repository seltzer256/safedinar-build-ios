import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BuySellTopBar from "../../components/buy-sell-top-bar/buy-sell-top-bar.component";
import * as S from "./account.styles";
import UserIcon from "../../../assets/account/user.svg";
import ChartIcon from "../../../assets/account/chart.svg";
import GiftIcon from "../../../assets/account/gift.svg";
import MapMarkerIcon from "../../../assets/account/map-marker.svg";
import MoneyIcon from "../../../assets/account/money.svg";
import NewspaperIcon from "../../../assets/account/newspaper.svg";
import ReceiptIcon from "../../../assets/account/receipt.svg";
import UserWithTickIcon from "../../../assets/account/user-with-tick.svg";
import AccountItem from "../../components/account-item/account-item.component";
import { ScrollView } from "react-native";
import CustomButtonComponent from "../../components/custom-button/custom-button.component";

const ACCOUNT_ITEMS = {
  INFORMATION: {
    title: "Information",
    icon: <UserIcon />,
    description: "John Doe",
    url: "AccountInformationScreen",
  },
  ADDRESS: {
    title: "Address Book",
    icon: <MapMarkerIcon />,
    description: "1244 Beacon St, Brookline, MA 02446, EE. UU.",
    url: "AccountAddressScreen",
  },
  ORDERS: {
    title: "My Orders",
    icon: <MoneyIcon />,
    url: "AccountOrdersScreen",
  },
  VERIFICATION: {
    title: "Verification",
    icon: <UserWithTickIcon />,
    url: "AccountVerificationScreen",
  },
  REDEMPTIONS: {
    title: "My Redemptions",
    icon: <ReceiptIcon />,
    url: "AccountInformationScreen",
  },
  REWARDS: {
    title: "My Rewards",
    icon: <GiftIcon />,
    url: "AccountRewardsScreen",
  },
  EXCHANGE_RATES: {
    title: "Exchange Rates",
    icon: <ChartIcon />,
    url: "ExchangeRates",
  },
  NEWSLETTER: {
    title: "Newsletter",
    icon: <NewspaperIcon />,
    url: "AccountNewsletterScreen",
  },
};

const AccountHomeScreen = () => {
  const onLogout = () => {
    console.log("logout");
  };
  return (
    <SafeAreaView>
      <BuySellTopBar title="Account" hideBackBtn />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 45,
        }}
      >
        <S.Wrapper>
          <S.Title variant="title">Account</S.Title>
          {Object.values(ACCOUNT_ITEMS).map((item, index) => (
            <AccountItem
              key={`account-item-${index}`}
              IconComponent={item.icon}
              {...item}
            />
          ))}
          <CustomButtonComponent type="error" onPress={onLogout}>
            Log out
          </CustomButtonComponent>
        </S.Wrapper>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountHomeScreen;
