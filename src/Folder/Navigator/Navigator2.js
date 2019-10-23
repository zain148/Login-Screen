import React, { Component } from "react";
import { View, Text, Button, Image } from "react-native";
import value from "../../Images";

import { Ionicons } from "@expo/vector-icons";

class Navigator2 extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Screen2",
      headerBackTitle: "Images",
      headerLeft: (
        <Ionicons
          name="md-arrow-back"
          size={31}
          color="black"
          onPress={() => navigation.navigate("Screen1")}
        />
      )
    };
  };

  render() {
    var x = value.address;
    return (
      <View>
        <Text> Navigator2 </Text>
        <Button
          style={{ marginTop: 20 }}
          title="backto screen1"
          onPress={() => this.props.navigation.navigate("Screen1")}
        />
        <Button
          style={{ marginTop: 20 }}
          title="backto screen3"
          onPress={() => this.props.navigation.navigate("Screen3")}
        />
        <Image source={x} />
        <Image
          source={x}
          style={{ height: 30, width: 50, resizeMode: "contain" }}
        />
      </View>
    );
  }
}

export default Navigator2;
