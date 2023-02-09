import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "expo-dev-client";
import Login from "./src/screen/Login";
import Welcome from "./src/screen/Welcome";
import SignUp from "./src/screen/SignUp";
import PhoneLog from "./src/screen/PhoneLog";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="PhoneLog" component={PhoneLog} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
