import React from "react";

import { View } from "react-native";
import AddCoin from "../components/AddCoin";
import CoinList from "../components/CoinList";

const CoinSummaryPage = () => {
  return (
    <View>
      <CoinList />
      <AddCoin />
    </View>
  );
};
export default CoinSummaryPage;
