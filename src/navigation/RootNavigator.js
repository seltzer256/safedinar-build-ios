import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoardingScreen from "../screens/on-boarding/on-boarding.screen";
import LogInScreen from "../screens/log-in/log-in.screen";
import AuthScreen from "../screens/auth/auth.screen";
import BottomTabsNavigator from "./BottomTabsNavigator";
import RegisterScreen from "../screens/register/register.screen";
import CheckoutInfoScreen from "../screens/checkoutInfo/checkout-info.screen";
import OrderReviewScreen from "../screens/order-review/order-review.screen";
import ConfirmationScreen from "../screens/confirmation/confirmation.screen";
import AccountInformationScreen from "../screens/account-information/account-information.screen";
import AccountAddressScreen from "../screens/account-address/account-address.screen";
import AccountOrdersScreen from "../screens/account-orders/account-orders.screen";
import OrderDetail from "../screens/order-detail/order-detail.screen";
import AccountRewardsScreen from "../screens/account-rewards/account-rewards.screen";
import AccountVerificationScreen from "../screens/account-verification/account-verification.screen";
import ExchangeRatesScreen from "../screens/exchange-rates/exchange-rates.screen";
import AccountNewsletterScreen from "../screens/account-newsletter/account-newsletter.screen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, gestureEnabled: false }}
      >
        {/* <Stack.Screen name="OnBoarding" component={OnBoardingScreen} /> */}
        {/* <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="LogIn" component={LogInScreen} /> */}
        <Stack.Screen name="Home" component={BottomTabsNavigator} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen
          name="CheckoutInfoScreen"
          component={CheckoutInfoScreen}
        />
        <Stack.Screen name="OrderReviewScreen" component={OrderReviewScreen} />
        <Stack.Screen
          name="ConfirmationScreen"
          component={ConfirmationScreen}
        />

        {/* Account Tabs */}
        <Stack.Screen
          name="AccountInformationScreen"
          component={AccountInformationScreen}
        />
        <Stack.Screen
          name="AccountAddressScreen"
          component={AccountAddressScreen}
        />
        <Stack.Screen
          name="AccountOrdersScreen"
          component={AccountOrdersScreen}
        />
        <Stack.Screen name="OrderDetailScreen" component={OrderDetail} />
        <Stack.Screen
          name="AccountRewardsScreen"
          component={AccountRewardsScreen}
        />
        <Stack.Screen
          name="AccountVerificationScreen"
          component={AccountVerificationScreen}
        />
        <Stack.Screen name="ExchangeRates" component={ExchangeRatesScreen} />
        <Stack.Screen
          name="AccountNewsletterScreen"
          component={AccountNewsletterScreen}
        />
        {/*  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
