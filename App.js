import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useHeaderHeight } from "@react-navigation/elements";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import TranningA from "./screens/Tab/subDivisao/TranningA";
import PagInicial from "./screens/PagInicial";
import ForgetPassword from "./screens/ForgetPassword";
import Execicios from "./screens/Tab/Execicios";
import { ScreenStackHeaderConfig } from "react-native-screens";

const Stack = createNativeStackNavigator();
const HomeStyle = {
  title: "",

  headerStyle: {
    backgroundColor: "#000000",
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="PagInicial"
          component={PagInicial}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ForgetPassword"
          component={ForgetPassword}
        />
        <Stack.Screen
          options={{ headerShown: false, gestureEnabled: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{title:"Treino A"}}
          name="TranningA"
          component={TranningA}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
