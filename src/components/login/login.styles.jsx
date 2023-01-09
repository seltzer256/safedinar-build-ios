import styled from "styled-components";
import Typography from "../typography/typography.component";

export const Wrapper = styled.View`
  padding: 40px 25px;
  /* justify-content: center; */
`;

export const BackButton = styled.TouchableOpacity``;

export const Title = styled(Typography)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textContent};
  margin: 24px 0;
`;

Title.defaultProps = {
  variant: "title",
};

export const Hr = styled.View`
  width: 100%;
  height: 1px;
  background: black;
  opacity: 0.1;
`;

export const TextFieldWrapper = styled.View`
  margin-bottom: 24px;
`;
