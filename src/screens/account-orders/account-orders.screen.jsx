import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import CustomCheckbox from "../../components/custom-checkbox/custom-checkbox.component";
import * as S from "./account-orders.styles";
import ViewBlueIcon from "../../../assets/account/view-blue.svg";
import withTopBar from "../with-top-bar/with-top-bar.component";

const ORDERS = [
  {
    id: "ORDER-1",
    title: "Order 1",
    date: "01/01/21",
    total: "100",
    state: "cancelled",
  },
  {
    id: "ORDER-2",
    title: "Order 2",
    date: "01/06/21",
    total: "200",
    state: "complete",
  },
  {
    id: "ORDER-3",
    title: "Order 3",
    date: "01/07/21",
    total: "300",
    state: "in progress",
  },
];

const AccountOrdersScreen = ({ navigation }) => {
  const [selectedOrders, setSelectedOrders] = useState([]);

  const handleSelectAll = () => {
    if (selectedOrders.length === ORDERS.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(ORDERS.map((order) => order.id));
    }
  };

  const handleSelectOrder = (id) => {
    if (selectedOrders.includes(id)) {
      setSelectedOrders(selectedOrders.filter((orderId) => orderId !== id));
    } else {
      setSelectedOrders([...selectedOrders, id]);
    }
  };

  const handleRemoveOrders = () => {
    console.log("handleRemoveOrders", selectedOrders);
  };

  const getColor = (state) => {
    switch (state) {
      case "cancelled":
        return "#666666";
      case "complete":
        return "#4CAF50";
      case "in progress":
        return "#EF5350";
    }
  };

  const openOrder = (id) => {
    console.log("openOrder", id);
    navigation.navigate("OrderDetailScreen");
  };

  return (
    <>
      <S.TopWrapper>
        <S.TopTitle variant="title">Orders</S.TopTitle>
        <TouchableOpacity onPress={handleRemoveOrders}>
          <S.TrashIcon />
        </TouchableOpacity>
      </S.TopWrapper>
      <S.TableHead>
        <S.StyledView>
          <S.CheckBoxWrapper>
            <CustomCheckbox
              checked={selectedOrders.length === ORDERS.length}
              //   onChange={handleSelectAll}
              onPress={handleSelectAll}
            />
          </S.CheckBoxWrapper>
          <S.Label>Order</S.Label>
        </S.StyledView>
        <S.Label middle>Total</S.Label>
        <S.Label>View</S.Label>
      </S.TableHead>
      <ScrollView>
        <S.CardsWrapper>
          {ORDERS.map(({ id, title, date, total, state }, index) => (
            <S.OrderCard key={`order-card-${index}`}>
              <S.CheckBoxWrapper>
                <CustomCheckbox
                  checked={selectedOrders.includes(id)}
                  onPress={() => handleSelectOrder(id)}
                />
              </S.CheckBoxWrapper>
              <View style={{ flex: 1 }}>
                <S.FieldsWrapper>
                  <S.Label>{title}</S.Label>
                  <S.Label>${total}</S.Label>
                  <TouchableOpacity onPress={() => openOrder(id)}>
                    <ViewBlueIcon />
                  </TouchableOpacity>
                </S.FieldsWrapper>
                <S.Label date>{date}</S.Label>
                <S.StateWrapper color={getColor(state)}>
                  <S.State>{state}</S.State>
                </S.StateWrapper>
              </View>
            </S.OrderCard>
          ))}
        </S.CardsWrapper>
      </ScrollView>
    </>
  );
};

export default withTopBar("Orders")(AccountOrdersScreen);
