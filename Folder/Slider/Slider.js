import React, { Component } from "react";
import { View, Text, Slider } from "react-native";

class Slidercomp extends Component {
  state = {
    value: 50
  };
  onPRESS = () => {
    let value = this.state.value;

    return value;
  };
  render() {
    //this.onPress() will return the updated value into value variable
    const value = this.onPRESS();
    return (
      <View>
        <Text>Slidercomp</Text>
        <Slider
          value={this.state.value}
          maximumValue={100}
          minimumValue={0}
          step={10}
          onValueChange={getvalue => {
            this.setState({ value: getvalue });
          }}
        />

        <Text>Your Selected Value is : {value}</Text>
      </View>
    );
  }
}

export default Slidercomp;
