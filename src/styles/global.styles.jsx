import styled from "styled-components/native";

export const GlobalSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

export const Wrapper = styled.View`
  background-color: ${({ background }) => (background ? background : "white")};
  flex: 1;
`;
