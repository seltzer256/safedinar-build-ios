import React from "react";
import { ScrollView } from "react-native";
import CustomSelect from "../../components/custom-select/custom-select.component";
import withTopBar from "../with-top-bar/with-top-bar.component";
import * as S from "./exchange-rates.styles";
import { FormProvider, useForm } from "react-hook-form";
import CustomButtonComponent from "../../components/custom-button/custom-button.component";
import TermsCheckbox from "../../components/terms-checkbox/terms-checkbox.component";

const CURRENCIES = [
  {
    id: 1,
    name: "USD",
  },
  {
    id: 2,
    name: "EUR",
  },
  {
    id: 3,
    name: "GBP",
  },
];

const NOTIFICATION_PREFERENCES = [
  {
    id: 1,
    name: "Email",
  },
  {
    id: 2,
    name: "SMS",
  },
  {
    id: 3,
    name: "Push Notification",
  },
];

const ExchangeRates = () => {
  const methods = useForm();

  const { handleSubmit } = methods;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <ScrollView>
      <FormProvider {...methods}>
        <S.TitleWrapper>
          <S.Title>Exchange Rate</S.Title>
        </S.TitleWrapper>
        <S.Wrapper>
          <S.Description>
            SafeDinars Exchange Rate Alerts allows you to monitor for changes in
            the official and market exchange rates for all the currencies we
            offer. Additionally, you can monitor both our buy and Sell rates.
            When the rates changes, we’ll notify you.
          </S.Description>
          <S.Subtitle>Choose Currency</S.Subtitle>
          <CustomSelect
            options={CURRENCIES}
            itemLabelKey="name"
            itemValueKey="id"
            name="currency"
            placeholder="Select Currency"
          />
          <S.Subtitle>Notification Preference</S.Subtitle>
          <CustomSelect
            options={NOTIFICATION_PREFERENCES}
            itemLabelKey="name"
            itemValueKey="id"
            name="notificationPreference"
          />
          <S.TermsWrapper>
            <TermsCheckbox
              name="termsAndConditions"
              title="I agree to the Terms and Conditions"
              required
              titleVariant="title"
            />
          </S.TermsWrapper>
          <S.TermsWrapper>
            <TermsCheckbox
              name="sendMeEmails"
              title="Send notifications every time the rates change"
              titleVariant="title"
            />
          </S.TermsWrapper>
          <S.TermsWrapper marginBottom="26">
            <TermsCheckbox
              name="participateInResearch"
              title="Participate in research"
              titleVariant="title"
            />
          </S.TermsWrapper>
          <CustomButtonComponent onPress={handleSubmit(onSubmit)}>
            Save Changes
          </CustomButtonComponent>
        </S.Wrapper>
      </FormProvider>
    </ScrollView>
  );
};

export default withTopBar("Exchange Rate")(ExchangeRates);
