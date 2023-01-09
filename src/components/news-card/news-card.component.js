import React from "react";
import { spacing } from "../../utils/utils";
import * as S from "./news-card.styles";

const NewsCard = ({
  title,
  featuredImage,
  category,
  publicationDate,
  index,
}) => {
  return (
    <S.CardWrapper style={{ marginLeft: index === 0 ? spacing : 0 }}>
      <S.FeaturedImage source={featuredImage} resizeMode="cover" />
      <S.TextWrapper>
        {category && <S.Category variant="title">{category}</S.Category>}
        {title && (
          <S.NewsTitle numberOfLines={2} ellipsizeMode="tail" variant="title">
            {title}
          </S.NewsTitle>
        )}
        {publicationDate && (
          <S.PublicationDate variant="title">
            {publicationDate}
          </S.PublicationDate>
        )}
      </S.TextWrapper>
    </S.CardWrapper>
  );
};

export default NewsCard;
