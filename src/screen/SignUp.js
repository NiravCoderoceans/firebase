import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
} from "react-native";
import Input from "../com/Input";
import NaviButton from "../com/NaviButton";
import auth from "@react-native-firebase/auth";

const SignUp = ({ navigation }) => {
  const signIn = () => {
    auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(() => {
        console.log("User account created & signed in!");
        alert("SignUp successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [email, setEmail] = useState("");
  const [pass, setpass] = useState();

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={{ marginTop: 120 }}>
        <Input
          placeholder="Enter username"
          onChangeText={(val) => setEmail(val)}
        />
        <Input
          placeholder="Enter password"
          onChangeText={(val) => setpass(val)}
        />
      </View>
      <View style={{ marginTop: 50 }}>
        <NaviButton name="Signup" onPress={() => signIn()} />
      </View>
      <View
        style={{
          marginTop: 30,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Text>Already Registered?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.loginTxt}> Login Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e4f0f7",
  },
  loginTxt: {
    color: "blue",
  },
});

export default SignUp;
