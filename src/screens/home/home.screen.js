import React from 'react';
import {ScrollView} from 'react-native';
import CurrenciesInfo from '../../components/currencies-info/currencies-info.component';
import CurrenciesSlider from '../../components/currencies-slider/currencies-slider.component';
import Layout from '../../components/Layout';
import NewsSlider from '../../components/news-slider/news-slider.component';

const HomeScreen = () => {
  return (
    <Layout showSearchBar>
      <ScrollView
        style={{flex: 1, backgroundColor: '#f0f0f0'}}
        showsVerticalScrollIndicator={false}>
        <CurrenciesSlider />
        <CurrenciesInfo />
        <NewsSlider />
      </ScrollView>
    </Layout>
  );
};

export default HomeScreen;
