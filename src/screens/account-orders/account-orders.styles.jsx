import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import Typography from "../../components/typography/typography.component";
import TrashSvg from "../../../assets/account/trash.svg";

export const TopWrapper = styled.View`
  padding: 16px 26px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const TopTitle = styled(Typography)`
  font-size: 20px;
  letter-spacing: -0.078px;

  color: ${({ theme }) => theme.colors.textContent};
`;

export const TrashIcon = styled(TrashSvg)``;

export const TableHead = styled.View`
  flex-direction: row;
  background: ${({ theme }) => theme.colors.onSurface};
  padding: 13px 41px;
  align-items: center;
  justify-content: space-between;
`;

export const CheckBoxWrapper = styled.View`
  margin-right: 13px;
`;

export const StyledView = styled.View`
  flex-direction: row;
  align-items: center;
  /* margin-right: 50px; */
`;

export const Label = styled(Typography)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondary};
  ${({ middle }) =>
    middle &&
    css`
      margin-left: 25px;
    `}
  ${({ date }) =>
    date &&
    css`
      opacity: 0.5;
      color: ${({ theme }) => theme.colors.secondaryDark};
    `}
`;

Label.defaultProps = {
  variant: "subtitle",
};

export const CardsWrapper = styled.View`
  padding: 16px 26px;
`;

export const OrderCard = styled.View`
  padding: 14px 16px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.surface};
  margin-bottom: 16px;
  flex-direction: row;
`;

export const CardBody = styled.View``;

export const FieldsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const ViewButton = styled(TouchableOpacity)``;

export const StateWrapper = styled.View`
  background: ${({ color }) => color ?? "#666666"};
  margin-top: 14px;
  border-radius: 4px;
  padding: 8px;
`;

export const State = styled(Typography)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.surface};
  text-transform: capitalize;
`;
