import React from "react";
import BuySellTopBar from "../../components/buy-sell-top-bar/buy-sell-top-bar.component";
import Layout from "../../components/Layout";

const withTopBar = (title) => (WrappedComponent) => {
  return (props) => {
    return (
      <Layout hideTopBar backgroundColor="#F0F0F0">
        <BuySellTopBar title={title} titleVariant="title" />
        <WrappedComponent {...props} />
      </Layout>
    );
  };
};

export default withTopBar;
