import React, { Component } from "react";
import { View, Text, Button } from "react-native";

class Navigator2 extends Component {
  static navigationOptions = {
    title: "Screen2",
    headerBackTitle: "BackToScreen1"
  };

  render() {
    return (
      <View>
        <Text> Navigator2 </Text>
        <Button
          style={{ marginTop: 20 }}
          title="backto screen1"
          onPress={() => this.props.navigation.navigate("Screen1")}
        />
      </View>
    );
  }
}

export default Navigator2;
