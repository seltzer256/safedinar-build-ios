import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MoneyScreen from '../screens/money/money.screen';
import CurrencyScreen from '../screens/currency/currency.screen';
import BuyingScreen from '../screens/buying/buying.screen';
import SellingScreen from '../screens/selling/selling.screen';

const Stack = createNativeStackNavigator();

const CurrenciesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="CurrenciesScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="CurrenciesScreen" component={MoneyScreen} />
      <Stack.Screen name="CurrencyScreen" component={CurrencyScreen} />
      <Stack.Screen name="BuyingScreen" component={BuyingScreen} />
      <Stack.Screen name="SellingScreen" component={SellingScreen} />
    </Stack.Navigator>
  );
};

export default CurrenciesNavigator;
