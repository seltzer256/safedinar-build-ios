import React, { useContext, useEffect } from "react";
import { useFormContext, useWatch, useFormState } from "react-hook-form";
import { BuyingContext } from "../../../context/buying-provider";
import DenominationNotesCard from "../../denomination-notes-card/denomination-notes-card.component";
import StepInfo from "../../step-info/step-info.component";
import * as S from "./buy-step-three.styles";

const BuyStepThree = ({ denominations }) => {
  const { currentStep, validSteps, minAmount, addValidStep, removeValidStep } =
    useContext(BuyingContext);
  const {
    formState: { errors },
  } = useFormContext();
  // const { errors } = useFormState();
  const { denominations: denominationErrors } = errors;
  const denominationValues = useWatch({
    name: "denominations",
  });

  useEffect(() => {
    const validDenominations = Object.values(denominationValues ?? {}).filter(
      (value) => value
    );
    if (validDenominations.length === 0) {
      removeValidStep(3);
      return;
    }
    if (denominationErrors) {
      removeValidStep(3);
      return;
    }
    addValidStep(3);
  }, [denominationValues, denominationErrors]);

  return (
    <S.Wrapper>
      <StepInfo
        step={3}
        description={"Select note denomination \n& number of notes."}
        currentStep={currentStep}
        validSteps={validSteps}
      />
      {denominations?.map(({ denomination, slug }, index) => (
        <DenominationNotesCard
          key={`denomination-card-${index}`}
          denomination={denomination}
          slug={slug}
          minAmount={minAmount}
        />
      ))}
    </S.Wrapper>
  );
};

export default BuyStepThree;
