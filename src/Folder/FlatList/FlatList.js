import React, { Component } from "react";
import { View, Button, TextInput, StyleSheet, FlatList } from "react-native";
import FlatListData from "./FlatListData";
import Pickedcomponent from "../Picker/Picker";
import Slidercomp from "../Slider/Slider";
import ActivityInd from "../ActivityIndicator/AI";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
class FlatListcomp extends Component {
  state = {
    value: "",
    getIntoArray: [],
    cond: false,
    key: 0
  };

  //OnpressHandler
  _OnPressHandler = () => {
    this.setState(prevState => {
      return {
        getIntoArray: prevState.getIntoArray.concat({
          key: this.state.key++,
          value: this.state.value
        }),
        cond: true
      };
    });
  };

  render() {
    return (
      <View style={styles.Main2}>
        <TextInput
          placeholder="EnterSomething"
          value={this.state.value}
          onChangeText={event => {
            this.setState({ value: event });
          }}
        />
        <Button title="Add" onPress={this._OnPressHandler} />

        {/* rendering list of records  using ternary operator*/}

        <ErrorBoundary>
          {this.state.cond ? (
            <FlatList
              data={this.state.getIntoArray}
              renderItem={({ item }) => {
                return <FlatListData Data={item.value} key={item.key} />;
              }}
              keyExtractor={(item, index) => index.toString()}
            />
          ) : null}
        </ErrorBoundary>

        {/*Picker componenet */}
        <Pickedcomponent />

        {/*Slidercomp */}
        <Slidercomp />

        {/*AI*/}
        <ActivityInd />

        {/*ScrollView closing*/}
      </View>
    );
  }
}

export default FlatListcomp;

const styles = StyleSheet.create({
  Main2: {
    flex: 1,
    marginTop: 20
  }
});
