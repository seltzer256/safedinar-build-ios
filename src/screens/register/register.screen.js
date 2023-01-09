import React from "react";
import { View } from "react-native";
import CommonTopBar from "../../components/common-top-bar/common-top-bar.component";
import Layout from "../../components/Layout";
import RegisterForm from "../../components/register-form/register-form.component";
import { marginBottom, spacing } from "../../utils/utils";

const RegisterScreen = ({ navigation }) => {
  return (
    <Layout hideTopBar backgroundColor="white">
      <CommonTopBar hideNotificationIcon navigation={navigation} />
      <View style={{ paddingHorizontal: spacing, marginBottom: marginBottom }}>
        <RegisterForm navigation={navigation} />
      </View>
    </Layout>
  );
};

export default RegisterScreen;
