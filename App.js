import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useHeaderHeight } from "@react-navigation/elements";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import TranningA from "./screens/Tab/subDivisao/TranningA";
import TranningB from "./screens/Tab/subDivisao/TranningB";
import TranningC from "./screens/Tab/subDivisao/TranningC";
import ManterPeso from "./screens/Tab/subCalc/ManterPeso";
import PagInicial from "./screens/PagInicial";
import ForgetPassword from "./screens/ForgetPassword";
import Execicios from "./screens/Tab/subDivisao/TreinoExe";
import { ScreenStackHeaderConfig } from "react-native-screens";
import TreinoExe from "./screens/Tab/subDivisao/TreinoExe";
import TutoPag from "./src/Component/TutoPag";
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
          options={{
            title: "Treino A",
            headerStyle: {
              backgroundColor: "#000000",
            },
            headerBackTitleVisible: false,

            headerTintColor: "white",
          }}
          name="TranningA"
          component={TranningA}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="TranningB"
          component={TranningB}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="TranningC"
          component={TranningC}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "#000000",
            },
            headerTintColor: "white",
          }}
          name="ManterPeso"
          component={ManterPeso}
        />
        <Stack.Screen
          options={{
            title: "Execicios",
            headerStyle: {
              backgroundColor: "#000000",
            },
            headerBackTitleVisible: false,

            headerTintColor: "white",
          }}
          name="TreinoExe"
          component={TreinoExe}
        />
        <Stack.Screen
          options={{
            title: "Execicios",
            headerStyle: {
              backgroundColor: "#000000",
            },
            headerBackTitleVisible: false,

            headerTintColor: "white",
          }}
          name="TutoPag"
          component={TutoPag}
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
