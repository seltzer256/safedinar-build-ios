import React from "react";
import CustomButton from "../../custom-button/custom-button.component";
import StepInfo from "../../step-info/step-info.component";
import * as S from "./sell-step-two.styles";
import { useNavigation } from "@react-navigation/native";
import CustomOptionGroup from "../../custom-option-group/custom-option-group.component";

const SellStepTwo = ({ shippingMethods }) => {
  const navigation = useNavigation();

  const handleSelectedOption = (index) => {
    // if (index !== null) {
    //   addValidStep(4);
    // } else {
    //   removeValidStep(4);
    // }
  };

  return (
    <S.Wrapper>
      <StepInfo step={2} description="Shipping Method" />
      <CustomOptionGroup
        options={shippingMethods}
        itemLabelKey="method"
        itemValueLey="price"
        name="shippingMethod"
        onChange={handleSelectedOption}
      />
      <S.ButtonWrapper onPress={() => navigation.navigate("Cart")}>
        <CustomButton>Sell</CustomButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default SellStepTwo;
