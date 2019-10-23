import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
class Navigator1 extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Screen1",
      headerStyle: {
        backgroundColor: "gray",
        height: 50
      },
      headerTitleStyle: {
        color: "white"
      },
      headerLeft: (
        <MaterialCommunityIcons
          name="forward"
          size={32}
          color="white"
          onPress={() => navigation.navigate("Screen2")}
        />
      )
    };
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "green", fontSize: 20 }}> Navigator1 </Text>

        <Button
          style={{ marginTop: 30 }}
          title="click to goTo screen2"
          onPress={() => this.props.navigation.navigate("Screen2")}
        />
      </View>
    );
  }
}

export default Navigator1;
