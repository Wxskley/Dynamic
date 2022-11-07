import { useNavigation } from "@react-navigation/core";
import React from "react";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../firebase";

//tabNavigation
import Execicios from "./Tab/Execicios";
import calculadora from "./Tab/calculadora";
import Seach from "./Tab/Seach";
import Cronometro from "./Tab/Cronometro";
import Pefil from "./Drawe/Pefil";
import Ajuda from "./Drawe/Ajuda";
import { color } from "react-native-reanimated";
import {
  Entypo,
  Feather,
  FontAwesome,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import CustomDrawer from "../src/Component/CustomDrawer";

const Drawer = createDrawerNavigator();

function Draw() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: "#000000",
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          paddingBottom: 5,
          borderTopColor: "transparent",
          backgroundColor: "#000000",
          color: "#ffffff",
        },
      }}
    >
      <Tab.Screen
        name="Execicios"
        component={Execicios}
        options={{
          tabBarActiveBackgroundColor: "white",
          paddingTop: 5,
          paddingBottom: 10,
          tabBarActiveTintColor: "black",
          headerShown: false,

          tabBarIcon: ({ size, color }) => (
            <Ionicons name="barbell" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Montar Treino"
        component={Seach}
        options={{
          tabBarActiveBackgroundColor: "white",
          paddingTop: 5,
          paddingBottom: 10,
          tabBarActiveTintColor: "black",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="create" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cronômetro"
        component={Cronometro}
        options={{
          tabBarActiveBackgroundColor: "white",
          paddingTop: 5,
          paddingBottom: 10,
          tabBarActiveTintColor: "black",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="md-timer" size={size} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Calculadoras"
        component={calculadora}
        options={{
          tabBarActiveBackgroundColor: "white",
          paddingTop: 5,
          paddingBottom: 10,
          tabBarActiveTintColor: "black",
          tabBarIcon: ({ size, color }) => (
            <Entypo name="calculator" size={size} color={color} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <Drawer.Navigator
      useLegacyImplementation={true}
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerTintColor: "white",
        drawerActiveTintColor: "black",
        drawerInactiveBackgroundColor: "#e6e6e6",
        drawerInactiveTintColor: "#000000",
        drawerItemStyle: {},
        drawerStyle: {
          backgroundColor: "#e6e6e6",
        },
        drawerLabelStyle: {
          fontWeight: "bold",
          fontSize: 15,
          margin: 3,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        options={{
          headerShown: false,
          drawerIcon: ({ size, color }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
        component={Draw}
      />
      <Drawer.Screen
        name="Editar Perfil"
        options={{
          headerStyle: {
            backgroundColor: "#000000",
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            shadowColor: "white",
          },
          drawerIcon: ({ size, color }) => (
            <FontAwesome5 name="edit" size={size} color={color} />
          ),
        }}
        component={Pefil}
      />

      <Drawer.Screen
        name="Sobre"
        options={{
          headerStyle: {
            backgroundColor: "#000000",
          },
          drawerIcon: ({ size, color }) => (
            <Ionicons name="help" size={size} color={color} />
          ),
        }}
        component={Ajuda}
      />
    </Drawer.Navigator>
  );
}
