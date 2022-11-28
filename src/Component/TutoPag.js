import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Button,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Video, AVPlaybackStatus } from "expo-av";
import { AntDesign, Feather } from "@expo/vector-icons";
const TutoPag = ({ navigation }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const video1 = React.useRef(null);
  const [statuss, setStatuss] = React.useState({});

  const video2 = React.useRef(null);
  const [statussa, setStatussa] = React.useState({});

  const video3 = React.useRef(null);
  const [statussb, setStatussb] = React.useState({});

  const video4 = React.useRef(null);
  const [statussc, setStatussc] = React.useState({});

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={{ backgroundColor: "black" }}>
      <StatusBar backgroundColor="#61dafb" style="light" />

      <View style={{ backgroundColor: "black" }}>
        <ScrollView style={{ marginTop: 30 }}>
          <View style={styles.box}>
            <ImageBackground
              style={{
                width: 310,
                height: 243,
                marginTop: -6,
                marginLeft: 35,
              }}
              resizeMode="cover"
              source={require("../../assets/tuto1.png")}
            >
              <View
                style={{
                  backgroundColor: "#FFA500",
                  height: 30,
                  width: 30,
                  borderRadius: 50,
                  marginTop: 115,
                  marginLeft: -35,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    marginTop: 5,
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "900",
                    fontSize: 20,
                  }}
                >
                  1
                </Text>
              </View>
              <Text
                style={{
                  color: "white",
                  marginTop: -130,
                  marginLeft: 50,
                  fontWeight: "900",
                  fontSize: 20,
                }}
              >
                Supino Reto Com barra
              </Text>
            </ImageBackground>
            <View style={{ marginLeft: 300, marginTop: -238 }}>
              <TouchableOpacity
                onPress={() =>
                  status.isPlaying
                    ? video.current.pauseAsync()
                    : video.current.playAsync()
                }
              >
                <Ionicons
                  name={
                    status.isPlaying ? "pause-circle-outline" : "play-circle"
                  }
                  size={35}
                  color="white"
                />
              </TouchableOpacity>
            </View>
            <Video
              ref={video}
              style={styles.video}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/project-33f7a.appspot.com/o/y2meta.com-Supino%20Reto%20com%20Barra%20-%20Exerc%C3%ADcio%20para%20Peito-(480p).mp4?alt=media&token=2568db9d-eb6e-46ab-9269-557c1b840ae5",
              }}
              useNativeControls
              resizeMode="contain"
              isLooping
              onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            />
          </View>
          <View style={styles.box}>
            <ImageBackground
              style={{
                width: 310,
                height: 243,
                marginTop: -6,
                marginLeft: 35,
              }}
              resizeMode="cover"
              source={require("../../assets/tuto2.png")}
            >
              <View
                style={{
                  backgroundColor: "#FFA500",
                  height: 30,
                  width: 30,
                  borderRadius: 50,
                  marginTop: 115,
                  marginLeft: -35,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    marginTop: 5,
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "900",
                    fontSize: 20,
                  }}
                >
                  2
                </Text>
              </View>
              <Text
                style={{
                  color: "white",
                  marginTop: -130,
                  marginLeft: 50,
                  fontWeight: "900",
                  fontSize: 20,
                }}
              >
                Supino Chão
              </Text>
            </ImageBackground>
            <View style={{ marginLeft: 300, marginTop: -238 }}>
              <TouchableOpacity
                onPress={() =>
                  statuss.isPlaying
                    ? video1.current.pauseAsync()
                    : video1.current.playAsync()
                }
              >
                <Ionicons
                  name={
                    statuss.isPlaying ? "pause-circle-outline" : "play-circle"
                  }
                  size={35}
                  color="white"
                />
              </TouchableOpacity>
            </View>
            <Video
              ref={video1}
              style={styles.video}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/project-33f7a.appspot.com/o/supino%20chao.mp4?alt=media&token=46c10831-22a9-48bd-978c-b814feb97bd5",
              }}
              useNativeControls
              resizeMode="contain"
              isLooping
              onPlaybackStatusUpdate={(statuss) => setStatuss(() => statuss)}
            />
          </View>
          <View style={styles.box}>
            <ImageBackground
              style={{
                width: 310,
                height: 243,
                marginTop: -6,
                marginLeft: 35,
              }}
              resizeMode="cover"
              source={require("../../assets/tuto2.png")}
            >
              <View
                style={{
                  backgroundColor: "#FFA500",
                  height: 30,
                  width: 30,
                  borderRadius: 50,
                  marginTop: 115,
                  marginLeft: -35,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    marginTop: 5,
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "900",
                    fontSize: 20,
                  }}
                >
                  3
                </Text>
              </View>
              <Text
                style={{
                  color: "white",
                  marginTop: -130,
                  marginLeft: 50,
                  fontWeight: "900",
                  fontSize: 20,
                }}
              >
                Supino invertido com {"\n"}
                halteres
              </Text>
            </ImageBackground>
            <View style={{ marginLeft: 300, marginTop: -238 }}>
              <TouchableOpacity
                onPress={() =>
                  statussa.isPlaying
                    ? video2.current.pauseAsync()
                    : video2.current.playAsync()
                }
              >
                <Ionicons
                  name={
                    statussb.isPlaying ? "pause-circle-outline" : "play-circle"
                  }
                  size={35}
                  color="white"
                />
              </TouchableOpacity>
            </View>
            <Video
              ref={video2}
              style={styles.video}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/project-33f7a.appspot.com/o/supino%20invertido.mp4?alt=media&token=927f0c8d-08fb-4999-8c45-94c5a5f47896",
              }}
              useNativeControls
              resizeMode="contain"
              isLooping
              onPlaybackStatusUpdate={(statussb) => setStatussb(() => statussb)}
            />
          </View>
          <View style={styles.box}>
            <ImageBackground
              style={{
                width: 310,
                height: 243,
                marginTop: -6,
                marginLeft: 35,
              }}
              resizeMode="cover"
              source={require("../../assets/tuto2.png")}
            >
              <View
                style={{
                  backgroundColor: "#FFA500",
                  height: 30,
                  width: 30,
                  borderRadius: 50,
                  marginTop: 115,
                  marginLeft: -35,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    marginTop: 5,
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "900",
                    fontSize: 20,
                  }}
                >
                  4
                </Text>
              </View>
              <Text
                style={{
                  color: "white",
                  marginTop: -130,
                  marginLeft: 50,
                  fontWeight: "900",
                  fontSize: 20,
                }}
              >
                Supino inclinado na {"\n"}
                máquina
              </Text>
            </ImageBackground>
            <View style={{ marginLeft: 300, marginTop: -238 }}>
              <TouchableOpacity
                onPress={() =>
                  statussa.isPlaying
                    ? video3.current.pauseAsync()
                    : video3.current.playAsync()
                }
              >
                <Ionicons
                  name={
                    statussb.isPlaying ? "pause-circle-outline" : "play-circle"
                  }
                  size={35}
                  color="white"
                />
              </TouchableOpacity>
            </View>
            <Video
              ref={video3}
              style={styles.video}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/project-33f7a.appspot.com/o/inclinado%20na%20maquina.mp4?alt=media&token=6b07ab5c-6f61-417d-8818-6888e5457a55",
              }}
              useNativeControls
              resizeMode="contain"
              isLooping
              onPlaybackStatusUpdate={(statusb) => setStatussb(() => statusb)}
            />
          </View>
          <View style={styles.box}>
            <ImageBackground
              style={{
                width: 310,
                height: 243,
                marginTop: -6,
                marginLeft: 35,
              }}
              resizeMode="cover"
              source={require("../../assets/tuto2.png")}
            >
              <View
                style={{
                  backgroundColor: "#FFA500",
                  height: 30,
                  width: 30,
                  borderRadius: 50,
                  marginTop: 115,
                  marginLeft: -35,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    marginTop: 5,
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "900",
                    fontSize: 20,
                  }}
                >
                  5
                </Text>
              </View>
              <Text
                style={{
                  color: "white",
                  marginTop: -130,
                  marginLeft: 50,
                  fontWeight: "900",
                  fontSize: 20,
                }}
              >
                Rosca concentrada
              </Text>
            </ImageBackground>
            <View style={{ marginLeft: 300, marginTop: -238 }}>
              <TouchableOpacity
                onPress={() =>
                  statussa.isPlaying
                    ? video4.current.pauseAsync()
                    : video4.current.playAsync()
                }
              >
                <Ionicons
                  name={
                    statussc.isPlaying ? "pause-circle-outline" : "play-circle"
                  }
                  size={35}
                  color="white"
                />
              </TouchableOpacity>
            </View>
            <Video
              ref={video4}
              style={styles.video}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/project-33f7a.appspot.com/o/Concentrada.mp4?alt=media&token=6d66c839-ee30-46a7-8279-049cbb4f7e28",
              }}
              useNativeControls
              resizeMode="contain"
              isLooping
              onPlaybackStatusUpdate={(statussc) => setStatussc(() => statussc)}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default TutoPag;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10,
    paddingLeft: 10,
  },
  box: {
    padding: 10,
    margin: 8,
    backgroundColor: "#808080",
    borderRadius: 15,
    height: 250,
  },
  btn12: {
    width: "35%",
    marginLeft: 10,
    backgroundColor: "#FFA500",
    marginBottom: 12,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: "#000000",
    marginTop: 100,
    height: 30,
  },

  video: {
    alignSelf: "center",
    width: 295,
    height: 170,
    marginTop: 10,
    marginLeft: 45,
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 10,
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
