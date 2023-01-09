import React, { useContext } from "react";
import { BuyingContext } from "../../../context/buying-provider";
import CustomSelect from "../../custom-select/custom-select.component";
import StepInfo from "../../step-info/step-info.component";
import * as S from "./buy-step-two.styles";

const BuyStepTwo = ({ options }) => {
  const { currentStep, validSteps, addValidStep, removeValidStep } =
    useContext(BuyingContext);
  const handleChange = (value) => {
    if (value) {
      addValidStep(2);
      return;
    }
    removeValidStep(2);
  };

  return (
    <S.Wrapper>
      <StepInfo
        step={2}
        description="Select Quality"
        currentStep={currentStep}
        validSteps={validSteps}
      />
      <CustomSelect
        options={options}
        itemValueKey="value"
        itemLabelKey="quality"
        onChange={handleChange}
        name="quality"
      />
    </S.Wrapper>
  );
};

export default BuyStepTwo;
