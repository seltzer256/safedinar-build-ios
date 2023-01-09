import React, { useState } from "react";
import CartInfo from "../../components/cart-info/cart-info.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import TermsCheckbox from "../../components/terms-checkbox/terms-checkbox.component";
import * as S from "./cart.styles";
import { useNavigation } from "@react-navigation/native";
import { FormProvider, useForm } from "react-hook-form";
import withTopBar from "../with-top-bar/with-top-bar.component";
import { AccountVerification } from "../account-verification/account-verification.screen";

const CartScreen = () => {
  const methods = useForm();
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const navigation = useNavigation();

  const { handleSubmit } = methods;
  const data = {
    total: 5252,
    items: [
      {
        title: "Iraqui Dinar",
        description: "$50.000,00",
        value: 5000,
      },
      {
        title: "Iraqui Dinar",
        description: "$50.000,00",
        value: 5000,
      },
      {
        title: "Iraqui Dinar",
        description: "$50.000,00",
        value: 5000,
      },
      {
        title: "Iraqui Dinar",
        description: "$50.000,00",
        value: 5000,
      },
      {
        title: "Iraqui Dinar",
        description: "$50.000,00",
        value: 5000,
      },
      {
        title: "Iraqui Dinar",
        description: "$50.000,00",
        value: 5000,
      },
    ],
  };

  const onSubmit = (data) => {
    // console.log(data);
    if (submittedSuccess) {
      navigation.navigate("OrderReviewScreen");
      return;
    }
    setSubmittedSuccess(true);
  };

  const onCancel = () => {
    if (!submittedSuccess) {
      navigation.navigate("BuyingScreen");
      return;
    }
    setSubmittedSuccess(false);
  };

  return (
    <S.Scroll showsVerticalScrollIndicator={false}>
      {submittedSuccess ? (
        <AccountVerification hideInformation />
      ) : (
        <S.Wrapper>
          <CartInfo cart={data} />
          <FormProvider {...methods}>
            <S.TermsWrapper>
              <TermsCheckbox
                name="termsAndConditions"
                title="Accept Terms & Conditions"
                titleVariant="subtitle"
                description={`By tapping I AGREE, you agree to the Terms & Conditions provided by SAFEDINAR, as well the Terms & Conditions from our company. READ MORE`}
                borderOpacity={0.1}
              />
            </S.TermsWrapper>
          </FormProvider>
        </S.Wrapper>
      )}
      <S.ButtonWrapper>
        <CustomButton onPress={handleSubmit(onSubmit)} marginBottom="16">
          Proceed - ${data.total}
        </CustomButton>
        <CustomButton type="tertiary" onPress={onCancel}>
          Cancel
        </CustomButton>
      </S.ButtonWrapper>
    </S.Scroll>
  );
};

export default withTopBar("Cart")(CartScreen);
