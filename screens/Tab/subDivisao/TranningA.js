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

const TranningA = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../../assets/Mtreino.png")}
          style={{ width: "100%", flex: 1 }}
          resizeMode="cover"
        ></ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
};

export default TranningA;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
