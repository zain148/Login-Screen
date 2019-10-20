import React, { Component } from "react";
import { View, Text, Button } from "react-native";

class ScreenFive extends Component {
  static navigationOptions = {
    title: "Hurrah"
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>I'm at ScreenFive </Text>
        <Button
          title="Goback To Screen Three"
          onPress={() => {
            this.props.navigation.push("ScreenThree");
          }}
        />
        <Button
          title="Goback To Screen Four"
          onPress={() => {
            this.props.navigation.push("ScreenFour");
          }}
        />
      </View>
    );
  }
}

export default ScreenFive;
