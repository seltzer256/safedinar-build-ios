import styled from "styled-components/native";

export const OptionWrapper = styled.View`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IndicatorWrapper = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Indicator = styled.View`
  height: 5px;
  width: 28px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
`;
