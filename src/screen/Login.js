import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Input from "../com/Input";
import NaviButton from "../com/NaviButton";
import LoginOption from "../com/LoginOption";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { LoginManager, AccessToken } from "react-native-fbsdk-next";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [pass, setpass] = useState();

  const loggedIn = () => {
    auth()
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        console.log("User Login");
        navigation.navigate("Welcome", { paramName: "user" });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  GoogleSignin.configure({
    webClientId:
      "953143418756-cbmmc3g52khmqrhjeg51fcefgv4rnfr2.apps.googleusercontent.com",
  });

  let GoogleLogin = async () => {
    try {
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      auth().signInWithCredential(googleCredential);
      console.log({ idToken });
      navigation.navigate("Welcome", { paramName: "google" });
    } catch (error) {
      console.log(error);
    }
  };

  let facebookLogin = async () => {
    // const result = await LoginManager.logInWithPermissions();
    // const data = await AccessToken.getCurrentAccessToken();
    // const facebookCredential = auth.FacebookAuthProvider.credential(
    //   data.accessToken
    // );
    // auth()
    //   .signInWithCredential(facebookCredential)
    //   .then(() => {
    //     console.log("User Login");
    //     navigation.navigate("Welcome",{ paramName: "google" });
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Text style={styles.text1}>Hello Again!</Text>
      <Text style={styles.text2}>Welcome To Coderoceans</Text>
      <View style={{ marginTop: 30 }}>
        <Input
          placeholder="Enter Username"
          onChangeText={(val) => setEmail(val)}
        />
        <Input placeholder="Password" onChangeText={(val) => setpass(val)} />
      </View>
      <View style={{ marginTop: 50 }}>
        <NaviButton name="Login" onPress={() => loggedIn()} />
      </View>
      <View style={{ alignItems: "center", marginVertical: 30 }}>
        <Text>continue with</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <LoginOption
          img={require("../../assets/images/google.png")}
          onPress={() => GoogleLogin()}
        />
        <LoginOption
          img={require("../../assets/images/facebook.png")}
          onPress={() => facebookLogin()}
        />
        <LoginOption
          img={require("../../assets/images/mobile.png")}
          onPress={() => {
            navigation.navigate("PhoneLog");
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Not Registered?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text style={styles.signup}> Signup Now</Text>
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
  text1: {
    fontSize: 25,
    fontWeight: "900",
    alignSelf: "center",
    marginTop: 55,
  },
  text2: {
    fontSize: 23,
    alignSelf: "center",
    marginTop: 10,
  },
  signup: {
    color: "blue",
  },
});

export default Login;
