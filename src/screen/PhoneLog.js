import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import Input from "../com/Input";
import NaviButton from "../com/NaviButton";
import auth from "@react-native-firebase/auth";

const PhoneLog = ({ navigation }) => {
  const [phoneNo, setPhoneNo] = useState("");
  const [otp, setOtp] = useState("");
  const [confirm, setConfirm] = useState(null);

  const sendVerification = async () => {
    const confirmation = await auth().signInWithPhoneNumber(phoneNo);
    alert("OTP is sent");
    setConfirm(confirmation);
  };

  const confirmCode = async () => {
    try {
      await confirm.confirm(otp);
      console.log("verified ");
      navigation.navigate("Welcome", { paramName: "phone" });
    } catch (error) {
      console.log(error, "Invalid code.");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <View style={{ marginTop: 150 }}>
        <Input
          placeholder="Enter mobile number"
          maxLength={13}
          onChangeText={(val) => setPhoneNo(val)}
        />
      </View>
      <View style={{ marginTop: 30 }}>
        <NaviButton
          name="Get OTP"
          id="sign-in-button"
          onPress={() => {
            sendVerification();
          }}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Input
          placeholder="Enter OTP"
          maxLength={6}
          keyboardType="numeric"
          onChangeText={(val) => setOtp(val)}
        />
      </View>
      <View style={{ marginTop: 30 }}>
        <NaviButton
          name="Verify OTP"
          onPress={() => {
            confirmCode();
          }}
        />
      </View>

      <View
        style={{
          marginTop: 30,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Text>Login using user id</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.loginTxt}> Click Here</Text>
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

export default PhoneLog;
