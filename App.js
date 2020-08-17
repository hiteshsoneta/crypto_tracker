import React from "react";
import { StyleSheet, Text, View } from "react-native";

import CoinSummaryPage from "./pages/CoinSummaryPage";
import {
  WatchListContext,
  WatchListContextProvider,
} from "./context/watchListContext";

export default function App() {
  return (
    <WatchListContextProvider>
      <View style={styles.container}>
        <View backgroundColor="#3467eb">
          <Text style={{ fontSize: 30, marginLeft: 20 }}>
            Crypto Tracker Pro
          </Text>
        </View>
        <CoinSummaryPage />
      </View>
    </WatchListContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
