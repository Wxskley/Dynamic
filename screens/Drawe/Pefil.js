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
} from "react-native";
import React from "react";
import Header from "../../src/Component/Header";
import { TextInput } from "react-native-gesture-handler";
import {
  Entypo,
  Feather,
  FontAwesome,
  FontAwesome5,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
const Perfil = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
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
        <MaterialIcons name="photo-camera" size={24} color="white" />
      </View>
      <KeyboardAvoidingView
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <View style={styles.subcontainer}>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            placeholderTextColor={"#000000"}
          />
          <FontAwesome5 name="user" size={24} color="black" />
        </View>

        <View style={{ marginLeft: -73 }}>
          <View style={styles.subcontainer}>
            <TextInput
              style={styles.input}
              placeholder="Sobrenome"
              placeholderTextColor={"#000000"}
            />
            <FontAwesome5 name="user" size={24} color="black" />
          </View>
        </View>
      </KeyboardAvoidingView>
      <KeyboardAvoidingView>
        <View style={styles.subcontainer}>
          <TextInput
            style={{ borderBottomWidth: 1, width: "91%" }}
            placeholder="Email"
            placeholderTextColor={"#000000"}
          />
          <MaterialCommunityIcons
            name="email-outline"
            size={24}
            color="black"
          />
        </View>
      </KeyboardAvoidingView>
      <KeyboardAvoidingView
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <View style={styles.subcontainer}>
          <TextInput
            style={styles.input}
            placeholder="Idade"
            placeholderTextColor={"#000000"}
          />
          <Entypo name="creative-commons-attribution" size={24} color="black" />
        </View>

        <View style={{ marginLeft: -73 }}>
          <View style={styles.subcontainer}>
            <TextInput
              style={styles.input}
              placeholder="Peso"
              placeholderTextColor={"#000000"}
            />
            <MaterialCommunityIcons
              name="weight-kilogram"
              size={24}
              color="black"
            />
          </View>
        </View>
      </KeyboardAvoidingView>
      <TouchableOpacity style={styles.btn12}>
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
    </SafeAreaView>
  );
};

export default Perfil;

const styles = StyleSheet.create({
  drawerImg: {
    backgroundColor: "#000000",
    height: 210,
  },
  container: {
    flexDirection: "row",
    justifyContent: "",
  },
  subcontainer: {
    padding: 20,
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
  },
  input: {
    borderBottomWidth: 1,
    width: "55%",
  },
  btn12: {
    width: "50%",
    marginLeft: 90,
    backgroundColor: "#FFA500",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: "#000000",
    marginTop: 20,
    height: 30,
  },
});
