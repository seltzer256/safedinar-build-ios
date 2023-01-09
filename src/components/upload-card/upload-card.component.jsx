import React, { useState } from "react";
import CustomButtonComponent from "../custom-button/custom-button.component";
import * as S from "./upload-card.styles";
import * as DocumentPicker from "expo-document-picker";

const UploadCard = ({ onUpload }) => {
  const [photoIdFile, setPhotoIdFile] = useState(null);
  const [paymentFile, setPaymentFile] = useState(null);

  const pickDocument = async (type) => {
    let result = await DocumentPicker.getDocumentAsync({});
    switch (type) {
      case "photoId":
        setPhotoIdFile(result);
        break;
      case "payment":
        setPaymentFile(result);
        break;
    }
    onUpload && onUpload(result);
  };
  return (
    <S.Wrapper>
      <S.Title>Upload</S.Title>
      <S.Description paddingBottom="24">
        To upload documents, use the dorm below to upload documents right from
        your device
      </S.Description>
      <S.Subtitle paddingBottom="24">
        Documents required for Order #PXPXPX
      </S.Subtitle>
      <S.Title>Photo ID</S.Title>
      {photoIdFile && photoIdFile.name ? (
        <S.UploadedImage
          marginBottom="24"
          onPress={() => pickDocument("photoId")}
        >
          <S.ImageName numberOfLines={1} ellipsizeMode="middle">
            {photoIdFile.name}
          </S.ImageName>
        </S.UploadedImage>
      ) : (
        <CustomButtonComponent
          marginBottom="24"
          onPress={() => pickDocument("photoId")}
        >
          Upload File
        </CustomButtonComponent>
      )}
      <S.Title>Copy of Payment</S.Title>
      {paymentFile && paymentFile.name ? (
        <S.UploadedImage onPress={() => pickDocument("payment")}>
          <S.ImageName numberOfLines={1} ellipsizeMode="middle">
            {paymentFile.name}
          </S.ImageName>
        </S.UploadedImage>
      ) : (
        <CustomButtonComponent onPress={() => pickDocument("payment")}>
          Upload File
        </CustomButtonComponent>
      )}
    </S.Wrapper>
  );
};

export default UploadCard;
