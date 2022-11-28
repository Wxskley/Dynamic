import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../../src/Component/Header";
import { TextInput } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import {
  Entypo,
  Feather,
  FontAwesome,
  FontAwesome5,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function Perfil() {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [nome, setNome] = useState(" Marcio");
  const [sobrenome, setSobrenome] = useState(" Douglas");
  const [email, setEmail] = useState(" dmarcio998@gmail.com");
  const [peso, setPeso] = useState(" 65");
  const [altura, setAltura] = useState(" 1.65");
  const pickImage = async () => {
    Alert.alert("Editar Perfil", "Salvo com Sucesso");
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder=" Nome"
        placeholderTextColor="#a8a8a8"
        style={styles.input}
        value={nome}
      />
      <TextInput
        placeholder=" Sobrenome"
        placeholderTextColor="#a8a8a8"
        style={styles.input}
        value={sobrenome}
      />

      <TextInput
        placeholder=" Email"
        placeholderTextColor="#a8a8a8"
        value={email}
        style={styles.input}
      />
      <TextInput
        placeholder=" Peso"
        placeholderTextColor="#a8a8a8"
        style={styles.input}
        value={peso}
      />
      <TextInput
        placeholder=" Altura"
        placeholderTextColor="#a8a8a8"
        style={styles.input}
        value={altura}
      />

      <TouchableOpacity style={styles.btn12} onPress={pickImage}>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          SALVAR
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
  },

  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "white",
    width: "80%",
    margin: 10,
    height: 40,
    fontSize: 17,
    color: "white",
  },
  btn12: {
    width: "80%",

    backgroundColor: "#FFA500",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    height: 35,
  },
});
