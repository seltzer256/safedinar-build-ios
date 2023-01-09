import React from "react";
import * as S from "./change-password.styles";
import CustomTextField from "../custom-text-field/custom-text-field.component";
import { FormProvider, useForm } from "react-hook-form";
import CustomButtonComponent from "../custom-button/custom-button.component";

const ChangePassword = ({ visible, setVisible, setSnackbarObj }) => {
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  const { handleSubmit } = methods;

  if (!setVisible) return null;

  const hideModal = () => setVisible(false);

  const onSubmit = (data) => {
    console.log(data);
    setSnackbarObj({ type: "success", message: "Password has been changed" });
    hideModal();
  };

  return (
    <FormProvider {...methods}>
      <S.StyledModal visible={visible} onDismiss={hideModal}>
        <S.Wrapper>
          <S.TextFieldWrapper>
            <CustomTextField
              name="password"
              placeholder="Current Password"
              rules={{ required: true }}
              isPassword
              hasIcon
            />
          </S.TextFieldWrapper>
          <S.TextFieldWrapper>
            <CustomTextField
              name="newPassword"
              placeholder="New Password"
              isPassword
              rules={{ required: true }}
              hasIcon
            />
          </S.TextFieldWrapper>
          <S.TextFieldWrapper last>
            <CustomTextField
              name="confirmPassword"
              placeholder="Confirm New Password"
              rules={{
                required: true,
                validate: (value) =>
                  value === methods.watch("newPassword") ||
                  "Passwords do not match",
              }}
              hasIcon
              isPassword
            />
          </S.TextFieldWrapper>
          <CustomButtonComponent onPress={handleSubmit(onSubmit)}>
            Save
          </CustomButtonComponent>
        </S.Wrapper>
      </S.StyledModal>
    </FormProvider>
  );
};

export default ChangePassword;
