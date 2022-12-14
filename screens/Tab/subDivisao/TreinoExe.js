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
import { AntDesign } from "@expo/vector-icons";
import { TranningA } from "./TranningA";

import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";

const TreinoExe = () => {
  const navigation = useNavigation();

  return <TranningA />;
};

export default TreinoExe;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%",
    fontSize: 12,
  },
  container1: {
    flexDirection: "row",
  },
  btn12: {
    width: 80,
    marginLeft: 10,
    backgroundColor: "#FFA500",
    marginBottom: 12,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: "#000000",
    marginTop: 270,
    height: 35,
  },
  box: {
    padding: 10,
    borderBottomWidth: 1,
    backgroundColor: "#33373a",

    height: 50,
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
  },
  iconn: {
    justifyContent: "space-between",
    flexDirection: "row",
    flex: 1,
    marginLeft: 325,
  },
});
