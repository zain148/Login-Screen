import React, { useState } from "react";
import { View, Text } from "react-native";
import Modalcomp from "../Modal/Modal";
const FlatListData = props => {
  const [value, setvalue] = useState(false);

  return (
    <View style={{ width: 100 }}>
      <Text onPress={() => setvalue(true)}> {props.Data} </Text>
      <Modalcomp visibility={value} hidden={() => setvalue(false)} />
    </View>
  );
};

export default FlatListData;
