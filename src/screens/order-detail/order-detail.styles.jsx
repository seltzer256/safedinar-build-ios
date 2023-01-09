import styled, { css } from "styled-components/native";
import Typography from "../../components/typography/typography.component";
import { LinearGradient } from "expo-linear-gradient";
import { DataTable } from "react-native-paper";
import customButtonComponent from "../../components/custom-button/custom-button.component";

export const Wrapper = styled.View`
  padding: 23px 19px 14px 19px;
`;

export const Title = styled(Typography)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.textContent};
`;

Title.defaultProps = {
  variant: "title",
};

export const SectionsWrapper = styled.View`
  padding: 38px 25px;
`;

export const SectionTitle = styled(Typography)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondary};
`;

SectionTitle.defaultProps = {
  variant: "subtitle",
};

export const SectionContent = styled(Typography)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textContentLight};
`;

export const StyledTableRow = styled(DataTable.Row)`
  border-bottom-width: 0;
  padding: 0;
  max-height: 30px;
`;

export const StyledTableCell = styled(DataTable.Cell)`
  /* height: 30px; */
  ${({ right }) =>
    right &&
    css`
      align-items: flex-end;
      flex-direction: column;
      justify-content: center;
    `}
`;

export const Hr = styled.View`
  height: 1px;
  background: black;
  opacity: 0.5;
  margin-top: 16px;
`;

export const StateWrapper = styled.View`
  background: rgba(211, 47, 47, 0.1);
  border-left-color: #c62828;
  border-left-width: 4px;
  padding: 9px 19px;
`;

export const StateTitle = styled(Typography)`
  font-size: 16px;
  color: #c62828;
  padding-bottom: 11px;
`;

StateTitle.defaultProps = {
  variant: "subtitle",
};

export const StateContent = styled(Typography)`
  font-size: 14px;
  padding-bottom: 16px;
  opacity: 0.6;
`;

export const StateList = styled(Typography)`
  padding-bottom: 8px;
  font-size: 14px;
`;

StateList.defaultProps = {
  variant: "subtitle",
};

export const StateLink = styled(Typography)`
  font-size: 14px;
  padding-bottom: 8px;
  text-decoration-line: underline;
`;

StateLink.defaultProps = {
  variant: "subtitle",
};

const getColor = (state) => {
  switch (state) {
    case "cancelled":
      return "#666666";
    case "complete":
      return "#4CAF50";
    case "in progress":
      return "#EF5350";
  }
};

export const StyledButton = styled(customButtonComponent)`
  margin-top: 16px;
  margin-bottom: 16px;
`;
