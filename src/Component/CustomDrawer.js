import {
  DrawerItemList,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import React, { Component } from "react";
import { Text, StyleSheet, View, ImageBackground, Image } from "react-native";

function CustomDrawer({ ...props }) {
  function signOut() {
    auth().signOut();
  }
  return (
    <View style={styles.container}>
      <View style={styles.drawerImg}>
        <ImageBackground
          source={require("../../assets/backdrawer.png")}
          style={{ height: 200 }}
        >
          <Image
            source={require("../../assets/pefi.png")}
            resizeMode="contain"
            style={{ width: 80, marginLeft: 20, marginTop: -60 }}
          />
        </ImageBackground>
      </View>

      <DrawerItemList {...props} />
    </View>
  );
}
export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
