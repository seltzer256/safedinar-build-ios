import React, { useState } from "react";

import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
} from "react-native-responsive-linechart";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

import * as S from "./currency-stats.styles";

const range = [
  {
    title: "1D",
    value: "1",
  },
  {
    title: "5D",
    value: "2",
  },
  {
    title: "1M",
    value: "3",
  },
  // {
  //   title: "1Y",
  //   value: "4",
  // },
  // {
  //   title: "5Y",
  //   value: "5",
  // },
  // {
  //   title: "Max",
  //   value: "6",
  // },
];

const CurrencyStats = () => {
  const [selectedRange, setSelectedRange] = useState(range[0].value);

  const handlePress = (value) => {
    setSelectedRange(value);
  };

  return (
    <S.Wrapper>
      <S.RangeWrapper>
        {range.map(({ title, value }, index) => (
          <Pressable
            key={`range-button-${index}`}
            onPress={() => handlePress(value)}
          >
            <S.RangeButton active={value === selectedRange}>
              <S.Range variant="subtitle" active={value === selectedRange}>
                {title}
              </S.Range>
            </S.RangeButton>
          </Pressable>
        ))}
      </S.RangeWrapper>
      <Chart
        style={{ height: 150, width: "100%" }}
        data={[
          { x: -2, y: 15 },
          { x: -1, y: 10 },
          { x: 0, y: 12 },
          { x: 1, y: 7 },
          { x: 2, y: 6 },
          { x: 3, y: 8 },
          { x: 4, y: 10 },
          { x: 5, y: 8 },
          { x: 6, y: 12 },
          { x: 7, y: 14 },
          { x: 8, y: 12 },
          { x: 9, y: 13.5 },
          { x: 10, y: 18 },
        ]}
        padding={{ left: 50, bottom: 20, right: 5, top: 20 }}
        xDomain={{ min: -2, max: 10 }}
        yDomain={{ min: 0, max: 20 }}
      >
        <VerticalAxis
          tickCount={3}
          theme={{
            labels: {
              formatter: (v) => v.toFixed(6),
              label: {
                color: "#011F37",
                opacity: 0.5,
              },
            },
          }}
        />
        <HorizontalAxis tickCount={5} />
        <Area
          theme={{
            gradient: {
              from: { color: "#FF0000", opacity: -0.98 },
              to: { color: "#ff000000", opacity: 0.2 },
            },
          }}
        />
        <Line
          theme={{
            stroke: { color: "#FF0000", width: 2 },
          }}
        />
      </Chart>
    </S.Wrapper>
  );
};

export default CurrencyStats;
