import React, { useState } from "react";
import * as S from "./custom-option-group.styles";
import { Controller, useFormContext } from "react-hook-form";
import CheckboxCard from "../checkbox-card/checkbox-card.component";

const CustomOptionGroup = ({
  options,
  name,
  defaultValue,
  itemLabelKey,
  itemValueLey,
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const { control } = useFormContext();

  const handleChange = (value, controlledChange) => {
    // console.log("value :>> ", value);
    setSelectedOption(value);
    onChange && onChange(value);
    controlledChange && controlledChange(value);
  };
  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange } }) => (
        <S.OptionsWrapper>
          {options.map((option, index) => (
            <S.Option
              key={`option-${index}`}
              onPress={() => handleChange(option[itemValueLey], onChange)}
            >
              <CheckboxCard
                checked={selectedOption === option[itemValueLey]}
                description={option[itemLabelKey]}
                handleChecked={() =>
                  handleChange(option[itemValueLey], onChange)
                }
              />
            </S.Option>
          ))}
        </S.OptionsWrapper>
      )}
      name={name}
    />
  );
};

export default CustomOptionGroup;
