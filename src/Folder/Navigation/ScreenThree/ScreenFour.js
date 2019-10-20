import React, { Component } from "react";
import { View, Text, Button, Image } from "react-native";

class ScreenFour extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text> i'm at ScreenFour </Text>
        <Image
          style={{ width: 50, height: 50, resizeMode: "center" }}
          source={require("../../../assets/images/logo.png")}
        />
        <Button
          title="GoTo Screen Five"
          onPress={() => {
            this.props.navigation.navigate("ScreenFive");
          }}
        />
        <Button
          title="GotoBack to Screen Three"
          onPress={() => {
            this.props.navigation.push("ScreenThree");
          }}
        />
      </View>
    );
  }
}

export default ScreenFour;
