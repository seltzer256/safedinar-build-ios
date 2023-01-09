import styled from 'styled-components/native';
import {spacing} from '../../utils/utils';

export const SliderWrapper = styled.View`
  padding: ${spacing}px 0;
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;
