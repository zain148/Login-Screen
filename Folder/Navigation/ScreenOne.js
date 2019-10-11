import React, { Component } from "react";
import { View, Text, Button } from "react-native";

class ScreenOne extends Component {
  static navigationOptions = {
    title: "Screen 1"
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text> ScreenOne </Text>
        <Button
          title="click Me"
          onPress={() =>
            this.props.navigation.navigate("Home2", {
              userId: "1",
              userName: "Zain"
            })
          }
        />
      </View>
    );
  }
}

export default ScreenOne;
