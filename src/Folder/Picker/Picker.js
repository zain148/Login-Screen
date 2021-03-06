import React, { Component } from "react";
import { View, Text, Picker } from "react-native";

class Pickedcomponent extends Component {
  state = {
    value: "Boston"
  };

  onAlert = () => {
    alert("your selected value is" + this.state.value);
  };
  render() {
    return (
      <View>
        <Text> Pickercomponent </Text>
        {/* its just like select and option in web */}

        <Picker
          style={{ width: "100%" }}
          selectedValue={this.state.value}
          onValueChange={(getValue, index) => {
            this.setState({ value: getValue });
          }}
        >
          <Picker.Item label="English" value="English" />
          <Picker.Item label="Spanish" value="Spanish" />
          <Picker.Item label="Boston" value="Boston" />
        </Picker>

        <Text onPress={this.onAlert}>MJY cLIcK KERO</Text>
      </View>
    );
  }
}

export default Pickedcomponent;

import React from "react";

class ErrorB extends React.Component {
  state = {
    let: false,
    errorMessage: ""
  };

  //this method will call when got some error
  componentDidCatch(error) {
    this.setState({
      let: true,
      errorMessage: error
    });
  }
  render() {
    if (this.state.let) {
      return <h1>{this.state.errorMessage}</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorB;
