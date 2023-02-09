import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const NaviButton = (props) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} {...props}>
        <Text style={styles.btnText}>{props.name} </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 45,
    width: 270,
    borderRadius: 10,
    alignSelf: "center",
    backgroundColor: "#fd6b68",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#fd6b68",
    shadowOpacity: 1,
    elevation: 30,
  },
  btnText: { color: "#ffffff" },
});

export default NaviButton;
