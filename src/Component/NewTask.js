import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";

export default function NewTask({ addNewTask }) {
  const [task, setTask] = useState("");
  const [tasker, setTasker] = useState("");

  function AddTaskAction() {
    if (task === "") return alert("Preencha o Campo!");

    addNewTask(task);

    setTask("");
  }

  function deleteTaskLetterByLetter() {
    const taskTextReduced = task.substring(0, task.length - 1);
    setTask(taskTextReduced);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={{
          borderBottomColor: "#d3d3d3",
          borderBottomWidth: 1,
          width: "90%",
          marginTop: 20,
          color: "white",
          fontSize: 23,
        }}
        placeholder="Qual O Seu Execicio?"
        placeholderTextColor={"#d3d3d3"}
        onChangeText={(value) => setTask(value)}
        value={task}
      />

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.btn} onPress={deleteTaskLetterByLetter}>
          <Text style={{ fontWeight: "bold", marginTop: 20, marginTop: 0 }}>
            <Feather name="delete" size={30} color="#3B5368" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 20,
            marginLeft: 10,
            backgroundColor: "#FFA500",
            width: 280,
            justifyContent: "center",
            alignItems: "center",
            borderBottomEndRadius: 5,
            borderTopStartRadius: 5,
            borderTopEndRadius: 5,
            height: 38,
          }}
          onPress={AddTaskAction}
        >
          <Text
            style={{
              color: "white",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: 22,
            }}
          >
            ADICIONAR
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#33373a",

    width: "100%",
    height: 120,
    alignItems: "center",
    borderBottomEndRadius: 7,
    borderBottomStartRadius: 7,
  },
  btn: {
    width: 50,
    height: 38,
    marginTop: 20,
    backgroundColor: "#FFA500",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
});
