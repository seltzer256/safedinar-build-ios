import React from "react";
import * as S from "./typography.styles";

const Typography = ({
  children,
  variant,
  paddingBottom,
  htmlColor,
  ...otherProps
}) => {
  return (
    <S.StyledText
      variant={variant}
      paddingBottom={paddingBottom}
      htmlColor={htmlColor}
      {...otherProps}
    >
      {children}
    </S.StyledText>
  );
};

export default Typography;
