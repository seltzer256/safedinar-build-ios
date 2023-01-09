import React from 'react';
import {ScrollView} from 'react-native';
import CurrenciesGrid from '../../components/currencies-grid/currencies-grid.component';
import SearchBanner from '../../components/search-banner/search-banner.component';
import Layout from '../../components/Layout';

const MoneyScreen = ({navigation}) => {
  return (
    <Layout>
      <ScrollView style={{backgroundColor: '#f0f0f0'}}>
        <CurrenciesGrid />
        <SearchBanner navigation={navigation} />
      </ScrollView>
    </Layout>
  );
};

export default MoneyScreen;
