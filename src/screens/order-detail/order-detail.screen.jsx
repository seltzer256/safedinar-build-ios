import React from "react";
import { ScrollView } from "react-native";
import { DataTable } from "react-native-paper";
import BuySellTopBar from "../../components/buy-sell-top-bar/buy-sell-top-bar.component";
import CustomButtonComponent from "../../components/custom-button/custom-button.component";
import Layout from "../../components/Layout";
import * as S from "./order-detail.styles";

const OrderDetail = () => {
  return (
    <Layout hideTopBar backgroundColor="#FFFFFF">
      <BuySellTopBar title="Orders" />
      <ScrollView>
        <S.Wrapper>
          <S.Title>Order #123456</S.Title>
        </S.Wrapper>
        <S.StateWrapper state="in progress">
          <S.StateTitle>Verification Document</S.StateTitle>
          <S.StateContent>
            Verification Document riquired to complete this purchase
          </S.StateContent>
          <S.StateList>* Photo ID</S.StateList>
          <S.StateList>* Copy of Payment</S.StateList>
          <S.StateContent>
            You can view and address these requiremnts by visiting your
          </S.StateContent>
          <S.StateLink>Account Verfication Section</S.StateLink>
        </S.StateWrapper>
        <S.SectionsWrapper>
          <DataTable>
            <S.StyledTableRow>
              <S.StyledTableCell>
                <S.SectionTitle>Order: #PXPXPX</S.SectionTitle>
              </S.StyledTableCell>
              <S.StyledTableCell right>
                <S.SectionTitle>$500</S.SectionTitle>
              </S.StyledTableCell>
            </S.StyledTableRow>
            <S.StyledTableRow>
              <S.StyledTableCell>
                <S.SectionContent>Nov 22, 2021</S.SectionContent>
              </S.StyledTableCell>
            </S.StyledTableRow>
          </DataTable>
          <S.Hr />
          <DataTable>
            <S.StyledTableRow>
              <S.StyledTableCell>
                <S.SectionTitle>IQD - Iraqi Dinar</S.SectionTitle>
              </S.StyledTableCell>
            </S.StyledTableRow>
            <S.StyledTableRow>
              <S.StyledTableCell>
                <S.SectionContent>Bill: 25k - 750.000</S.SectionContent>
              </S.StyledTableCell>
            </S.StyledTableRow>
            <S.StyledTableRow>
              <S.StyledTableCell>
                <S.SectionContent>Circulated - 30 Notes</S.SectionContent>
              </S.StyledTableCell>
            </S.StyledTableRow>
            <S.StyledTableRow>
              <S.StyledTableCell>
                <S.SectionContent>
                  Exchange rate: $1020,00 / 1M
                </S.SectionContent>
              </S.StyledTableCell>
            </S.StyledTableRow>
          </DataTable>
          <S.Hr />
          <DataTable>
            <S.StyledTableRow>
              <S.StyledTableCell>
                <S.SectionContent>Subtotal</S.SectionContent>
              </S.StyledTableCell>
              <S.StyledTableCell right>
                <S.SectionTitle>$000</S.SectionTitle>
              </S.StyledTableCell>
            </S.StyledTableRow>
            <S.StyledTableRow>
              <S.StyledTableCell>
                <S.SectionContent>Shipping & Handling</S.SectionContent>
              </S.StyledTableCell>
              <S.StyledTableCell right>
                <S.SectionTitle>$000</S.SectionTitle>
              </S.StyledTableCell>
            </S.StyledTableRow>
            <S.StyledTableRow>
              <S.StyledTableCell>
                <S.SectionTitle>Grand Total</S.SectionTitle>
              </S.StyledTableCell>
              <S.StyledTableCell right>
                <S.SectionTitle>$000</S.SectionTitle>
              </S.StyledTableCell>
            </S.StyledTableRow>
          </DataTable>
          <S.Hr />
          <DataTable>
            <S.StyledTableRow>
              <S.StyledTableCell>
                <S.SectionTitle>Address</S.SectionTitle>
              </S.StyledTableCell>
            </S.StyledTableRow>
            <S.StyledTableRow>
              <S.StyledTableCell>
                <S.SectionContent>John XXXXX</S.SectionContent>
              </S.StyledTableCell>
            </S.StyledTableRow>
            <S.StyledTableRow>
              <S.StyledTableCell>
                <S.SectionContent>22nd st</S.SectionContent>
              </S.StyledTableCell>
            </S.StyledTableRow>
            <S.StyledTableRow>
              <S.StyledTableCell>
                <S.SectionContent>Miami, FL</S.SectionContent>
              </S.StyledTableCell>
            </S.StyledTableRow>
            <S.StyledTableRow>
              <S.StyledTableCell>
                <S.SectionContent>T: 000-000-000</S.SectionContent>
              </S.StyledTableCell>
            </S.StyledTableRow>
          </DataTable>
          <S.StyledButton type="tertiary">Cancel Order</S.StyledButton>
          <CustomButtonComponent>Print Order</CustomButtonComponent>
        </S.SectionsWrapper>
      </ScrollView>
    </Layout>
  );
};

export default OrderDetail;
