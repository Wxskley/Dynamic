import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import Seach from "../../screens/Tab/Execicios";

export function Header({ newTaskIsVisible, setNewTaskIsVisible }) {
  const navigation = useNavigation();
  return (
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
        Treinar
      </Text>

      <View style={styles.containerRight}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setNewTaskIsVisible(!newTaskIsVisible)}
        >
          <Text style={{ fontWeight: "bold", marginTop: 20 }}>
            <Feather
              name={newTaskIsVisible ? "x" : "plus"}
              size={30}
              color="white"
            />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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
