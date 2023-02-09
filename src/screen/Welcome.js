import React from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { LoginManager, AccessToken } from "react-native-fbsdk-next";

const Welcome = ({ navigation, route }) => {
  let para = route.params.paramName;

  console.log(para);
  GoogleSignin.configure({
    webClientId:
      "953143418756-cbmmc3g52khmqrhjeg51fcefgv4rnfr2.apps.googleusercontent.com",
  });

  let logoutUser = async () => {
    if (para == "google") {
      try {
        await GoogleSignin.signOut();

        console.log("signOut");
        navigation.navigate("Login");
      } catch (error) {
        console.log(error);
      }
    } else {
      auth()
        .signOut()
        .then(() => {
          console.log("User signed out!"), navigation.navigate("Login");
        });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Text style={styles.text1}>Welcome You are logged in Now</Text>

      <TouchableOpacity onPress={() => logoutUser()} style={styles.button}>
        <Text>Username</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e4f0f7",
  },
  text1: {
    fontSize: 25,
    fontWeight: "900",
    alignSelf: "center",
    marginTop: 55,
  },
  button: {
    height: 45,
    width: 70,
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
    alignSelf: "center",
    backgroundColor: "#e4f0f7",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Welcome;
