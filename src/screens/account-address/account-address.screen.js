import React from "react";
import { ScrollView } from "react-native";
import AccountAddress from "../../components/account-address/account-address.component";
import withTopBar from "../with-top-bar/with-top-bar.component";

const ADDRESSES = [
  {
    address: "1244 Beacon St, Brookline, MA 02446, EE. UU.",
    city: "Brooklyn",
    state: "MA",
    zip: "02446",
    phone_number: "617-566-6666",
    is_default: true,
    is_shipping_default: true,
  },
];

const AccountAddressScreen = () => {
  return (
    <ScrollView>
      <AccountAddress addresses={ADDRESSES} />
    </ScrollView>
  );
};

export default withTopBar("Address Book")(AccountAddressScreen);
