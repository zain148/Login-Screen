import React, { Component } from "react";
import { View, Text, Button, Image } from "react-native";
import Source from "../../Images";

class Navigator4 extends Component {
  static navigationOptions = {
    drawerLabel: "Home Button",
    drawerIcon: () => (
      <Image
        style={{ width: 30, height: 30, resizeMode: "contain" }}
        source={Source.address}
      />
    )
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text> Navigator4 </Text>
        <Button
          title="open drawer"
          onPress={() => this.props.navigation.openDrawer()}
        />
        <Button
          title="close DRAWER "
          onPress={() => this.props.navigation.closeDrawer()}
        />
      </View>
    );
  }
}

export default Navigator4;
