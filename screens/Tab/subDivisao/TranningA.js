import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Header from "../../../src/Component/Header";
import { Pressable } from "react-native-web";
import { TextInput } from "react-native-gesture-handler";

const TranningA = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../../assets/subHome.png")}
          style={{ width: "100%", flex: 1 }}
          resizeMode="cover"
        >
          
          
    <TextInput
    placeholder="Pesquisar"
    placeholderTextColor={"#000000"}
    style={styles.inpute}
    />
          
        </ImageBackground>
    
      </View>
    </SafeAreaView>
  );
};

export default TranningA;

const styles = StyleSheet.create({
  container: {
    padding: 10,

    backgroundColor: "#000000",

    height: 280,
  },
  inpute:{
    borderWidth:1,
    back

  }
});