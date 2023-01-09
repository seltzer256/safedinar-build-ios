import React from "react";
import * as S from "./step-info.styles";

const StepInfo = ({ step, description, currentStep, validSteps }) => {
  const isCurrentStep = currentStep === step;
  // console.log("isCurrentStep :>> ", isCurrentStep ? step : "");

  const isValidStep = (step) => {
    return validSteps?.includes(step);
  };

  return (
    <S.Wrapper>
      <S.StepWrapper isCurrentStep={isCurrentStep}>
        {isValidStep(step) ? (
          <S.Icon />
        ) : (
          <S.Step variant="title" isCurrentStep={isCurrentStep}>
            {step}
          </S.Step>
        )}
      </S.StepWrapper>
      <S.Description variant="title">{description}</S.Description>
    </S.Wrapper>
  );
};

export default StepInfo;
