import {
  DrawerItemList,
  DrawerItem,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Modal,
} from "react-native";
import * as MailComposer from "expo-mail-composer";
import { auth } from "../../firebase";
import { SafeAreaView } from "react-native-safe-area-context";
import { SimpleModal } from "./SimpleModal";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

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
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <Text style={{ fontWeight: "bold" }}>Deseja Realmente Sair?</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "red",
                width: 70,
                height: 25,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={{ fontWeight: "bold", color: "white" }}>Não</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "black",
                width: 70,
                height: 25,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 10,
              }}
              onPress={handleSignOut}
            >
              <Text style={{ fontWeight: "bold", color: "white" }}>Sim</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={{ marginTop: 40 }}>
        <DrawerItemList {...props} />
        <DrawerItem
          onPress={sendEmail}
          labelStyle={{ fontWeight: "bold", color: "black" }}
          label="Ajuda"
          icon={({ color, size }) => (
            <Ionicons name="help" size={size} color="black" />
          )}
        />
        <DrawerItem
          label="Sair"
          onPress={() => setModalVisible(true)}
          labelStyle={{ fontWeight: "bold", color: "black" }}
          icon={({ color, size }) => (
            <Entypo name="log-out" size={size} color="black" />
          )}
        />
      </View>
    </View>
  );
}
export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalView: {
    marginTop: "80%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 25,

    justifyContent: "flex-end",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
