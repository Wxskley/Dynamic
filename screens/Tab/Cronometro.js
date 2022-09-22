import { StatusBar } from "expo-status-bar";
import React, { useState, Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Entypo, Foundation, FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

export default function Cronometro() {
  const [secods, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [customInterval, setCustomInterval] = useState(0);

  const startTime = () => {
    setCustomInterval(
      setInterval(() => {
        changeTime();
      }, 1000)
    );
  };

  const stopTimer = () => {
    if (customInterval) clearInterval(customInterval);
  };
  const clear = () => {
    stopTimer();
    setSeconds(0);
    setMinutes(0);
  };
  const changeTime = () => {
    setSeconds((prevState) => {
      if (prevState + 1 == 60) {
        setMinutes((prevState) => {
          return prevState + 1;
        });
        return 0;
      }
      return prevState + 1;
    });
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/cro.png")}
        resizeMode="contain"
        style={{
          width: "85%",
          height: "90%",
          marginLeft: 48,
          justifyContent: "center",
          marginTop: 70,
          alignItems: "center",
          flex: 1,
        }}
      >
        <Text style={styles.timer}>
          {minutes < 10 ? "0" + minutes : minutes}:
          {secods < 10 ? "0" + secods : secods}
        </Text>
      </ImageBackground>
      <View
        style={{
          flexDirection: "row",
          marginBottom: 60,
        }}
      >
        <View
          style={{
            borderWidth: 1.5,
            borderColor: "#4f5053",
            borderRadius: 50,
            height: 80,
            width: 80,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            onPress={clear}
            style={{
              backgroundColor: "#4f5053",
              marginLeft: 100,
              width: 70,
              height: 70,
              borderRadius: 50,
              marginRight: 100,
              position: "absolute",
            }}
          >
            <Text
              style={{
                alignItems: "center",
                justifyContent: "center,",
                textAlign: "center",
                color: "white",
                fontWeight: "900",
                marginTop: 28,
              }}
            >
              Limpar
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderWidth: 1.5,
            borderColor: "#4f5053",
            borderRadius: 50,
            height: 80,
            width: 80,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginLeft: 50,
          }}
        >
          <TouchableOpacity
            onPress={stopTimer}
            style={{
              backgroundColor: "#4f5053",
              marginLeft: 100,
              width: 70,
              height: 70,
              borderRadius: 50,
              marginRight: 100,
              position: "absolute",
            }}
          >
            <Text
              style={{
                alignItems: "center",
                justifyContent: "center,",
                textAlign: "center",
                color: "white",
                fontWeight: "900",
                marginTop: 28,
              }}
            >
              Pausar
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderWidth: 1.5,
            borderColor: "green",
            borderRadius: 50,
            height: 80,
            width: 80,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginLeft: 50,
          }}
        >
          <TouchableOpacity
            onPress={startTime}
            style={{
              backgroundColor: "green",
              marginLeft: 100,
              width: 70,
              height: 70,
              borderRadius: 50,
              marginRight: 100,
              position: "absolute",
            }}
          >
            <Text
              style={{
                alignItems: "center",
                justifyContent: "center,",
                textAlign: "center",
                color: "white",
                fontWeight: "900",
                marginTop: 28,
              }}
            >
              Iniciar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25272b",
  },
  timer: {
    color: "#ffa500",
    fontSize: 70,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
    marginRight: 43,
    marginBottom: 45,
  },
  btnArea: {
    flexDirection: "row",
    marginTop: 70,
    height: 40,
  },
  botao: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    height: 40,
    margin: 17,
    borderRadius: 9,
  },
  btnTexto: { fontSize: 20, fontWeight: "bold", color: "#00aeef" },
});
