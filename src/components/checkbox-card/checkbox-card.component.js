import React from "react";
import Typography from "../typography/typography.component";
import * as S from "./checkbox-card.styles";

const CheckboxCard = ({ description, checked, handleChecked }) => {
  return (
    <S.Wrapper>
      <S.CheckBtn onPress={handleChecked}>
        <S.Check>{checked && <S.SmallCheckCircle />}</S.Check>
      </S.CheckBtn>
      <Typography>{description}</Typography>
    </S.Wrapper>
  );
};

export default CheckboxCard;
