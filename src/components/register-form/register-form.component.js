import React from "react";
import { ScrollView, Pressable } from "react-native";
import CustomTextField from "../custom-text-field/custom-text-field.component";
import * as S from "./register-form.styles";
import CustomButton from "../../components/custom-button/custom-button.component";
import TermsCheckbox from "../terms-checkbox/terms-checkbox.component";
import { FormProvider, useForm } from "react-hook-form";
import { emailRegexExpression } from "../../utils/utils";

const RegisterForm = ({ navigation }) => {
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  const { handleSubmit } = methods;

  const onSubmit = (data) => {
    console.log("data :>> ", data);
    navigation.navigate("Home");
  };
  return (
    <ScrollView
      style={{ height: "97%" }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 25,
      }}
    >
      <FormProvider {...methods}>
        <S.Title variant="title">Create Account</S.Title>
        <S.TextFieldWrapper>
          <CustomTextField
            placeholder={"First Name"}
            name="firstName"
            rules={{ required: true }}
          />
        </S.TextFieldWrapper>
        <S.TextFieldWrapper>
          <CustomTextField
            placeholder={"Last Name"}
            name="lastName"
            rules={{ required: true }}
          />
        </S.TextFieldWrapper>
        <S.TextFieldWrapper>
          <CustomTextField
            placeholder={"Email"}
            name="email"
            rules={{ required: true, pattern: emailRegexExpression }}
          />
        </S.TextFieldWrapper>
        <S.Separator />
        <S.TextFieldWrapper>
          <CustomTextField
            isPassword
            placeholder={"Password"}
            name="password"
            rules={{ required: true }}
          />
        </S.TextFieldWrapper>
        <S.TextFieldWrapper>
          <CustomTextField
            isPassword
            placeholder={"Re-enter Password"}
            name="confirmPassword"
            rules={{ required: true }}
          />
        </S.TextFieldWrapper>
        <TermsCheckbox
          name="termsAndConditions"
          title="Accept Terms & Conditions"
          titleVariant="subtitle"
          required
          borderOpacity={0.9}
          description={`By tapping I AGREE, you agree to the Terms & Conditions provided by SAFEDINAR, as well as the Terms & Conditions from our company. READ MORE`}
        />
        <S.ButtonWrapper>
          <Pressable onPress={handleSubmit(onSubmit)}>
            <CustomButton>Next</CustomButton>
          </Pressable>
        </S.ButtonWrapper>
      </FormProvider>
    </ScrollView>
  );
};

export default RegisterForm;
