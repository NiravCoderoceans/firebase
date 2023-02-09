import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

const Input = (props) => {
  return (
    <View style={{ boxShadow: "30px" }}>
      <TextInput
        placeholder={props.placeholder}
        style={styles.textInput}
        {...props}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    height: 45,
    width: 270,
    borderRadius: 10,
    alignSelf: "center",
    backgroundColor: "#ffffff",
    marginTop: 20,
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 24,
  },
});

export default Input;
