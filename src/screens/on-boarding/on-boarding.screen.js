import React, { useEffect, useRef, useState } from "react";
import * as S from "./on-boarding.styles";
import { Animated, Pressable } from "react-native";

import Image1 from "../../../assets/img/onboarding-1.png";
import Image2 from "../../../assets/img/onboarding-2.png";
import Image3 from "../../../assets/img/onboarding-3.png";
import Layout from "../../components/Layout";

const ONBOARDING_SLIDES = [
  {
    image: Image1,
    title: "Safedinar Service",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate",
  },
  {
    image: Image2,
    title: "Lowest Price Guarantee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate",
  },
  {
    image: Image3,
    title: "Safe and Secure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate",
  },
];

const OnBoardingScreen = ({ navigation }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const handleSetNewSlide = (index) => {
    if (index < ONBOARDING_SLIDES.length) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 350,
        useNativeDriver: true,
      }).start(({ finished }) => {
        /* completion callback */
        setActiveSlideIndex(index);
      });
    } else {
      navigation.navigate("Auth");
    }
  };

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 350,
      useNativeDriver: true,
    }).start();
  }, [activeSlideIndex]);

  return (
    <>
      <S.BgGradient
        source={require("../../../assets/img/bg_gradient.png")}
        resizeMode="cover"
      />
      <S.ContentWrapper>
        <S.SkipBtn onPress={() => navigation.navigate("Auth")} type="secondary">
          Skip
        </S.SkipBtn>
        <Animated.View
          style={{
            opacity: fadeAnim,
          }}
        >
          <S.Img
            source={ONBOARDING_SLIDES[activeSlideIndex].image}
            resizeMode="contain"
          />
        </Animated.View>
        <S.BottomContentWrapper>
          <Animated.View
            style={{
              opacity: fadeAnim,
            }}
          >
            <S.TextWrapper>
              <S.Title variant="title">
                {ONBOARDING_SLIDES[activeSlideIndex].title}
              </S.Title>
              <S.Description>
                {ONBOARDING_SLIDES[activeSlideIndex].description}
              </S.Description>
            </S.TextWrapper>
          </Animated.View>
          <S.BottomWrapper>
            <S.PaginationWrapper>
              {ONBOARDING_SLIDES.map((item, index) => (
                <Pressable
                  key={`onboarding-slide-${index}`}
                  onPress={() => handleSetNewSlide(index)}
                >
                  <S.PaginationDot active={activeSlideIndex === index} />
                </Pressable>
              ))}
            </S.PaginationWrapper>
            <S.NextBtn onPress={() => handleSetNewSlide(activeSlideIndex + 1)}>
              Next
            </S.NextBtn>
          </S.BottomWrapper>
        </S.BottomContentWrapper>
      </S.ContentWrapper>
    </>
  );
};

export default OnBoardingScreen;
