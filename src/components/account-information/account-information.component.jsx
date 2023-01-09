import React from "react";
import CustomTextField from "../custom-text-field/custom-text-field.component";
import * as S from "./account-information.styles";
import { FormProvider, useForm } from "react-hook-form";
import { emailRegexExpression, phoneRegexExpression } from "../../utils/utils";
import CustomButtonComponent from "../custom-button/custom-button.component";
import { Pressable } from "react-native";
import TermsCheckbox from "../terms-checkbox/terms-checkbox.component";

const AccountInformation = ({ setChangePasswordVisible, setSnackbarObj }) => {
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  const { handleSubmit } = methods;

  const onSubmit = (data) => {
    console.log(data);
    // setSnackbarObj({ type: "success", message: "Changes has been saved" });
    setSnackbarObj({ type: "error", message: "Something was wrong" });
  };

  return (
    <S.Wrapper>
      <S.Title variant="title">Account Information</S.Title>
      <FormProvider {...methods}>
        <S.TextFieldWrapper>
          <CustomTextField
            name="firstName"
            placeholder="First Name"
            rules={{ required: true }}
            hasIcon
          />
        </S.TextFieldWrapper>
        <S.TextFieldWrapper>
          <CustomTextField
            name="lastName"
            placeholder="Last Name"
            rules={{ required: true }}
            hasIcon
          />
        </S.TextFieldWrapper>
        <S.TextFieldWrapper>
          <CustomTextField
            name="email"
            placeholder="Email"
            rules={{ required: true, pattern: emailRegexExpression }}
            hasIcon
          />
        </S.TextFieldWrapper>
        <S.TextFieldWrapper last>
          <CustomTextField
            name="homePhone"
            placeholder="Home Phone"
            rules={{ required: true, pattern: phoneRegexExpression }}
            hasIcon
          />
        </S.TextFieldWrapper>
        <S.Hr />
        <S.TextFieldWrapper>
          <CustomTextField
            name="ssn"
            placeholder="SSN"
            rules={{ required: true }}
            hasIcon
          />
        </S.TextFieldWrapper>
        <S.TextFieldWrapper last>
          <CustomTextField
            name="occupation"
            placeholder="Occupation"
            rules={{ required: true }}
            hasIcon
          />
        </S.TextFieldWrapper>
        <S.Hr />
        <S.TextFieldWrapper last>
          <CustomTextField
            placeholder="Password"
            value="● ● ● ● ● ● ● ● ●"
            backgroundColor="rgba(0,0,0,0)"
            editable={false}
            // name="password"
            uncontrolled
          />
        </S.TextFieldWrapper>
        <Pressable onPress={() => setChangePasswordVisible(true)}>
          <S.ChangePasswordText variant="subtitle">
            Change Password
          </S.ChangePasswordText>
        </Pressable>

        <S.Hr />
        <S.Title variant="title" bottom>
          Text Message Notifications
        </S.Title>
        <S.Description>
          Check the box below and your mobile phone number if you would like to
          receive your order updates via text message (In addition to the email
          update). You may opt out at any time by unchecking below.
        </S.Description>
        <S.CheckBoxWrapper>
          <TermsCheckbox
            title={"Subscribe to Text Updates"}
            titleVariant="title"
            // required
            name="subscribeToTextUpdates"
          />
        </S.CheckBoxWrapper>
        <S.TextFieldWrapper>
          <CustomTextField
            name="phoneNumber"
            placeholder="Add phone number"
            rules={{ pattern: phoneRegexExpression }}
            hasIcon
          />
        </S.TextFieldWrapper>
        <CustomButtonComponent onPress={handleSubmit(onSubmit)}>
          Save
        </CustomButtonComponent>
      </FormProvider>
    </S.Wrapper>
  );
};

export default AccountInformation;
