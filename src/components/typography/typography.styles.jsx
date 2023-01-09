import styled, { css } from "styled-components/native";

export const StyledText = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
  ${({ paddingBottom }) =>
    paddingBottom &&
    `
    padding-bottom: ${paddingBottom}px;
  `}
  ${({ htmlColor }) => htmlColor && `color: ${htmlColor};`}
`;

StyledText.defaultProps = {
  variant: "body",
};

const defaultTextStyles = (theme) => css`
  font-family: ${theme.fonts.primary};
  color: black;
  flex-wrap: wrap;
  text-transform: none;
  margin: 0;
`;

const body = () => css`
  font-size: 16px;
`;

const button = () => css`
  font-size: 16px;
  color: white;
  ${"" /* line-height: 18px; */}
`;

const title = (theme) => css`
  font-family: ${theme.fonts.tertiary};
  font-size: 20px;
  ${"" /* line-height: 26px; */}
`;

const subtitle = (theme) => css`
  font-family: ${theme.fonts.secondary};
  font-size: 14px;
  ${"" /* line-height: 18px; */}
`;

const error = (theme) => css`
  color: ${theme.colors.error};
  font-family: ${theme.fonts.primary};
`;

const caption = (theme) => css`
  font-size: 16px;
  font-weight: 900;
`;

const label = (theme) => css`
  font-family: ${theme.fonts.primary};
  font-size: 12px;
  color: ${theme.colors.secondaryLight};
`;

const variants = {
  body,
  label,
  caption,
  error,
  title,
  button,
  subtitle,
};
