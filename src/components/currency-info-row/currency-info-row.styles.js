import styled from "styled-components/native";
import { spacing } from "../../utils/utils";
import Typography from "../typography/typography.component";

export const InfoWrapper = styled.View`
  padding: 12px ${spacing}px 13px ${spacing}px;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.background};

  ${({ whiteBg }) =>
    !whiteBg &&
    `background-color: white;
    `};
`;

export const ContentWrapper = styled.View`
  flex: 1;
`;

export const Title = styled(Typography)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textContent};

  line-height: 15px;
  letter-spacing: -0.078px;
`;

export const Content = styled(Typography)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textContent};

  line-height: 15px;
  letter-spacing: -0.078px;
`;
