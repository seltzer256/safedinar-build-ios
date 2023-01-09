import React from "react";
import { Pressable } from "react-native";
import * as S from "./information-form.styles";
import Container from "../container/container.component";
import CustomTextField from "../custom-text-field/custom-text-field.component";
import CustomButton from "../custom-button/custom-button.component";
import { useNavigation } from "@react-navigation/native";

const InformationForm = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <S.Title variant="title">Information</S.Title>
      <S.TextFieldWrapper>
        <CustomTextField backgroundColor="#f0f0f0" placeholder={"First Name"} />
      </S.TextFieldWrapper>
      <S.TextFieldWrapper>
        <CustomTextField backgroundColor="#f0f0f0" placeholder={"Last Name"} />
      </S.TextFieldWrapper>
      <S.TextFieldWrapper>
        <CustomTextField backgroundColor="#f0f0f0" placeholder={"Email"} />
      </S.TextFieldWrapper>
      <S.Separator />
      <S.TextFieldWrapper>
        <CustomTextField backgroundColor="#f0f0f0" placeholder={"Address"} />
      </S.TextFieldWrapper>
      <S.TextFieldWrapper>
        <CustomTextField backgroundColor="#f0f0f0" placeholder={"City"} />
      </S.TextFieldWrapper>
      <S.TextFieldWrapper>
        <CustomTextField backgroundColor="#f0f0f0" placeholder={"State"} />
      </S.TextFieldWrapper>
      <S.TextFieldWrapper>
        <CustomTextField backgroundColor="#f0f0f0" placeholder={"Zip Code"} />
      </S.TextFieldWrapper>
      <S.Separator />
      <S.TextFieldWrapper>
        <CustomTextField backgroundColor="#f0f0f0" placeholder={"SSN"} />
      </S.TextFieldWrapper>
      <S.TextFieldWrapper>
        <CustomTextField backgroundColor="#f0f0f0" placeholder={"Occupation"} />
      </S.TextFieldWrapper>
      <S.ButtonWrapper>
        <S.ButtonWrapper
          onPress={() => navigation.navigate("OrderReviewScreen")}
        >
          <CustomButton>Continue</CustomButton>
        </S.ButtonWrapper>
        <Pressable>
          <CustomButton type="tertiary">Cancel</CustomButton>
        </Pressable>
      </S.ButtonWrapper>
    </Container>
  );
};

export default InformationForm;
