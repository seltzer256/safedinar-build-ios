import React from "react";
import * as S from "./custom-button.styles";
import { withTheme } from "react-native-paper";

const CustomButton = ({
  children,
  color = "white",
  onPress,
  fullwidth,
  width = "100%",
  type = "primary",
  variation,
  theme,
  marginBottom,
  ...otherProps
}) => {
  const getTypeColor = () => {
    switch (type) {
      case "primary":
        return "white";
      case "secondary":
      case "tertiary":
        return theme.colors.primary;
      case "error":
        return theme.colors.error;
    }
  };

  return (
    <S.Wrapper
      fullwidth={fullwidth}
      marginBottom={marginBottom}
      width={width}
      type={type}
      raised
      // style={{
      //   width: 100,
      // }}
      onPress={onPress}
      color={getTypeColor()}
      uppercase={false}
      {...otherProps}
    >
      {children}
    </S.Wrapper>
  );
};

export default withTheme(CustomButton);
