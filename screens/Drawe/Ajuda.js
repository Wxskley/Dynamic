import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  TextInputComponent,
  Alert,
} from "react-native";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import * as MailComposer from "expo-mail-composer";

export default function Ajuda() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return <View style={styles.container}></View>;
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 35,
    flex: 1,
  },
  input: {
    width: "80%",
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    padding: 10,
    backgroundColor: "#fff",
    margin: 10,
  },
  button: {
    width: "40%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
    borderRadius: 10,
    fontWeight: "bold",
    margin: 10,
  },
});
