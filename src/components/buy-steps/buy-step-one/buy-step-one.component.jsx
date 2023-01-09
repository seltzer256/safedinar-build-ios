import React, { useContext } from "react";
// import { useFormContext } from "react-hook-form";
import { BuyingContext } from "../../../context/buying-provider";
import CustomTextField from "../../custom-text-field/custom-text-field.component";
import StepInfo from "../../step-info/step-info.component";
import * as S from "./buy-step-one.styles";

const BuyStepOne = () => {
  const { currentStep, validSteps, addValidStep, removeValidStep, minAmount } =
    useContext(BuyingContext);
  // const { setValue } = useFormContext();

  const handleChangeAmount = (amount) => {
    // setValue("amount", amount);

    if (+amount >= minAmount ?? 0) {
      addValidStep(1);
      return;
    }
    removeValidStep(1);
    // setValue("amount", amount);
  };

  return (
    <S.Wrapper>
      <StepInfo
        step={1}
        description="Enter amount you want to buy"
        currentStep={currentStep}
        validSteps={validSteps}
      />
      <CustomTextField
        keyboardType="number-pad"
        backgroundColor="#F0F0F0"
        onChange={handleChangeAmount}
        placeholder="Amount"
        rules={{
          required: true,
          min: minAmount,
        }}
        hideError
        name="amount"
      />
      <S.ValidationWrapper>
        <S.Icon />
        <S.Description>Correct Amount</S.Description>
      </S.ValidationWrapper>
    </S.Wrapper>
  );
};

export default BuyStepOne;
