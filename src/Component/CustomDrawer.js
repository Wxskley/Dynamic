import {
  DrawerItemList,
  DrawerItem,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/core";
import React, { Component } from "react";
import { Text, StyleSheet, View, ImageBackground, Image } from "react-native";
import * as MailComposer from "expo-mail-composer";
import { auth } from "../../firebase";
function sendEmail(e) {
  e.preventDefault();
  MailComposer.composeAsync({
    subject: "",
    body: "digite aqui os detalhes",
    recipients: ["dmarcio998@gmail.com"],
    isHtml: true,
  });
}
function CustomDrawer({ ...props }) {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };
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
      <DrawerItem label="Ajuda" onPress={sendEmail} style={{}} />
      <DrawerItem label="Sair" onPress={handleSignOut} style={{}} />
    </View>
  );
}
export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
