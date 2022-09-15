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
import Header from "../../src/Component/Header";

const Perfil = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.drawerImg}>
          <Image
            source={require("../../assets/pefi.png")}
            resizeMode="contain"
            style={{
              width: 80,
              padding: 70,
              flex: 1,
              marginTop: 25,
              marginLeft: "30%",
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Perfil;

const styles = StyleSheet.create({
  drawerImg: {
    backgroundColor: "#000000",
    height: 210,
  },
});
