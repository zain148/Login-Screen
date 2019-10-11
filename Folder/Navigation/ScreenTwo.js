import React, { Component } from "react";
import { View, Text, Button } from "react-native";

class ScreenTwo extends Component {
  render() {
    const userId = this.props.navigation.getParam("userId", "N/A");
    const userName = this.props.navigation.getParam("userName", "N/A");
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text> ScreenTwo </Text>
        <Text>UserId IS {userId}</Text>
        <Text>UserName is {userName}</Text>
        <Button
          title="back to screen1"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}

export default ScreenTwo;
