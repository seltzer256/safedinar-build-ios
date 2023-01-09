import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import * as S from "./news-slider.styles";
import NewsImage from "../../../assets/news/news.jpg";
import NewsCard from "../news-card/news-card.component";

const NewsSlider = () => {
  const news = [
    {
      title: "Inverse ETFs Soar as Stocks and Bonds...",
      category: "ETF Trends",
      publicationDate: "1 day ago",
      featuredImage: NewsImage,
    },
    {
      title: "Inverse ETFs Soar as Stocks and Bonds...",
      category: "ETF Trends",
      publicationDate: "1 day ago",
      featuredImage: NewsImage,
    },
    {
      title: "Inverse ETFs Soar as Stocks and Bonds...",
      category: "ETF Trends",
      publicationDate: "1 day ago",
      featuredImage: NewsImage,
    },
    {
      title: "Inverse ETFs Soar as Stocks and Bonds...",
      category: "ETF Trends",
      publicationDate: "1 day ago",
      featuredImage: NewsImage,
    },
    {
      title: "Inverse ETFs Soar as Stocks and Bonds...",
      category: "ETF Trends",
      publicationDate: "1 day ago",
      featuredImage: NewsImage,
    },
    {
      title: "Inverse ETFs Soar as Stocks and Bonds...",
      category: "ETF Trends",
      publicationDate: "1 day ago",
      featuredImage: NewsImage,
    },
  ];
  return (
    <S.TopWrapper>
      <S.Title variant="title">Market News</S.Title>
      <S.SliderWrapper>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {news.map((post, index) => (
            <NewsCard key={`post-${index}`} {...post} index={index} />
          ))}
        </ScrollView>
      </S.SliderWrapper>
    </S.TopWrapper>
  );
};

export default NewsSlider;
