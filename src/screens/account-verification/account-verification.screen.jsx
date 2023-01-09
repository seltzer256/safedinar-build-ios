import React, { useState } from "react";
import { ScrollView } from "react-native";
import UploadCard from "../../components/upload-card/upload-card.component";
import * as S from "./account-verification.styles";
import CopySvg from "../../../assets/account/copy.svg";
import * as Clipboard from "expo-clipboard";
import withTopBar from "../with-top-bar/with-top-bar.component";
import CustomSnackbar from "../../components/custom-snackbar/custom-snackbar.component";

const INFORMATION_ITEMS = [
  {
    title: "Email: info@safedinar.com",
    description: `To email documents, simply take a picture on your smartphone and
        attach the image to the email`,
    copyText: "info@safedinar.com",
  },
  {
    title: "Text Message: 617-600-8723",
    description: `To text documents, simply take a picture on your smartphone and
        send a text with the picture included to the number above`,
    copyText: "617-600-8723",
  },
  {
    title: "Fax: 617-467-6400 or 877-528-8654",
    description: `Of you are elogible based on the amount of your order, your
        shipping fee will be fully covered by Safedinar`,
    copyText: "617-467-6400",
  },
];

export const AccountVerification = ({ hideInformation = false }) => {
  const [snackbarObj, setSnackbarObj] = useState(null);

  const copyToClipboard = async (copyText) => {
    setSnackbarObj(null);
    await Clipboard.setStringAsync(copyText).then(() => {
      setSnackbarObj({
        message: "Copied to clipboard",
        type: "success",
      });
    });
  };

  const onUpload = (result) => {
    console.log("result :>> ", result);
    setSnackbarObj({
      message: "File uploaded successfully",
      type: "success",
    });
  };

  return (
    <>
      <ScrollView>
        <S.TitleWrapper>
          <S.Title>Documents Verification</S.Title>
        </S.TitleWrapper>
        <S.Wrapper>
          <S.Description paddingBottom="35">
            In order to comply with Federal and state guidelines, we need to
            collect documents to verify your identity. We have a number of
            different ways for you to deliver these requirements to us.
          </S.Description>
          <UploadCard onUpload={onUpload} />
          {!hideInformation && (
            <>
              {INFORMATION_ITEMS.map(
                ({ title, description, copyText }, index) => (
                  <S.InformationWrapper
                    marginTop={index === 0 ? "36" : "16"}
                    hideBorder={index + 1 === INFORMATION_ITEMS.length}
                    key={`information-item-${index}`}
                  >
                    <S.TopWrapper>
                      <S.InformationTitle>{title}</S.InformationTitle>
                      <S.CopyButton onPress={() => copyToClipboard(copyText)}>
                        <CopySvg />
                      </S.CopyButton>
                    </S.TopWrapper>
                    <S.Description>{description}</S.Description>
                  </S.InformationWrapper>
                )
              )}
              <S.CardWrapper>
                <S.InformationTitle paddingBottom="8">
                  Documents
                </S.InformationTitle>
                <S.Description>
                  You don't have any documents associated with your account.
                </S.Description>
              </S.CardWrapper>
            </>
          )}
        </S.Wrapper>
      </ScrollView>
      <CustomSnackbar
        isVisible={!!snackbarObj}
        onDismiss={() => setSnackbarObj(null)}
        {...snackbarObj}
      />
    </>
  );
};

export default withTopBar("Documents Verification")(AccountVerification);
