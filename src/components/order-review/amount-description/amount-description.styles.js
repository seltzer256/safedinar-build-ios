import styled from "styled-components/native";
import Typography from "../../typography/typography.component";

export const Wrapper = styled.View`
  background-color: white;
  border-radius: 8px;
  margin-bottom: 19px;
`;

export const TopWrapper = styled.View`
  padding: 12px 21px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Separator = styled.View`
  height: 1px;
  background-color: #808f9b;
  width: 100%;
  opacity: 0.5;
`;

export const AmountTitle = styled(Typography)`
  font-size: 14px;

  color: ${({ theme }) => theme.colors.textContent};
  opacity: 0.5;
  margin-bottom: 6px;
`;

export const Value = styled(Typography)`
  font-size: 14px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.textContent};
`;

Value.defaultProps = {
  variant: "title",
};

export const Quantity = styled(Typography)`
  font-size: 14px;

  color: ${({ theme }) => theme.colors.textContent};
`;

export const LeftWrapper = styled.View``;

export const DescriptionWrapper = styled.View`
  padding: 12px 21px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
