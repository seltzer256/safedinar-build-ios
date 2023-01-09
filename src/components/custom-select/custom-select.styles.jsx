import styled from "styled-components";
import DropDownPicker from "react-native-dropdown-picker";
import { Animated } from "react-native";
import Typography from "../typography/typography.component";

export const Wrapper = styled(Animated.View)`
  ${({ open }) => `
    height: ${open ? 250 : 50}px;
  `}
`;

export const CustomSelect = styled(DropDownPicker)`
  border: 1px solid ${({ theme }) => theme.colors.textContent};
  border-radius: 8px;
  padding-left: 21px;
  background-color: rgba(255, 255, 255, 0);
`;

CustomSelect.defaultProps = {
  listMode: "MODAL",
  textStyle: {
    fontFamily: "DMSans_500Medium",
    fontSize: 16,
  },
  selectedItemContainerStyle: {
    backgroundColor: "#F0F0F0",
  },
};

export const Error = styled(Typography)`
  position: relative;
  font-size: 12px;
  padding-left: 8px;
  /* z-index: 99; */
`;
