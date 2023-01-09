import React from "react";
import { Pressable } from "react-native";
import EnglandFlag from "../../../assets/flags/england.jpg";
import CanadaFlag from "../../../assets/flags/canada.jpg";
import ChinaFlag from "../../../assets/flags/china.jpg";
import IndonesiaFlag from "../../../assets/flags/indonesia.jpg";
import IraqFlag from "../../../assets/flags/iraq.jpg";
import JapanFlag from "../../../assets/flags/japan.jpg";
import EuroFlag from "../../../assets/flags/euro.jpg";
import MexicoFlag from "../../../assets/flags/mexico.jpg";
import VietnamFlag from "../../../assets/flags/vietnam.jpg";
import * as S from "./currencies-grid.styles";
import { useNavigation } from "@react-navigation/native";

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

const CurrenciesGrid = () => {
  const navigation = useNavigation();

  return (
    <S.TopWrapper>
      <S.Title variant="title" variant="title">
        Currencies
      </S.Title>
      <S.FlexWrapper>
        {currencies.map((item, index) => (
          <S.Card key={`currency-card-${index}`}>
            <Pressable
              style={{
                paddingBottom: 12,
                paddingHorizontal:
                  index === 1 || index === 4 || index === 7 ? 6 : 0,
                marginRight: index === 0 || index === 3 || index === 6 ? 6 : 0,
                marginLeft: index === 2 || index === 5 || index === 8 ? 6 : 0,
              }}
              onPress={() =>
                navigation.navigate("CurrencyScreen", {
                  currency: { name: item.name, flag: item.flag },
                })
              }
            >
              <S.CurrencyItem>
                <S.FlagImage source={item.flag} resizeMode="cover" />
                <S.CountryName variant="title">{item.name}</S.CountryName>
              </S.CurrencyItem>
            </Pressable>
          </S.Card>
        ))}
      </S.FlexWrapper>
    </S.TopWrapper>
  );
};

export default CurrenciesGrid;
