import React from "react";
import * as S from "./sell-step-one.styles";
import StepInfo from "../../step-info/step-info.component";
import CustomTextField from "../../custom-text-field/custom-text-field.component";

const SellStepOne = () => {
  return (
    <S.Wrapper>
      <StepInfo step={1} description="Enter amount you want to sell" />
      <CustomTextField
        keyboardType="number-pad"
        backgroundColor="#F0F0F0"
        placeholder="Amount"
        name="amount"
      />
      <S.ValidationWrapper>
        <S.Icon />
        <S.Description>Correct Amount</S.Description>
      </S.ValidationWrapper>
    </S.Wrapper>
  );
};

export default SellStepOne;
