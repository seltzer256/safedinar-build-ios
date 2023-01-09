import React, { useEffect, useState } from "react";

export const BuyingContext = React.createContext();

const BuyingProvider = (props) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [validSteps, setValidSteps] = useState([]);
  const minAmount = 1000;

  const addValidStep = (step) => {
    setValidSteps([...validSteps, step]);
  };

  const removeValidStep = (step) => {
    const newValidSteps = validSteps.filter((item) => item !== step);
    setValidSteps(newValidSteps);
  };

  // console.log("currentStep :>> ", currentStep);
  useEffect(() => {
    const incompleteSteps = [1, 2, 3, 4].filter(
      (item) => !validSteps.includes(item)
    );
    const lowestStep = Math.min(...incompleteSteps);
    if (lowestStep === Infinity) {
      setCurrentStep(1);
      return;
    }
    setCurrentStep(lowestStep);
  }, [validSteps]);

  return (
    <BuyingContext.Provider
      value={{
        currentStep,
        validSteps,
        minAmount,
        addValidStep,
        removeValidStep,
      }}
    >
      {props.children}
    </BuyingContext.Provider>
  );
};

export default BuyingProvider;
