import React, { Component } from "react";
import { Text } from "react-native";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      errorInfo: ""
    };
  }

  componentDidCatch(error, errorInformation) {
    this.setState({
      error: error,
      errorInfo: errorInformation
    });
  }

  render() {
    if (this.state.error) {
      return (
        <Text>
          We got an error In FlatList component{" "}
          {this.state.errorInfo.toString()}
        </Text>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
