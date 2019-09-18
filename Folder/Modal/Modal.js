import React from "react";
import { View, Modal, Text, StyleSheet } from "react-native";

const Modalcomp = props => {
  return (
    <View>
      <Modal
        visible={props.visibility}
        animationType={"fade"}
        style={styles.container}
        onShow={() => alert("hahaha")}
      >
        <View>
          <Text>I'm model</Text>
          <Text onPress={props.hidden}>close me</Text>
        </View>
      </Modal>
    </View>
  );
};

export default Modalcomp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  }
});
