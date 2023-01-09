import React from "react";
import * as S from "./login.styles";
import LeftArrow from "../../../assets/arrow-left.svg";
import CustomTextField from "../custom-text-field/custom-text-field.component";
import { FormProvider, useForm } from "react-hook-form";
import CustomButtonComponent from "../custom-button/custom-button.component";
import { emailRegexExpression } from "../../utils/utils";
import { useNavigation } from "@react-navigation/native";

const Login = ({ setOpenLogin }) => {
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });
  const { handleSubmit } = methods;
  const navigation = useNavigation();

  const onSubmit = (data) => {
    console.log("data :>> ", data);
    navigation.navigate("Home");
  };
  return (
    <S.Wrapper>
      <S.BackButton onPress={() => setOpenLogin(false)}>
        <LeftArrow />
      </S.BackButton>
      <S.Title>Log into Safedinar</S.Title>
      <FormProvider {...methods}>
        <S.TextFieldWrapper>
          <CustomTextField
            placeholder={"Email"}
            name="email"
            rules={{ required: true, pattern: emailRegexExpression }}
          />
        </S.TextFieldWrapper>
        <S.TextFieldWrapper>
          <CustomTextField
            placeholder={"Password"}
            name="password"
            rules={{ required: true }}
            isPassword
          />
        </S.TextFieldWrapper>
        <CustomButtonComponent onPress={handleSubmit(onSubmit)}>
          Login{" "}
        </CustomButtonComponent>
      </FormProvider>
      <S.Hr />
    </S.Wrapper>
  );
};

export default Login;
