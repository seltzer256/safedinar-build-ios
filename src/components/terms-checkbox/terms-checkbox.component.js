import React, { useState } from "react";
import * as S from "./terms-checkbox.styles";
import { useFormContext, Controller } from "react-hook-form";
import { getRHFErrorMessage } from "../../utils/utils";
import CustomCheckbox from "../custom-checkbox/custom-checkbox.component";

const TermsCheckbox = ({
  title,
  description,
  titleVariant,
  titleColor,
  titleFontSize,
  required,
  name,
  defaultValue = false,
  onChange,
  borderOpacity,
  iconColor,
}) => {
  const [isSelected, setSelection] = useState(defaultValue);

  const {
    control,
    formState: { errors },
  } = useFormContext();

  const error = getRHFErrorMessage(errors, name);

  const onValueChange = (newValue, controlledChange) => {
    setSelection(newValue);
    controlledChange && controlledChange(newValue);
    onChange && onChange(newValue);
  };

  return (
    <S.Wrapper>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={{ required }}
        render={({ field: { onChange } }) => (
          <S.CheckBoxWrapper
            onPress={() => onValueChange(!isSelected, onChange)}
          >
            <CustomCheckbox
              checked={isSelected}
              onPress={() => onValueChange(!isSelected, onChange)}
              borderOpacity={borderOpacity}
              iconColor={iconColor}
            />
            {title && (
              <S.TermsTitle
                variant={titleVariant}
                color={titleColor}
                titleFontSize={titleFontSize}
              >
                {title}
              </S.TermsTitle>
            )}
          </S.CheckBoxWrapper>
        )}
      />
      {description && <S.TermsDescription>{description}</S.TermsDescription>}
      {error && (
        <S.Error variant="error">{error ?? "This is required."}</S.Error>
      )}
    </S.Wrapper>
  );
};

export default TermsCheckbox;
