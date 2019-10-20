import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";

class ActivityInd extends Component {
  state = {
    Animating: true
  };
  render() {
    return (
      <View>
        <ActivityIndicator
          size="large"
          color="pink"
          animating={this.state.Animating}
        />

        <Text
          onPress={() => {
            this.setState({ Animating: false });
          }}
        >
          click me to Stop AI
        </Text>
      </View>
    );
  }
}

export default ActivityInd;
