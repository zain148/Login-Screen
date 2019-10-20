import React, { Component } from "react";
import { View, Text, Button } from "react-native";

class ScnreeThree extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text> ScreenThree</Text>
        <Button
          title="GoToScreen Four"
          onPress={() => {
            this.props.navigation.navigate("ScreenFour");
          }}
        />
      </View>
    );
  }
}

export default ScnreeThree;
