import styled from "styled-components/native";
import Typography from "../../components/typography/typography.component";

export const TopWrapper = styled.View`
  padding: 26px 0;
`;

export const Title = styled(Typography)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textContent};
  margin-bottom: 10px;
`;

export const OrderTitle = styled(Typography)`
  font-size: 30px;
  line-height: 34px;
  color: ${({ theme }) => theme.colors.textContent};
`;

export const OrderDescriptionWrapper = styled.View`
  border-radius: 8px;
  padding: 20px 21px;
  background-color: white;
  margin-bottom: 34px;
`;

export const InfoText = styled(Typography)`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textContentLight};
  line-height: 20px;
`;

export const ListWrapper = styled.View`
  max-width: 95%;
`;

export const ItemWrapper = styled.View`
  flex-direction: row;
`;

export const Dot = styled.View`
  width: 5px;
  height: 5px;
  border-radius: 50px;
  background-color: black;
  margin-top: 7px;
  margin-left: 7px;
  margin-right: 7px;
`;

export const BottomTitle = styled(Typography)`
  font-size: 20px;
  letter-spacing: -0.078px;
  color: ${({ theme }) => theme.colors.textContent};
  text-align: center;
  margin-bottom: 32px;
`;

BottomTitle.defaultProps = {
  variant: "title",
};

export const CheckBoxWrapper = styled.View`
  margin-bottom: 35px;
`;
