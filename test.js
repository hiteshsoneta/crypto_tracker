import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default class Test extends Component {
  state = {
    data: [],
    //coins=['bitcoin','ethereum']
  };
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum"
    );
    const json = await response.json();

    this.setState({ data: json });
    //console.log("data", this.state.data);
  };
  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          keyExtractor={(x, i) => i}
          renderItem={({ item }) => (
            <Text style={{ fontSize: 20 }}>
              <Text>{item.name}</Text>
              <Text>{item.current_price}usd</Text>
              {item.price_change_percentage_24h}
            </Text>
          )}
        />
      </View>
    );
  }
}
