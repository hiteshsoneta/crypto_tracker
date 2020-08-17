import React, { useState, useContext } from "react";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { WatchListContext } from "../context/watchListContext";

const AddCoin = () => {
  const [currency, setCurrency] = useState("");
  const { addCoin } = useContext(WatchListContext);
  const handleClick = (coin) => {
    console.log("from function", coin);
    addCoin(coin);
  };
  return (
    <View>
      <TextInput
        label="New Coin"
        mode="outlined"
        value={currency}
        theme={{ colors: { primary: "black" } }}
        style={{ marginLeft: 18, marginTop: 18, marginRight: 18 }}
        onChangeText={(text) => setCurrency(text)}
      />
      <Button
        mode="contained"
        style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
        onPress={() => {
          handleClick(currency);
          setCurrency("");
        }}
      >
        Add New Coin
      </Button>
    </View>
  );
};
export default AddCoin;
