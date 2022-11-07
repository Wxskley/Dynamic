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

import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";

const TranningA = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView>
      <View style={styles.container}>
        <View style={styles.container1}>
          <TouchableOpacity
            style={styles.btn12}
            onPress={() => navigation.navigate("TreinoExe")}
          >
            <Text style={styles.textButton}>Novo Execicio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn12}>
            <Text style={styles.textButton}>Salvar</Text>
          </TouchableOpacity>
          <TextInput
            placeholder="Buscar..."
            placeholderTextColor="black"
            style={{
              width: 180,
              height: 35,
              borderWidth: 1,
              backgroundColor: "#ffffff",
              borderRadius: 7,
              color: "black",
              justifyContent: "space-between",
              marginTop: 270,
              marginLeft: 10,
            }}
          />
          <View style={{ marginTop: 272, marginLeft: -32 }}>
            <Ionicons name="md-search-circle" size={30} color="black" />
          </View>
        </View>
        <ScrollView>
          <View style={styles.box}>
            <View
              style={{
                backgroundColor: "#387ce1",
                height: 35,
                width: 35,
                borderRadius: 50,
                marginTop: 80,
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",

                  marginTop: 4,
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "900",
                  fontSize: 28,
                }}
              >
                1
              </Text>
            </View>
          </View>
          <View style={styles.box}>
            <View
              style={{
                backgroundColor: "#387ce1",
                height: 35,
                width: 35,
                borderRadius: 50,
                marginTop: 80,
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",

                  marginTop: 4,
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "900",
                  fontSize: 28,
                }}
              >
                2
              </Text>
            </View>
          </View>
          <View style={styles.box}>
            <View
              style={{
                backgroundColor: "#387ce1",
                height: 35,
                width: 35,
                borderRadius: 50,
                marginTop: 80,
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",

                  marginTop: 4,
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "900",
                  fontSize: 28,
                }}
              >
                3
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default TranningA;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%",
    fontSize: 12,
  },
  container1: {
    flexDirection: "row",
  },
  btn12: {
    width: 80,
    marginLeft: 10,
    backgroundColor: "#FFA500",
    marginBottom: 12,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: "#000000",
    marginTop: 270,
    height: 35,
  },
  box: {
    padding: 10,
    margin: 8,
    backgroundColor: "#33373a",
    borderRadius: 15,
    height: 200,
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
  },
});
