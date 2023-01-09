import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/home.screen";
import HomeIconGray from "../../assets/icons/tabs/home-gray.svg";
import HomeIconBlue from "../../assets/icons/tabs/home.svg";
import MoneyIconGray from "../../assets/icons/tabs/money.svg";
import MoneyIconBlue from "../../assets/icons/tabs/money-blue.svg";
import SearchIconGray from "../../assets/icons/tabs/search.svg";
import SearchIconBlue from "../../assets/icons/tabs/search-blue.svg";
import CartIconGray from "../../assets/icons/tabs/cart.svg";
import CartIconBlue from "../../assets/icons/tabs/cart-blue.svg";
import UserIconGray from "../../assets/icons/tabs/user.svg";
import UserIconBlue from "../../assets/icons/tabs/user-blue.svg";
import SearchScreen from "../screens/search/search.screen";
import CartScreen from "../screens/cart/cart.screen";
import CurrenciesNavigator from "./CurrenciesNavigator";
import * as S from "./styles/bottomTabsNavigator.styles";
// import AccountNavigator from "./AccountNavigator";
import AccountHomeScreen from "../screens/account/account.screen";

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "relative",
          display: "flex",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
      }}
    >
      <Tab.Screen
        name={"Home1"}
        options={{
          tabBarIcon: ({ focused }) => (
            <S.OptionWrapper>
              {focused ? (
                <>
                  <S.IndicatorWrapper>
                    <S.Indicator />
                  </S.IndicatorWrapper>
                  <HomeIconBlue />
                </>
              ) : (
                <HomeIconGray />
              )}
            </S.OptionWrapper>
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name={"CurrenciesTab"}
        options={{
          tabBarIcon: ({ focused }) => (
            <S.OptionWrapper>
              {focused ? (
                <>
                  <S.IndicatorWrapper>
                    <S.Indicator />
                  </S.IndicatorWrapper>
                  <MoneyIconBlue />
                </>
              ) : (
                <MoneyIconGray />
              )}
            </S.OptionWrapper>
          ),
        }}
        component={CurrenciesNavigator}
      />
      <Tab.Screen
        name={"Search"}
        options={{
          tabBarIcon: ({ focused }) => (
            <S.OptionWrapper>
              {focused ? (
                <>
                  <S.IndicatorWrapper>
                    <S.Indicator />
                  </S.IndicatorWrapper>
                  <SearchIconBlue />
                </>
              ) : (
                <SearchIconGray />
              )}
            </S.OptionWrapper>
          ),
        }}
        component={SearchScreen}
      />
      <Tab.Screen
        name={"Cart"}
        options={{
          tabBarIcon: ({ focused }) => (
            <S.OptionWrapper>
              {focused ? (
                <>
                  <S.IndicatorWrapper>
                    <S.Indicator />
                  </S.IndicatorWrapper>
                  <CartIconBlue />
                </>
              ) : (
                <CartIconGray />
              )}
            </S.OptionWrapper>
          ),
        }}
        component={CartScreen}
      />
      <Tab.Screen
        name={"Account"}
        options={{
          tabBarIcon: ({ focused }) => (
            <S.OptionWrapper>
              {focused ? (
                <>
                  <S.IndicatorWrapper>
                    <S.Indicator />
                  </S.IndicatorWrapper>
                  <UserIconBlue />
                </>
              ) : (
                <UserIconGray />
              )}
            </S.OptionWrapper>
          ),
        }}
        component={AccountHomeScreen}
      />
    </Tab.Navigator>
  );
};
export default BottomTabsNavigator;
