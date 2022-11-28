import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Header from "../../../src/Component/Header";
import { TranningA } from "./TranningA";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";

const TranningC = () => {
  const navigation = useNavigation();

  return <TranningA />;
};

export default TranningC;
