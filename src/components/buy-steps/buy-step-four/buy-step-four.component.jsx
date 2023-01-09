import React, { useContext } from "react";
import CustomButton from "../../custom-button/custom-button.component";
import StepInfo from "../../step-info/step-info.component";
import * as S from "./buy-step-four.styles";
import { useNavigation } from "@react-navigation/native";
import { BuyingContext } from "../../../context/buying-provider";
import CustomOptionGroup from "../../custom-option-group/custom-option-group.component";
import { useFormContext } from "react-hook-form";

const BuyStepFour = ({ shippingMethods }) => {
  const navigation = useNavigation();
  const { currentStep, validSteps, addValidStep, removeValidStep } =
    useContext(BuyingContext);
  const { handleSubmit } = useFormContext();
  if (!shippingMethods) return null;

  const handleSelectedOption = (value) => {
    if (value !== null) {
      addValidStep(4);
    } else {
      removeValidStep(4);
    }
  };

  const onSubmit = (data) => {
    console.log("data :>> ", data);
    navigation.navigate("Cart");
  };
  return (
    <S.Wrapper>
      <StepInfo
        step={4}
        description="Shipping Method"
        currentStep={currentStep}
        validSteps={validSteps}
      />
      <CustomOptionGroup
        options={shippingMethods}
        itemLabelKey="method"
        itemValueLey="price"
        name="shippingMethod"
        onChange={handleSelectedOption}
      />
      <S.ButtonWrapper onPress={handleSubmit(onSubmit)}>
        <CustomButton>Buy</CustomButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default BuyStepFour;
