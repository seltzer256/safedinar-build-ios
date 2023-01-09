import styled from "styled-components/native";
import TrashIcon from "../../../assets/icons/trash.svg";
import Typography from "../typography/typography.component";

export const CartWrapper = styled.View``;

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 38px 0;
`;

export const TrashWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DeleteIcon = styled(TrashIcon)`
  width: 24px;
  height: 24px;
  margin-right: 5px;
`;

export const Title = styled(Typography)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textContent};
`;

export const ButtonDescription = styled(Typography)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textContent};
  opacity: 0.5;
`;

export const CardsWrapper = styled.View``;

export const TotalWrapper = styled.View`
  padding: 26px 17px 26px 0;
  flex-direction: row;
  justify-content: space-between;
`;

export const TotalValue = styled(Typography)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textContent};
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: #000000;
  opacity: 0.1;
`;
