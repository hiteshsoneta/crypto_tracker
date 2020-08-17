import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Coin = ({ coin, deleteCoin }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 5,
        borderBottomColor: "black",
        height: 50,
      }}
      onPress={(e) => {
        e.preventDefault();
        deleteCoin(coin.id);
      }}
    >
      <Image
        style={{ width: 30, height: 30, marginTop: 5, marginLeft: 5 }}
        source={{ uri: coin.image }}
      />
      <Text style={{ marginTop: 8, fontSize: 20 }}>${coin.current_price}</Text>
      <Text
        style={coin.price_change_percentage_24h < 0 ? styles.red : styles.green}
      >
        {coin.price_change_percentage_24h}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  green: {
    color: "#00ff00",
    marginTop: 8,
    fontSize: 20,
    marginRight: 5,
  },
  red: {
    color: "#ff0000",
    marginTop: 8,
    fontSize: 20,
    marginRight: 5,
  },
});

export default Coin;
