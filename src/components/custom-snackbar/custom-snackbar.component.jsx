import React from "react";
import * as S from "./custom-snackbar.styles";

const CustomSnackbar = ({ isVisible, onDismiss, message, type }) => {
  const handleDismiss = () => {
    // console.log("handleDismiss");
    onDismiss && onDismiss();
  };

  return (
    <S.StyledSnackBar visible={isVisible} onDismiss={handleDismiss} type={type}>
      <S.Message>{message ?? ":O"}</S.Message>
    </S.StyledSnackBar>
  );
};

export default CustomSnackbar;
