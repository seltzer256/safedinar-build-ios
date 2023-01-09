import styled from 'styled-components/native';
import CustomButton from '../custom-button/custom-button.component';

export const Wrapper = styled.View`
  flex-direction: row;
  margin-bottom: 100px;
`;

export const Button = styled(CustomButton)`
  flex: 1;
`;

export const CustomPressable = styled.Pressable`
  flex: 1;
`;
