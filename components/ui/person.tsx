import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import Icon from "./icon";

const Person = (props) => {
  const personInfo = props.info;
  return (
    <Pressable onPress={props.onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{personInfo.displayName}</Text>
        <Icon name="chatbox-ellipses-outline" size={24} color="green" />
      </View>
    </Pressable>
  );
};

export default Person;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#d2d2d2",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#e0e0e0",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "left",
  },
});
