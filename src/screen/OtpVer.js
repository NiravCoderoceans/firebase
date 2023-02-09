import React from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Input from "../com/Input";
import NaviButton from "../com/NaviButton";

const verifyOtp = () => {
  try {
  } catch (error) {}
};

const OtpVer = ({ navigation }) => {
  const [otp, setOtp] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <View style={{ marginTop: 200 }}>
        <Input placeholder="Enter OTP" maxLength={6} keyboardType="numeric" />
      </View>
      <View style={{ marginTop: 30 }}>
        <NaviButton
          name="Verify OTP"
          onPress={() => {
            verifyOtp();
            // navigation.navigate("Welcome");
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
        <Text>Wrong number?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PhoneLog");
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

export default OtpVer;
