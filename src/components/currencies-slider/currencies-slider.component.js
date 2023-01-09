import React from "react";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import * as S from "./currencies-slider.styles";
import EnglandFlag from "../../../assets/flags/england.jpg";
import CanadaFlag from "../../../assets/flags/canada.jpg";
import ChinaFlag from "../../../assets/flags/china.jpg";
import IndonesiaFlag from "../../../assets/flags/indonesia.jpg";
import IraqFlag from "../../../assets/flags/iraq.jpg";
import JapanFlag from "../../../assets/flags/japan.jpg";
import EuroFlag from "../../../assets/flags/euro.jpg";
import MexicoFlag from "../../../assets/flags/mexico.jpg";
import VietnamFlag from "../../../assets/flags/vietnam.jpg";
import { ScrollView } from "react-native-gesture-handler";
import CurrencyCard from "../currency-card/currency-card.component";

const CurrenciesSlider = () => {
  const currencies = [
    { name: "Iraqui\nDinar", flag: IraqFlag },
    { name: "Mexican\nPeso", flag: MexicoFlag },
    { name: "British\nPound", flag: EnglandFlag },
    { name: "Euro", flag: EuroFlag },
    { name: "Japanese\nYen", flag: JapanFlag },
    { name: "Canadian\nDollar", flag: CanadaFlag },
    { name: "Viet\nDong", flag: VietnamFlag },
    { name: "Indonesia\nRupiah", flag: IndonesiaFlag },
    { name: "Chinese\nYuan", flag: ChinaFlag },
  ];
  const navigation = useNavigation();

  return (
    <S.SliderWrapper>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {currencies.map((currency, index) => (
          <Pressable
            key={`currency-card-${index}`}
            onPress={() =>
              navigation.navigate("CurrenciesTab", {
                screen: "CurrencyScreen",
                params: { currency },
              })
            }
          >
            <CurrencyCard {...currency} />
          </Pressable>
        ))}
      </ScrollView>
    </S.SliderWrapper>
  );
};

export default CurrenciesSlider;
