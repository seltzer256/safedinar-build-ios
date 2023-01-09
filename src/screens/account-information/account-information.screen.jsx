import React, { useState } from "react";
import { ScrollView } from "react-native";
import AccountInformation from "../../components/account-information/account-information.component";
import ChangePassword from "../../components/change-password/change-password.component";
import CustomSnackbar from "../../components/custom-snackbar/custom-snackbar.component";
import withTopBar from "../with-top-bar/with-top-bar.component";

const AccountInformationScreen = () => {
  const [changePasswordVisible, setChangePasswordVisible] = useState(false);
  const [snackbarObj, setSnackbarObj] = useState(null);

  return (
    <>
      <ScrollView>
        <AccountInformation
          setChangePasswordVisible={setChangePasswordVisible}
          setSnackbarObj={setSnackbarObj}
        />
      </ScrollView>
      <CustomSnackbar
        isVisible={!!snackbarObj}
        onDismiss={() => setSnackbarObj(null)}
        {...snackbarObj}
      />
      <ChangePassword
        visible={changePasswordVisible}
        setVisible={setChangePasswordVisible}
        setSnackbarObj={setSnackbarObj}
      />
    </>
  );
};

export default withTopBar("Account Information")(AccountInformationScreen);
