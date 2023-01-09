import React, { useEffect, useRef, useState } from "react";
import Logo from "../../../assets/original_logo_white.png";
import BgLogo from "../../../assets/logo_scale.png";
import BgGradient from "../../../assets/img/bg_gradient.png";
import * as S from "./auth.styles";
import { Animated, Pressable } from "react-native";
import Login from "../../components/login/login.component";

const AuthScreen = ({ navigation }) => {
  const [openLogin, setOpenLogin] = useState(false);
  const topAnim = useRef(new Animated.Value(500)).current;

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(topAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }, 500);
  }, []);

  const handleOpenLogin = () => {
    // Animated.timing(topAnim, {
    //   toValue: 400,
    //   duration: 500,
    //   useNativeDriver: true,
    // }).start(() => {
    //   setOpenLogin(true);
    // });
    setOpenLogin(true);
  };

  return (
    <S.Wrapper>
      <S.LogoImg resizeMode="contain" source={Logo} />
      <S.LogoBg resizeMode="contain" source={BgLogo} />
      <S.ContentWrapper style={[{ transform: [{ translateY: topAnim }] }]}>
        <S.BgGradient source={BgGradient} resizeMode="cover" />
        {openLogin ? (
          <Login setOpenLogin={setOpenLogin} />
        ) : (
          <S.ActionsWrapper>
            <S.Title variant="title">
              Currency transactions you can trust
            </S.Title>
            <S.CustomButton onPress={() => navigation.navigate("Register")}>
              Sign Up
            </S.CustomButton>
            <S.CustomButton
              style={{ marginTop: 16 }}
              type="tertiary"
              onPress={handleOpenLogin}
            >
              Log in
            </S.CustomButton>
            <Pressable onPress={() => navigation.navigate("Home")}>
              <S.LinkAction>Continue as Guest</S.LinkAction>
            </Pressable>
          </S.ActionsWrapper>
        )}
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default AuthScreen;
