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
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Task } from "../../../src/Component/Task";
import NewTask from "../../../src/Component/NewTask";

import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { AntDesign, Feather } from "@expo/vector-icons";
import Seach from "../Execicios";
import { Header } from "../../../src/Component/Header";
import { Video } from "../../../src/Component/Video";
import { set } from "react-native-reanimated";

export function TranningA() {
  const navigation = useNavigation();

  const [tasks, setTasks] = useState([]);
  const [finishedTasks, setFinishedTasks] = useState([]);
  const [newTaskIsVisible, setNewTaskIsVisible] = useState(false);

  function addNewTask(content) {
    let id = tasks.length === 0 ? 0 : tasks.length + 1 - 1;

    const taskObject = { id: id, content: content };
    let newTasks = [...tasks, taskObject];

    newTasks.sort((a, b) => {
      if (a.id > b.id) return -1;
      else return true;
    });
    setTasks(newTasks);
  }

  function taskCompletd(id) {
    let filter = tasks.filter((item) => item.id !== id);
    setTasks(filter);

    const taskFiltered = tasks.filter((item) => item.id === id);
    let newFinishedTasks = finishedTasks;

    newFinishedTasks.push({
      id: finishedTasks.length + 1 - 1,
      content: taskFiltered[0].content,
      isFinished: true,
    });
    newFinishedTasks.sort((a, b) => {
      if (a.id > b.id) return -1;
      else return true;
    });
    setFinishedTasks(newFinishedTasks);
  }
  return (
    <View>
      <Header
        newTaskIsVisible={newTaskIsVisible}
        setNewTaskIsVisible={setNewTaskIsVisible}
      />
      {newTaskIsVisible && <NewTask addNewTask={addNewTask} />}
      <ScrollView contentContainerStyle={{ paddingBottom: 210 }}>
        {tasks.map((item) => (
          <Task key={item.id} data={item} action={(id) => taskCompletd(id)} />
        ))}
        {finishedTasks.length === 0 && (
          <>
            <View></View>
            {finishedTasks.map((item) => (
              <Task
                key={item.id}
                data={item}
                action={() => alert("Execicio deletado")}
              />
            ))}
          </>
        )}
      </ScrollView>
    </View>
  );
}

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
