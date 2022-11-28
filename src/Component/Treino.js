import { useNavigation } from "@react-navigation/core";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  TextInputComponent,
  Alert,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import * as MailComposer from "expo-mail-composer";
import { AntDesign } from "@expo/vector-icons";
import Seach from "../../screens/Tab/Execicios";

const Treino = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <TouchableOpacity
          onPress={() => navigation.goBack(Seach)}
          style={{ marginTop: 20, marginLeft: 10 }}
        >
          <AntDesign name="left" size={24} color="white" />
        </TouchableOpacity>
        <Text
          style={{
            color: "white",
            marginTop: 20,
            fontSize: 23,
            fontWeight: "bold",
          }}
        >
          Treino A
        </Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={{ fontWeight: "bold", marginTop: 20 }}>
            <AntDesign name="plus" size={35} color="white" />
          </Text>
        </TouchableOpacity>
      </View>
      <CreateTreino />
      <ScrollView>
        {exe?.map((item) => (
          <Exe key={item.id} data={item} action={() => alert("aviso")} />
        ))}
      </ScrollView>
    </View>
  );
};
export default Treino;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    fontSize: 12,
  },

  container1: {
    backgroundColor: "#000000",
    width: "100%",
    height: 80,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  btn: {
    marginRight: 10,
  },
});
