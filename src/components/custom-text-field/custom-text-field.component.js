import React, { useState } from "react";
import * as S from "./custom-text-field.styles";
import { Controller, useFormContext } from "react-hook-form";
import CloseIcon from "../../../assets/icons/close.svg";
import ViewIcon from "../../../assets/icons/view.svg";
import { getRHFErrorMessage } from "../../utils/utils";

const CustomTextField = ({
  placeholder,
  isPassword,
  keyboardType = "default",
  backgroundColor = "#ffffff",
  onChange,
  value,
  rules,
  editable = true,
  hideError = false,
  name,
  defaultValue,
  hasIcon,
  uncontrolled = false,
  ...props
}) => {
  const {
    control,
    setValue,
    setFocus,
    formState: { errors },
  } = useFormContext() ?? { formState: { errors: {} } };

  if (!control || uncontrolled) {
    return (
      <S.Wrapper>
        <S.CustomTextInput
          keyboardType={keyboardType}
          placeholder={placeholder}
          secureTextEntry={isPassword}
          style={{ backgroundColor: backgroundColor }}
          onChangeText={onChange}
          value={value}
          editable={editable}
          {...props}
        />
        <S.IconWrapper>
          {isPassword ? <S.ViewBtn /> : <S.CloseBtn />}
        </S.IconWrapper>
      </S.Wrapper>
    );
  }
  const [showPassword, setShowPassword] = useState(false);
  const error = getRHFErrorMessage(errors, name);

  const handleChange = (text, controllerChange) => {
    controllerChange(text);
    onChange && onChange(text);
  };

  const setEmptyValue = () => {
    setValue(name, "");
    setFocus(name, { shouldSelect: true });
  };

  const getWidth = () => {
    if (hasIcon && isPassword) {
      return "80%";
    }
    if (hasIcon || isPassword) {
      return "92%";
    }
    return "100%";
  };

  return (
    <S.Wrapper onError={error ? 1 : 0}>
      <Controller
        control={control}
        rules={rules}
        defaultValue={defaultValue}
        render={({ field: { onChange, onBlur, value } }) => (
          <S.CustomTextInput
            keyboardType={keyboardType}
            placeholder={placeholder}
            secureTextEntry={isPassword && !showPassword}
            onBlur={onBlur}
            onChangeText={(text) => handleChange(text, onChange)}
            value={value}
            editable={editable}
            width={getWidth()}
            {...props}
          />
        )}
        name={name}
      />
      {(hasIcon || isPassword) && (
        <S.IconWrapper>
          {hasIcon && (
            <S.CloseBtn onPress={setEmptyValue}>
              <CloseIcon />
            </S.CloseBtn>
          )}
          {isPassword && (
            <S.ViewBtn
              onPress={() => setShowPassword(!showPassword)}
              // onPressOut={() => setShowPassword(false)}
            >
              <ViewIcon stroke={showPassword && "#125F9B"} />
            </S.ViewBtn>
          )}
        </S.IconWrapper>
      )}
      {error && editable && !hideError && (
        <S.Error variant="error">{error ?? "Error."}</S.Error>
      )}
    </S.Wrapper>
  );
};

export default CustomTextField;
