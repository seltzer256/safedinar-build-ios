import React from "react";
import * as S from "./custom-checkbox.styles";
import CheckIcon from "../../../assets/checkbox.svg";

const CustomCheckbox = ({ checked, onPress, borderOpacity, iconColor }) => {
  return (
    <S.CustomCheckBox
      onPress={onPress}
      opacity={borderOpacity}
      checked={checked}
    >
      {checked && (
        <S.IconWrapper iconColor={iconColor}>
          <CheckIcon />
        </S.IconWrapper>
      )}
    </S.CustomCheckBox>
  );
};

export default CustomCheckbox;
