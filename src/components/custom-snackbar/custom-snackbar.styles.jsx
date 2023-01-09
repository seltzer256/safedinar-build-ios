import { Snackbar } from "react-native-paper";
import styled from "styled-components/native";
import Typography from "../typography/typography.component";

export const StyledSnackBar = styled(Snackbar)`
  z-index: 99;
  flex: 1;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: ${({ type, theme }) => getColor(type, theme)};
`;

export const Message = styled(Typography)`
  color: ${({ theme }) => theme.colors.surface};
  text-align: center;
  flex: 1;
`;

const getColor = (type, theme) => {
  switch (type) {
    case "error":
      return theme.colors.error;
    case "success":
      return theme.colors.success;
    default:
      return theme.colors.primary;
  }
};
