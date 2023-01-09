import React, { useEffect, useState } from "react";
import CustomTextField from "../custom-text-field/custom-text-field.component";
import * as S from "./account-address.styles";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import { phoneRegexExpression } from "../../utils/utils";
import CustomButtonComponent from "../custom-button/custom-button.component";
import TermsCheckbox from "../terms-checkbox/terms-checkbox.component";
import CustomSelect from "../custom-select/custom-select.component";
import { US_STATES } from "../../utils/us-states";

const AccountAddress = ({ addresses }) => {
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [addressesState, setAddressesState] = useState(
    addresses.map((a) => ({ ...a, is_valid: true }))
  );
  const { handleSubmit, watch } = methods;

  const onSubmit = (data) => {
    console.log(data);
    setSnackbarVisible(true);
  };
  const addAddress = () => {
    const newAddress = {
      address: "",
      city: "",
      state: "",
      zip: "",
      phone_number: "",
      is_default: false,
      is_shipping_default: false,
      is_valid: false,
    };
    setAddressesState([...addressesState, newAddress]);
  };
  const removeAddress = (index) => {
    const newAddresses = [...addressesState];
    newAddresses.splice(index, 1);
    setAddressesState(newAddresses);
  };

  return (
    <>
      <S.Wrapper>
        <S.Title variant="title">Address Book</S.Title>
        <FormProvider {...methods}>
          {addressesState.map((address, index) => (
            <React.Fragment key={`address-${index}`}>
              <S.AddressTitleWrapper>
                <S.AddressTitle variant="subtitle">
                  Address #{index + 1}
                </S.AddressTitle>
                {address.is_valid && <S.Icon />}
              </S.AddressTitleWrapper>
              <S.TextFieldWrapper>
                <CustomTextField
                  name={`addresses.${index}.addressLine1`}
                  placeholder="Address"
                  rules={{ required: true }}
                  hasIcon
                  defaultValue={address.address}
                />
              </S.TextFieldWrapper>
              <S.TextFieldWrapper>
                <CustomTextField
                  name={`addresses.${index}.city`}
                  placeholder="City"
                  rules={{ required: true }}
                  hasIcon
                  defaultValue={address.city}
                />
              </S.TextFieldWrapper>
              <S.TextFieldWrapper>
                <CustomSelect
                  name={`addresses.${index}.state`}
                  placeholder="Select State"
                  rules={{ required: true }}
                  // hasIcon
                  defaultValue={address.state}
                  options={US_STATES}
                  itemLabelKey="name"
                  itemValueKey="abbreviation"
                  searchable
                />
              </S.TextFieldWrapper>
              <S.TextFieldWrapper>
                <CustomTextField
                  name={`addresses.${index}.zipCode`}
                  placeholder="Zip Code"
                  rules={{ required: true }}
                  hasIcon
                  defaultValue={address.zip}
                />
              </S.TextFieldWrapper>
              <S.TextFieldWrapper last>
                <CustomTextField
                  name={`addresses.${index}.phoneNumber`}
                  placeholder="Add phone number"
                  rules={{ required: true, pattern: phoneRegexExpression }}
                  hasIcon
                  defaultValue={address.phone_number}
                />
              </S.TextFieldWrapper>
              <S.CheckBoxWrapper>
                <TermsCheckbox
                  title={"Use as Default Address"}
                  titleVariant="title"
                  name={`addresses.${index}.isDefaultAddress`}
                  defaultValue={address.is_default}
                  //   onChange={() => onChangeDefaultAddress(index)}
                />
              </S.CheckBoxWrapper>
              <S.CheckBoxWrapper>
                <TermsCheckbox
                  title={"Use as Default Shipping Address"}
                  titleColor="#444444"
                  // required
                  name={`addresses.${index}.isDefaultShippingAddress`}
                  defaultValue={address.is_shipping_default}
                />
              </S.CheckBoxWrapper>
              {!watch(`addresses.${index}.isDefaultAddress`) && (
                <S.ButtonWrapper>
                  <CustomButtonComponent
                    type="error"
                    onPress={() => removeAddress(index)}
                  >
                    Delete this address
                  </CustomButtonComponent>
                </S.ButtonWrapper>
              )}
              <S.Hr />
            </React.Fragment>
          ))}
          <S.ButtonWrapper>
            <CustomButtonComponent type="tertiary" onPress={addAddress}>
              + Add Address
            </CustomButtonComponent>
          </S.ButtonWrapper>
          <CustomButtonComponent onPress={handleSubmit(onSubmit)}>
            Save
          </CustomButtonComponent>
        </FormProvider>
      </S.Wrapper>
      <S.StyledSnackBar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        // action={{
        //   label: "Undo",
        //   onPress: () => {
        //     // Do something
        //   },
        // }}
      >
        <S.Message>Changes have been saved</S.Message>
      </S.StyledSnackBar>
    </>
  );
};

export default AccountAddress;
