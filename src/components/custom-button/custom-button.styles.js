import styled from "styled-components/native";
import { Button } from "react-native-paper";

export const Wrapper = styled(Button).attrs(() => ({
  labelStyle: {
    fontFamily: "DMSans_700Bold",
    paddingTop: 18,
    marginBottom: 14,
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0,
    marginVertical: 0,
    marginHorizontal: 0,
    // color: "#A49D95",
  },
}))`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  margin-left: auto;
  /* padding: 5px 0; */
  z-index: 0;
  width: ${({ width }) => width};
  ${({ marginBottom }) =>
    marginBottom &&
    `
    margin-bottom: ${marginBottom}px;
  `}
  ${({ type, theme }) => getTypeStyle(type, theme)};
`;

const getTypeStyle = (type, theme) => {
  switch (type) {
    case "primary":
      return `
        background-color: ${theme.colors.primary};`;

    case "secondary":
      return `
        background-color: ${theme.colors.background};`;
    case "tertiary":
      return `
        background-color: transparent
        border: 1px solid ${theme.colors.primary}
        `;
    case "error":
      return `
            background-color: transparent
            border: 1px solid ${theme.colors.error}
            `;
  }
};
