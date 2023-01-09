import { Modal } from "react-native-paper";
import styled from "styled-components";
import { css } from "styled-components/native";

export const StyledModal = styled(Modal)`
  z-index: 999;
  /* padding: 9px; */
  /* flex: 1; */
  align-items: center;
  justify-content: center;
  /* flex-direction: row; */
  margin-bottom: 48px;
  /* flex: 1; */
  width: 100%;
`;

export const Wrapper = styled.View`
  padding: 24px 28px;
  /* flex: 1; */
  /* width: 100%; */
  background-color: white;
`;

export const TextFieldWrapper = styled.View`
  margin-bottom: 26px;
  /* width: 100%; */
  /* flex: 1; */
  ${({ last }) =>
    last &&
    css`
      margin-bottom: 16px;
    `}
`;
