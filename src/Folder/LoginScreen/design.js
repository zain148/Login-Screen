import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Platform,
  TextInput,
  TouchableOpacity,
  CheckBox,
  Image,
  KeyboardAvoidingView
} from "react-native";

class Design extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      userPass: ""
    };
  }

  calculate = () => {
    if (this.state.userId === "zain" && this.state.userPass === "123") {
      this.props.navigation.navigate("ScreenThree");
    }
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.block1}>
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
            {" "}
            Welcome Back !
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "100", color: "white" }}>
            Welcome Back
          </Text>
        </View>

        <View style={styles.block2}>
          <View style={styles.InsideBlock2}>
            <Image
              source={require("../../assets/images/logo.png")}
              style={styles.Image}
            />
          </View>

          <View style={styles.insideBlock2ForInput}>
            {/*TextInputr*/}
            <TextInput
              placeholder="username"
              style={styles.Input}
              onChangeText={event => this.setState({ userId: event })}
            />
            <TextInput
              placeholder="Password"
              style={styles.Input}
              secureTextEntry
              onChangeText={event => {
                this.setState({ userPass: event });
              }}
            />
          </View>
          <View style={styles.InsideBlock2Forcheckbox}>
            <CheckBox
              value={false}
              disabled={false}
              onValueChange={() => alert("You select true")}
            />
            <Text> Remember me</Text>
          </View>
          <View style={styles.InsideBlock2ForButton}>
            <TouchableOpacity style={styles.ForButton} onPress={this.calculate}>
              <Text
                style={{
                  color: "blue",
                  fontWeight: "400",
                  fontSize: 20,
                  textAlign: "center",
                  paddingTop: 2.5
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{ marginTop: 10, textAlign: "center" }}
            onPress={() => alert("Jaa salya")}
          >
            Forgot Password ?
          </Text>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default Design;

//for styling elements
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6c6cff",
    marginTop: Platform.OS === "android" ? 23 : 23
  },
  block1: {
    flex: 2.5,
    alignItems: "center",
    justifyContent: "center"
  },

  block2: {
    flex: 5,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "white"
  },
  InsideBlock2: {
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20
  },
  Image: {
    borderRadius: 25,
    height: 75,
    width: 75
  },

  insideBlock2ForInput: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  Input: {
    height: 40,
    width: Dimensions.get("window").width - 80,
    marginTop: 20,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10
  },
  InsideBlock2Forcheckbox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
    marginLeft: 30
  },
  InsideBlock2ForButton: {
    alignItems: "center"
  },
  ForButton: {
    height: 40,
    width: Dimensions.get("window").width - 100,
    marginTop: 40,
    borderWidth: 1,
    borderColor: "#6c6cff",
    borderRadius: 25,
    backgroundColor: "white"
  }
});
